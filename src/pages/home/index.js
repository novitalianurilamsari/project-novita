import React, { useState, useEffect } from "react";
import {
  SongCard,
  SongSearch,
  SongPlaylistTitle,
  SongForm,
} from "../../components";
import axios from "axios";
import "./style.css";
import logo from '../../Spotify.svg';
import { useSelector, useDispatch } from "react-redux";
import { fetchUserId, getHashParams } from "../../redux/credential-slice";


function Home() {
  const { userId, token, tokenType } = useSelector((state) => state.credential);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [isFormActive, setFormActive] = useState(false);
  const [inputValue, setInputValue] = useState({
    titlePlaylist: "",
    descPlaylist: "",
  });
  const [trackList, setTrackList] = useState([]);
  const [selectedUri, setSelectedUri] = useState([]);
  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    dispatch(getHashParams(document.location.hash));
}, [dispatch]);

  // API Call
  const searchTrack = async (query, tokenType) => {
  const response = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `${tokenType} ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      params: {
        q: query,
        type: "album,track,artist",
        limit: 12,
      },
    });
    setTrackList([...trackList, ...response.data.tracks.items]);
    setQuery("");
    console.log(response.data.tracks.items);
  };

  const createPlaylist = async () => {
    const data = {
      name: inputValue.titlePlaylist,
      public: false,
      collaborative: false,
      description: inputValue.descPlaylist,
    };

    const config = {
      headers: {
        Authorization: `${tokenType} ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      data,
      config
    );
    setInputValue({
      titlePlaylist: "",
      descPlaylist: "",
    });
    addItemToPlaylist(response.data.id);
    alert(`${inputValue.titlePlaylist} Playlist added successfully!`);
  };

  const addItemToPlaylist = async (playlistId) => {
    const data = {
      uris: selectedUri,
    };
    const config = {
      headers: {
        Authorization: `${tokenType} ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      data,
      config
    );

    console.log(response);
  };

  // Handle Input change
  const handleChange = (event) => setQuery(event.target.value);

  const handleOnChangePlaylist = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  // Handle onClick / Submit
  const handleSubmit = async () => {
    if (query === "") {
        alert("Masukan dulu kata kunci yang akan kamu cari, ya!");
    } else {
      const keyword = query.replace(" ", "+");
      await searchTrack(keyword, tokenType);
      dispatch(fetchUserId(token, tokenType));
    }
  };

  const handleCreateSongForm = async () => {
    setFormActive(!isFormActive);
  };

  const handleSubmitPlaylist = async (event) => {
    event.preventDefault();

    if (inputValue.titlePlaylist !== "" && inputValue.descPlaylist !== "") {
      if (
        inputValue.titlePlaylist.length >= 10 &&
        inputValue.descPlaylist.length >= 20
      ) {
        if (selectedUri.length === 0) {
          alert("Pilih dulu lagu yang kamu suka, ya.");
        } else {
          await createPlaylist();
        }
      } else {
        alert("Minimum judul 10 character & deskripsi is 20");
      }
    } else {
      alert("masukkan judul dan deskripsi playlist kamu.");
    }
  };

  // Handle list
  const handleSelectedTrack = (trackUri, data) => {
    if (selectedUri.includes(trackUri)) {
      setSelectedUri([...selectedUri.filter((uri) => uri !== trackUri)]);

      const filter = selectedList.filter((item) => item.uri !== trackUri);
      setSelectedList([...filter]);
    } else {
      setSelectedUri([...selectedUri, trackUri]);
      setSelectedList([...selectedList, data]);
    }
  };

  const getTrackList = (list, enableBtn) => {
    let arr = list.map((item) => item.uri);
    let filter = list.filter(({ uri }, index) => !arr.includes(uri, index + 1));
    return filter.map((item) => {
      let artist = "";
      if (item.artists.length > 1) {
        item.artists.forEach((value) => {
          artist += `${value.name} ft. `;
        });
      } else {
        artist = item.artists[0].name;
      }

      let image = checkImageAvailability(item.album);

      return (
        <SongCard
          imgAlbum={image[1]}
          altImg={image[0] > 0 ? "An Track Image" : "No Image Available"}
          artistName={artist}
          songTitle={item.name}
          btnName={selectedUri.includes(item.uri) ? "Deselect" : "Select"}
          enableBtn={enableBtn}
          onClick={() => {
            handleSelectedTrack(item.uri, item);
          }}
          key={item.uri}
        />
      );
    });
  };

  const checkImageAvailability = (list) => {
    let image = [];
    if (list.images.length > 0) {
      list.images.forEach((item) => {
        image.push(item.url);
      });
    } else {
      image = "";
    }
    return image;
  };

  const isDataEmpty = (list) => {
    if (list.length > 0) {
      return (
        <div>
          {isFormActive ? (
            <SongForm
              titleValue={inputValue.titlePlaylist}
              descValue={inputValue.descPlaylist}
              handleSubmit={handleSubmitPlaylist}
              onChange={handleOnChangePlaylist}
            />
          ) : (
            <></>
          )}
          {selectedList.length > 0 ? (
            <div>
              <SongPlaylistTitle
                title="Selected"
                list={getTrackList(selectedList, false)}
                className="selected-user"
              />
            </div>
          ) : (
            <></>
          )}
          <SongPlaylistTitle title="Tracks" list={getTrackList(trackList, true)} />
        </div>
      );
    } else {
      return <h1 className="no-data">No Data Available</h1>;
    }
  };

  return (
    <div>
            <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
              <h1>Create Playlist<span>...</span></h1>
              <h4>now you can create your own playlist for free</h4>
        </div>
      <SongSearch
        handleChange={handleChange}
        inputValue={query}
        handleSubmit={handleSubmit}
        handleClick={handleCreateSongForm}
        isFormActive={isFormActive}
      />
      <div className="search-result">{isDataEmpty(trackList)}</div>
    </div>
  );
}

export default Home;

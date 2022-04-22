import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { SongForm, SongPlaylistTitle, SongCard } from '../../components';
import { getSelectedUri, getSelectedList } from '../../redux/track-slice';
import { checkImageAvailability } from '../../config/util';
import { SPOTIFY_ENDPOINT } from '../../config/constant';
import logo from '../../Spotify.svg';

function CreateSong() {
  const { userId, token, tokenType } = useSelector((state) => state.credential);
  const { selectedList, selectedUri } = useSelector((state) => state.track);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState({
    titlePlaylist: '',
    descPlaylist: '',
  });

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
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(
      `${SPOTIFY_ENDPOINT}/users/${userId}/playlists`,
      data,
      config,
    );

    setInputValue({
      titlePlaylist: '',
      descPlaylist: '',
    });
    addItemToPlaylist(response.data.id);
    alert(`${inputValue.titlePlaylist} Selamat playlist sukses ditambahkan!`);
  };

  const addItemToPlaylist = async (playlistId) => {
    const data = {
      uris: selectedUri,
    };
    const config = {
      headers: {
        Authorization: `${tokenType} ${token}`,
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post(
      `${SPOTIFY_ENDPOINT}/playlists/${playlistId}/tracks`,
      data,
      config,
    );

    console.log(response);
  };

  const handleSelectedTrack = (trackUri, data) => {
    if (selectedUri.includes(trackUri)) {
      dispatch(
        getSelectedUri([...selectedUri.filter((uri) => uri !== trackUri)]),
      );

      const filter = selectedList.filter((item) => item.uri !== trackUri);
      dispatch(getSelectedList([...filter]));
    } else {
      dispatch(getSelectedUri([...selectedUri, trackUri]));
      dispatch(getSelectedList([...selectedList, data]));
    }
  };

  const getTrackList = (list, enableBtn) => {
    const arr = list.map((item) => item.uri);
    const filter = list.filter(({ uri }, index) => !arr.includes(uri, index + 1));

    return filter.map((item) => {
      let artist = '';
      if (item.artists.length > 1) {
        item.artists.forEach((value) => {
          artist += `${value.name} ft. `;
        });
      } else {
        artist = item.artists[0].name;
      }

      const image = checkImageAvailability(item.album);

      return (
        <SongCard
          imgUrl={image[0]}
          altImg={image[0] > 0 ? 'An Track Image' : 'No Image Available'}
          artistName={artist}
          trackTitle={item.name}
          btnName={selectedUri.includes(item.uri) ? 'Deselect' : 'Select'}
          enableBtn={enableBtn}
          onClick={() => {
            handleSelectedTrack(item.uri, item);
          }}
          key={item.uri}
        />
      );
    });
  };

  const handleOnChangePlaylist = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmitPlaylist = async (event) => {
    event.preventDefault();

    if (inputValue.titlePlaylist !== '' && inputValue.descPlaylist !== '') {
      if (
        inputValue.titlePlaylist.length >= 10
        && inputValue.descPlaylist.length >= 20
      ) {
        if (selectedUri.length === 0) {
          alert('Silahkan pilih track yang ingin kamu tambahkan ya');
        } else {
          await createPlaylist();
        }
      } else {
        alert('Minimum judulnya 10 character & deskripsi 20 character');
      }
    } else {
      alert('silahkan tambahakan terlebih dahulu judul dan deskripsi playlist, ya!');
    }
  };

  return (
    <div className="PlaylistContainer">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Create Playlist
          <span>...</span>
        </h1>
        <h4>now you can create your own playlist for free</h4>
      </div>
      <h1>Create Playlist</h1>
      <SongForm
        titleValue={inputValue.titlePlaylist}
        descValue={inputValue.descPlaylist}
        handleSubmit={handleSubmitPlaylist}
        onChange={handleOnChangePlaylist}
      />
      <SongPlaylistTitle title="User Choice" list={getTrackList(selectedList, false)} />
    </div>
  );
}

export default CreateSong;

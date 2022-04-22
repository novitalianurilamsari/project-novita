import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  SongCard,
  SongSearch,
  SongPlaylistTitle,
} from '../../components';
import {
  getHashParams,
  getIsLoggedIn,
  getUserId,
  getImageUrl,
} from '../../redux/credential-slice';
import {
  getSelectedList,
  getSelectedUri,
  searchTrack,
} from '../../redux/track-slice';
import { SPOTIFY_ENDPOINT } from '../../config/constant';
import { checkImageAvailability } from '../../config/util';
import './style.css';
import logo from '../../Spotify.svg';

function Home() {
  const {
    token, tokenType, imgUrl, isLoggedin,
  } = useSelector(
    (state) => state.credential,
  );
  const { trackList, selectedList, selectedUri } = useSelector(
    (state) => state.track,
  );
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(getHashParams(document.location.hash));
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      fetchUserId(token, tokenType);
      dispatch(getIsLoggedIn(true));
    }
  });

  // API Call
  const fetchUserId = (token, tokenType) => {
    axios
      .get(`${SPOTIFY_ENDPOINT}/me`, {
        headers: {
          Authorization: `${tokenType} ${token}`,
        },
      })
      .then((response) => {
        dispatch(getUserId(response.data.id));
        dispatch(getImageUrl(response.data.images[0].url));
      });
  };

  // Handle Input change
  const handleChange = (event) => setQuery(event.target.value);
  // Handle onClick / Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (query === '') {
      alert('isikan kata kunci di form!');
    } else if (isLoggedin) {
      const keyword = query.replace(' ', '+');
      dispatch(searchTrack(keyword, token, tokenType));
      setQuery('');
      console.log(token);
    } else {
      alert('silahkan login terlebih dahulu ya');
    }
  };

  // Handle list
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
          imgUrl={image[1]}
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

  const isDataEmpty = (list) => {
    if (list.length > 0) {
      return (
        <div>
          {selectedList.length > 0 ? (
            <div>
              <SongPlaylistTitle
                title="Selected"
                list={getTrackList(selectedList, false)}
                className="select-user"
              />
            </div>
          ) : (
            <></>
          )}
          <SongPlaylistTitle title="Tracks" list={getTrackList(trackList, true)} />
        </div>
      );
    }
    return <h1 className="no-data">No Data Available</h1>;
  };

  return (
    <div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Create Playlist
          <span>...</span>
        </h1>
        <h4>now you can create your own playlist for free</h4>
      </div>
      {/* { isLoggedin ? <Redirect to="/home" /> : null } */}
      {console.log(token)}
      <SongSearch
        handleChange={handleChange}
        inputValue={query}
        handleSubmit={handleSubmit}
        isUserLoggedin={isLoggedin}
        imgUrl={imgUrl}
      />
      <div className="search-result">{isDataEmpty(trackList)}</div>
    </div>
  );
}

export default Home;

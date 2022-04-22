/* eslint-disable react/prop-types */
import React from 'react';
import { SearchSongForm } from '..';
import './style.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SIGNIN_URL } from '../../config/constant';

function SongSearch({
  handleChange,
  handleSubmit,
  inputValue,
  isUserLoggedin,
  imgUrl,
}) {
  const { selectedList } = useSelector((state) => state.track);

  const handleAlert = () => {
    alert('Pilih dulu track kamu ya!');
  };

  return (
    <div className="song-search">
      <h1>Spotify Premium</h1>
      <SearchSongForm
        placeholder="Search"
        handleChange={handleChange}
        value={inputValue}
        handleSubmit={handleSubmit}
      />
      <div className="LeftSideNav">
        {selectedList.length > 0 && isUserLoggedin ? (
          <Link to="/create-song" className="ActiveButton">
            Create Playlist
          </Link>
        ) : (
          <button className="PlaylistButton" onClick={handleAlert}>
            Create Playlist
          </button>
        )}
        {imgUrl !== '' ? (
          <img src={imgUrl} alt="" className="ProfileImage" />
        ) : (
          <a className="button-action" href={SIGNIN_URL}>
            Login
          </a>
        )}
      </div>
    </div>
  );
}

export default SongSearch;

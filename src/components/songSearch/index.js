/* eslint-disable react/prop-types */
import React from 'react';
import { SearchForm } from '..';
import './style.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
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
      {imgUrl !== '' ? (
        <img src={imgUrl} alt="" className="profil-login" />
      ) : (
        <a className="button-action" href={SIGNIN_URL}>
          Login
        </a>
      )}
      <div className="class-search">
        <h5>tekan entar untuk melakukan pencarian...</h5>
        <SearchForm
          placeholder="Search"
          handleChange={handleChange}
          value={inputValue}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="container-search">
        {selectedList.length > 0 && isUserLoggedin ? (
          <Link to="/create-song" className="button-create">
            AYO Buat Playlistmu
          </Link>
        ) : (
          <Button className="button-create" onClick={handleAlert}>
            Create Playlist
          </Button>
        )}
      </div>
    </div>
  );
}

export default SongSearch;

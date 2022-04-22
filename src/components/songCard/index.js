import React from 'react';
import { SongButton } from '..';
import './style.css';

function songCard({
  imgUrl, altImg, trackTitle, artistName, btnName, onClick, enableBtn,
}) {
  return (
    <div className="song-card">
      <img className="album-image" src={imgUrl} alt={altImg} />
      <h2 className="text-title">{trackTitle}</h2>
      <p className="text-artist">{artistName}</p>
      {enableBtn ? (
        <SongButton className="action-button" name={btnName} onClick={onClick} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default songCard;

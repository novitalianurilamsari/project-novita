import React from 'react';
import { SongButton } from '..';
import './style.css';

function songCard({
  imgUrl, altImg, trackTitle, artistName, btnName, onClick, enableBtn,
}) {
  return (
    <div className="song-card" data-testid="song_track">
      <img className="album-image" src={imgUrl} alt={altImg} data-testid="img_track" />
      <h2 className="text-title" data-testid="title_track">{trackTitle}</h2>
      <p className="text-artist" data-testid="artist_track">{artistName}</p>
      {enableBtn ? (
        <SongButton className="action-button" data-testid="button_track" name={btnName} onClick={onClick} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default songCard;

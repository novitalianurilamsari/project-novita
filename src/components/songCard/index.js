import React from "react";
import { SongButton } from "../../components";
import './style.css';

function songCard({ imgAlbum, altImg, songTitle, artistName, btnName, onClick, enableBtn}) {
  return (
    <div className="song-card">
      <img className="album-image" src={imgAlbum} alt={altImg} />
      <h2 className="text-title">{songTitle}</h2>
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
import React from "react";
import { SongButton } from "..";
import './style.css';

function songCard({ imgAlbum, altImg, songTitle, artistName, btnName, btnUrl }) {
  return (
    <div className="song-card">
      <img src={imgAlbum} alt={altImg} className="album-image" />
      <p></p>
      <h2 className="text-title">{songTitle}</h2>
      <h4 className="text-artist">{artistName}</h4>
      <SongButton className="button-actions" name={btnName} url={btnUrl}/>
    </div>
  );
}

export default songCard;
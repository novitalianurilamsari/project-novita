import React from "react";
import { SearchSongForm } from "..";
import "./style.css";

function SongSearch({
  handleChange,
  handleSubmit,
  handleClick,
  inputValue,
  isFormActive,
}) {
  return (
    <div className="song-search">
      <h1>Spotify Premium</h1>
      <SearchSongForm
        placeholder="Search"
        handleChange={handleChange}
        value={inputValue}
        handleSubmit={handleSubmit}
      />
      <button
        className={isFormActive ? "ActiveButton" : "PlaylistButton"}
        onClick={handleClick}
      >
        Create Playlist
      </button>
    </div>
  );
}

export default SongSearch;
import React from "react";
import { SongSearchButton } from "..";
import "./style.css";

function SongSearch(props) {
  const { handleChange, handleClick, inputValue } = props;

  return (
    <div className="song-search">
      <SongSearchButton placeholder="Search" handleChange={handleChange} value={inputValue} handleClick={handleClick} />
    </div>
  );
}

export default SongSearch;
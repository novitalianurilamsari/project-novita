/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';

function SongSearchButton(props) {
  const {
    placeholder, handleChange, value, handleClick,
  } = props;

  return (
    <div className="search-button">
      <h3>Ayo Cari Lagu yang kamu suka!</h3>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        className="search"
      />
      <button onClick={handleClick} className="button-action">
        Search
      </button>
    </div>
  );
}

export default SongSearchButton;

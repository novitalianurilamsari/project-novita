import React from 'react';
import './style.css';

function SongPlaylistTitle(props) {
  // eslint-disable-next-line react/prop-types
  const { title, list } = props;
  return (
    <div className="list-title">
      <h2>{title}</h2>
      <div className="list-container">{list}</div>
    </div>
  );
}

export default SongPlaylistTitle;

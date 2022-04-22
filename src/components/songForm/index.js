import React from 'react';
import './style.css';

function SongForm({
  // eslint-disable-next-line react/prop-types
  titleValue, descValue, handleSubmit, onChange,
}) {
  return (
    <div className="SongForm">
      <h4>ayo buat playlistmu!</h4>
      <form onSubmit={handleSubmit}>
        <input
          className="input-form"
          type="text"
          placeholder="Playlist Title"
          value={titleValue}
          onChange={onChange}
          name="titlePlaylist"
          minLength="10"
        />
        <textarea
          className="input-form"
          type="text"
          placeholder="Playlist Description"
          value={descValue}
          onChange={onChange}
          name="descPlaylist"
          minLength="20"
        />
        <button className="button-action" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

export default SongForm;

import React from "react";
import './style.css';

function SongButton({ url, onClick, name }) {
  return (
    <div>
      <a href={url}>
        <button className="button-action" onClick={onClick}>
          {name}
        </button>
      </a>
    </div>
  );
}

export default SongButton;

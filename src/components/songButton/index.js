import React, { useState } from "react";
import './style.css';

function SongButton({ name, onClick, link }) {
    const [isSelected, setSelected] = useState(false);

  return (
    <div className="button-container">
      <a href={link}>
        <button
          className="button-action"
          onClick={() => {
            onClick();
            setSelected(!isSelected);
          }}
        >
          {isSelected ? "Deselect" : name}
        </button>
      </a>
    </div>
  );
}

export default SongButton;
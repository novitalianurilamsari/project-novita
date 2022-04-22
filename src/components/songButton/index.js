import React, { useState } from "react";
import './style.css';

function SongButton({ name, onClick, link }) {
  const [isSelected, setSelected] = useState(false);

  return (
    <div className="button-container">
      <button
        className="button-action"
        onClick={() => {
          onClick();
          setSelected(!isSelected);
        }}
      >
        <a href={link}>{isSelected ? "Deselect" : name}</a>
      </button>
    </div>
  );
}

export default SongButton;
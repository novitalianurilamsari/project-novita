import React, { useState } from "react";
import './style.css';

function SongButton({ name, onClick, url }) {
    const [isSelected, setSelected] = useState(false);
    return (
      <div>
        <a href={url}>
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

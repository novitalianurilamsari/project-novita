import React, { useState } from 'react';
import './style.css';

// eslint-disable-next-line react/prop-types
function SongButton({ name, onClick, link }) {
  const [isSelected, setSelected] = useState(false);

  return (
    <div className="button-container">
      <a href={link}>
        <button
          className="button-action"
          data-testid="button_test"
          onClick={() => {
            onClick();
            setSelected(!isSelected);
          }}
        >
          {isSelected ? 'Deselect' : name}
        </button>
      </a>
    </div>
  );
}

export default SongButton;

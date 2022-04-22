import React from "react";

function SearchSongForm({ handleChange, handleSubmit, value, placeholder }) {
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        className="search"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </form>
    
  );
}

export default SearchSongForm;
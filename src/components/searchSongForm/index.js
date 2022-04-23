import React from 'react';

function SearchSongForm({
  // eslint-disable-next-line react/prop-types
  handleChange, handleSubmit, value, placeholder,
}) {
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        className="search"
        data-testid="search_input"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </form>

  );
}

export default SearchSongForm;

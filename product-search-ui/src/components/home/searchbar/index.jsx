import React from 'react';
import './styles.css';

const SearchBar = ({ value, changeInput }) => (
  <div className="sui-search-box autocomplete">
    <div className="sui-search-box__wrapper">
      <input
        className="sui-search-box__text-input"
        type="text"
        placeholder="Search"
        value={value}
        onChange={changeInput}
      />
      <button className="button sui-search-box__submit">
        Search
      </button>
    </div>
  </div>
);

export default SearchBar;

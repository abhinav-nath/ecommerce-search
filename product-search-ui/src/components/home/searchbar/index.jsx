import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './styles.css';

const SearchBar = ({ value, changeInput }) => (
  <div className="searchBar-wrap">
    <SearchIcon className="searchBar-icon" />
    <input
      type="text"
      placeholder="lorem ipsum"
      value={value}
      onChange={changeInput}
    />
  </div>
);

export default SearchBar;

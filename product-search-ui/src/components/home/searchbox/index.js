import React, { useState, useEffect } from "react";
import "./styles.css";
import SearchService from "../../../api/SearchService";
import axios from "axios";

const SearchBox = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchText = async () => {
    const res = await axios.get("http://localhost:8027/v1/search", {
      params: {
        query: term
      }
    });
    console.log(res.data);
    setResults(res.data);
  };

  return (
    <div className="sui-search-box">
      <div className="sui-search-box__wrapper">
        <input
          className="sui-search-box__text-input"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search" />
      </div>
      <button className="button sui-search-box__submit" onClick={searchText}>Search</button>
    </div>
  );
};

export default SearchBox;

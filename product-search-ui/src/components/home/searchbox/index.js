import React, { useState, useContext, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import { SearchResultsContext } from "../../../contexts/SearchResultsContext";
import { SelectedFiltersContext } from "../../../contexts/SelectedFiltersContext";

const SearchBox = (props) => {
  const [term, setTerm] = useState("");
  const { setResults } = useContext(SearchResultsContext);
  const { selectedFilters } = useContext(SelectedFiltersContext);
  const parsedSelectedFilters = [];

  const searchText = async () => {
    if (selectedFilters && selectedFilters.length > 0) {
      for (const filter of selectedFilters) {
        parsedSelectedFilters.push({ code: filter.facetCode, values: [filter.facetValue] });
      }
    }
    console.log("parsedSelectedFilters", JSON.stringify(parsedSelectedFilters));
    const res = await axios.get(
      `http://localhost:8027/v1/search?query=${term}&page=${props.page}&size=${props.pageSize}&filters=${encodeURIComponent(
        JSON.stringify(parsedSelectedFilters)
      )}`
    );
    setResults(res.data);
  };

  useEffect(() => {
    if (term) {
      searchText();
    }
  }, [props.page, selectedFilters]);

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

import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { SearchResultsContext } from "../../../contexts/SearchResultsContext";
import { FilterCheckedContext } from "../../../contexts/FilterCheckedContext";
import { SelectedFiltersContext } from "../../../contexts/SelectedFiltersContext";


const SearchBox = (props) => {
  const [term, setTerm] = useState("");
  const { setResults } = useContext(SearchResultsContext);
  const { filterChecked } = useContext(FilterCheckedContext);
  const { selectedFilters } = useContext(SelectedFiltersContext);

  const searchText = async (searchButtonClicked) => {
    if (searchButtonClicked) {
      console.log("Search button clicked!");
      selectedFilters.current = [];
    } else {
      if (filterChecked) {
        console.log("filterChecked", filterChecked);
        if (!filterChecked.checked) {
          let i = -1;
          i = selectedFilters.current.findIndex((filter) => (filterChecked.facetCode === filter.code));

          if (i >= 0) {
            if (selectedFilters.current[i].values.length === 1) {
              selectedFilters.current.splice(i, 1);
            } else {
              for (const value of selectedFilters.current[i].values) {
                if (filterChecked.facetValue === value) {
                  let x = selectedFilters.current[i].values.indexOf(value);
                  selectedFilters.current[i].values.splice(x, 1);
                }
              }
            }
          }
        } else {
          let j = -1;
          j = selectedFilters.current.findIndex((filter) => (filterChecked.facetCode === filter.code));

          if (j >= 0) {
            selectedFilters.current[j].values.push(filterChecked.facetValue);
          } else {
            selectedFilters.current.push({ code: filterChecked.facetCode, values: [filterChecked.facetValue] });
          }
        }
      }
    }
    console.log("selectedFilters", JSON.stringify(selectedFilters));
    const res = await axios.get(
      `http://localhost:8027/v1/search?query=${term}&page=${props.page}&size=${props.pageSize}&filters=${encodeURIComponent(
        JSON.stringify(selectedFilters.current && selectedFilters.current[0] && selectedFilters.current[0].code ? selectedFilters.current : null)
      )}`
    );
    setResults(res.data);
  };

  useEffect(() => {
    if (term) {
      searchText(false);
    }
  }, [props.page, filterChecked]);

  return (
    <div className="sui-search-box">
      <div className="sui-search-box__wrapper">
        <input
          className="sui-search-box__text-input"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search" />
      </div>
      <button className="button sui-search-box__submit" onClick={() => searchText(true)}>Search</button>
    </div>
  );
};

export default SearchBox;

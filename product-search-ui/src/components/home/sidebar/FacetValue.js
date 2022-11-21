import React, { useState, useEffect, useContext } from "react";
import "./styles.css";
import { SelectedFiltersContext } from "../../../contexts/SelectedFiltersContext";

const FacetValue = (props) => {
  const { selectedFilters, setSelectedFilters } = useContext(SelectedFiltersContext);

  const handleChange = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setSelectedFilters([...selectedFilters, { facetCode: props.facetCode, facetValue: props.facetValue.name }]);
    } else {
      setSelectedFilters(selectedFilters.filter((e) => (e.facetValue !== props.facetValue.name)));
    }
  };

  useEffect(() => {
    console.log(JSON.stringify(selectedFilters));
  }, [selectedFilters]);

  return (
    <div className="sui-multi-checkbox-facet">
      <label className="sui-multi-checkbox-facet__option-label">
        <div className="sui-multi-checkbox-facet__option-input-wrapper">
          <input
            type="checkbox"
            className="sui-multi-checkbox-facet__checkbox"
            onChange={(e) => handleChange(e)}
          />
          <span className="sui-multi-checkbox-facet__input-text">
              {props.facetValue.name}
            </span>
        </div>
        <span className="sui-multi-checkbox-facet__option-count">
            {props.facetValue.count}
          </span>
      </label>
    </div>
  );
};

export default FacetValue;
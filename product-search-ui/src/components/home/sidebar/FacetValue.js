import React, { useContext, useEffect, useRef } from "react";
import "./styles.css";
import { FilterCheckedContext } from "../../../contexts/FilterCheckedContext";
import { SelectedFiltersContext } from "../../../contexts/SelectedFiltersContext";

const FacetValue = (props) => {
  const { setFilterChecked } = useContext(FilterCheckedContext);
  const { selectedFilters } = useContext(SelectedFiltersContext);
  const checkboxRef = useRef();

  useEffect(() => {
    if (selectedFilters.current && selectedFilters.current.length > 0) {
      checkboxRef.current.checked = isChecked();
    }
  });

  const handleChange = (e) => {
    const checked = e.target.checked;
    setFilterChecked({ facetCode: props.facetCode, facetValue: props.facetValue.name, checked: checked });
  };

  const isChecked = () => {
    for (let i = 0; i < selectedFilters.current.length; i++) {
      for (let j = 0; j < selectedFilters.current[i].values.length; j++) {
        if (selectedFilters.current[i].values[j] === props.facetValue.name)
          return true;
      }
    }
    return false;
  };

  return (
    <div className="sui-multi-checkbox-facet">
      <label className="sui-multi-checkbox-facet__option-label">
        <div className="sui-multi-checkbox-facet__option-input-wrapper">
          <input
            type="checkbox"
            className="sui-multi-checkbox-facet__checkbox"
            ref={checkboxRef}
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
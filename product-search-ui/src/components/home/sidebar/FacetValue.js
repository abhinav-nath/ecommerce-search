import React, { useState } from "react";
import "./styles.css";

const FacetValue = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="sui-multi-checkbox-facet">
      <label className="sui-multi-checkbox-facet__option-label">
        <div className="sui-multi-checkbox-facet__option-input-wrapper">
          <input
            key={props.facetValue.name}
            type={"checkbox"}
            className="sui-multi-checkbox-facet__checkbox"
            onChange={handleChange}
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
import React from "react";
import "./styles.css";
import FacetValue from "./FacetValue";

const Facet = (props) => {
  return (
    <fieldset className="sui-facet">
      <legend className="sui-facet__title">{props.facet.name}</legend>
      {props.facet.facetValues.map((facetValue) => (
        <div key={facetValue.name}>
          <FacetValue facetCode={props.facet.code} facetValue={facetValue} />
        </div>
      ))}
    </fieldset>
  );
};

export default Facet;
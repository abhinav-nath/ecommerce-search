import React, { useContext } from "react";
import "./styles.css";
import { SearchResultsContext } from "../../../contexts/SearchResultsContext";

const SideBar = () => {
  const { results } = useContext(SearchResultsContext);

  if (results.totalResults > 0)
    return (
      <div className="sui-layout-sidebar">
        <div className="sui-facet-container">
          {results.facets.map((facet) => (
            <div key={facet.code}>
              <fieldset className="sui-facet">
                <legend className="sui-facet__title">{facet.name}</legend>
                {facet.facetValues.map((facetValue) => (
                  <div key={facetValue.name}>
                    <div className="sui-multi-checkbox-facet">
                      <label className="sui-multi-checkbox-facet__option-label">
                        <div className="sui-multi-checkbox-facet__option-input-wrapper">
                          <input
                            key={facetValue.name}
                            type={"checkbox"}
                            className="sui-multi-checkbox-facet__checkbox"
                          />
                          <span className="sui-multi-checkbox-facet__input-text">
              {facetValue.name}
            </span>
                        </div>
                        <span className="sui-multi-checkbox-facet__option-count">
            {facetValue.count}
          </span>
                      </label>
                    </div>
                  </div>
                ))}
              </fieldset>
            </div>
          ))}
        </div>
      </div>
    );
};

export default SideBar;

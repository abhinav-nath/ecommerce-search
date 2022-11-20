import React from "react";
import "./styles.css";

const SideBar = () => {
  return (
    <div className="sui-layout-sidebar">
      <div>
        <fieldset className="sui-facet">
          <legend className="sui-facet__title">States</legend>
          <div className="sui-facet-search">
            <input className="sui-facet-search__text-input" type="search" placeholder="Filter states.keyword" />
          </div>
          <div className="sui-multi-checkbox-facet">
            <label htmlFor="example_facet_StatesCalifornia" className="sui-multi-checkbox-facet__option-label">
              <div className="sui-multi-checkbox-facet__option-input-wrapper">
                <input id="example_facet_StatesCalifornia" type="checkbox"
                       className="sui-multi-checkbox-facet__checkbox" />
                <span className="sui-multi-checkbox-facet__input-text">California</span>
              </div>
              <span className="sui-multi-checkbox-facet__option-count">9</span>
            </label>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default SideBar;

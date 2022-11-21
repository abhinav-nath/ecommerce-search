import React, { useContext } from "react";
import "./styles.css";
import { SearchResultsContext } from "../../../contexts/SearchResultsContext";
import Facet from "./Facet";

const SideBar = () => {
  const { results } = useContext(SearchResultsContext);

  if (results.totalResults > 0)
    return (
      <div className="sui-layout-sidebar">
        <div className="sui-facet-container">
          {results.facets.map((facet) => (
            <div key={facet.code}>
              <Facet facet={facet} />
            </div>
          ))}
        </div>
      </div>
    );
};

export default SideBar;

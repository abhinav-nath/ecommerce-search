import React, { useContext } from "react";
import "./styles.css";
import "../../../../node_modules/rc-pagination/assets/index.css";
import { SearchResultsContext } from "../../../contexts/SearchResultsContext";

const Content = () => {
  const { results } = useContext(SearchResultsContext);
  console.log("Content - " + results.totalResults);

  if (results.totalResults > 0)
    return (
      <div className="sui-layout-main">
        <div className="sui-layout-main-header">
          <div className="sui-layout-main-header__inner">
            <div className="sui-paging-info">
              Total Results - <strong>{results.totalResults}</strong>
            </div>
          </div>
        </div>
        <div className="sui-layout-main-body">
          <ul className="sui-results-container">
            {results.products.map((searchResult) => (
              <li className="sui-result" key={searchResult.code}>
                <div className="sui-result__header">
                  <p className="sui-result__title">{searchResult.name}</p>
                </div>
                <div className="sui-result__body">
                  <pre>{JSON.stringify(searchResult, null, 4)}</pre>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default Content;

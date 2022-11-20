import React from "react";
import "./styles.css";
import "../../../../node_modules/rc-pagination/assets/index.css";

const Content = () => {
  return (
    <div className="sui-layout-main">
      <div className="sui-layout-main-header">
        <div className="sui-layout-main-header__inner">
          <div className="sui-paging-info">
            Showing <strong>1 - 20</strong> out of{" "} <strong>59</strong>
          </div>
        </div>
      </div>
      <div className="sui-layout-main-body">
        <ul className="sui-results-container">
          <li className="sui-result">
            <div className="sui-result__header">
              <a className="sui-result__title sui-result__title-link"
                 href="https://www.nps.gov/acad/index.htm"
                 target="_blank"
                 rel="noopener noreferrer">Acadia</a>
            </div>
            <div className="sui-result__body">
              <ul className="sui-result__details">
                <li>
                  <span className="sui-result__key">id</span>
                  {" "}
                  <span className="sui-result__value">park_acadia</span>
                </li>
                <li>
                  <span className="sui-result__key">visitors</span>
                  {" "}
                  <span className="sui-result__value">3303393</span>
                </li>
                <li>
                  <span className="sui-result__key">acres=</span>
                  {" "}
                  <span className="sui-result__value">49057.36</span>
                </li>
                <li>
                  <span className="sui-result__key">date_established</span>{" "}
                  <span className="sui-result__value">1919-02-26T06:00:00Z</span>
                </li>
                <li>
                  <span className="sui-result__key">description</span>
                  {" "}
                  <span className="sui-result__value">
                    Covering most of Mount Desert Island and
                    other coastal islands, Acadia features
                    the tallest mountain on the Atlantic
                    coast of the United States, granite
                    peaks, ocean shoreline, woodlands, and
                    lakes. There are freshwater, estuary,
                    forest, and intertidal habitats.
                  </span>
                </li>
                <li>
                  <span className="sui-result__key">nps_link</span>
                  {" "}
                  <span className="sui-result__value">https://www.nps.gov/acad/index.htm</span>
                </li>
                <li>
                  <span className="sui-result__key">states</span>
                  {" "}
                  <span className="sui-result__value">Maine</span>
                </li>
                <li>
                  <span className="sui-result__key">title</span>
                  {" "}
                  <span className="sui-result__value">Acadia</span>
                </li>
                <li>
                  <span className="sui-result__key">location</span>
                  {" "}
                  <span className="sui-result__value">44.35,-68.21</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Content;

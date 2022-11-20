import React, { useState } from "react";
import SearchBox from "../../components/home/searchbox";
import Content from "../../components/home/content";
import "./styles.css";
import SideBar from "../../components/home/sidebar";
import { SearchResultsContext } from "../../contexts/SearchResultsContext";

const Home = () => {
  const [results, setResults] = useState([]);

  return (
    <>
      <SearchResultsContext.Provider value={{ results, setResults }}>
        <div className="sui-layout">
          <div className="sui-layout-header">
            <div className="sui-layout-header__inner">
              <SearchBox page={1} />
            </div>
          </div>
          <div className="sui-layout-body">
            <div className="sui-layout-body__inner">
              <SideBar />
              <Content />
            </div>
          </div>
          <div className="sui-layout-main-footer">
            <ul className="rc-pagination sui-paging" unselectable="unselectable">
              <li title="Previous Page" className="rc-pagination-disabled rc-pagination-prev" aria-disabled="true">
                <a className="rc-pagination-item-link" disabled=""></a>
              </li>
              <li title="1" className="rc-pagination-item rc-pagination-item-1 rc-pagination-item-active" tabIndex="0">
                <a>1</a>
              </li>
              <li title="2" className="rc-pagination-item rc-pagination-item-2" tabIndex="0">
                <a>2</a>
              </li>
              <li title="Next Page" tabIndex="0" className=" rc-pagination-next" aria-disabled="false">
                <a className="rc-pagination-item-link"></a>
              </li>
            </ul>
          </div>
        </div>
      </SearchResultsContext.Provider>
    </>
  );
};

export default Home;

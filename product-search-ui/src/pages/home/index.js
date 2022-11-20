import React, { useState } from "react";
import SearchBox from "../../components/home/searchbox";
import Content from "../../components/home/content";
import "./styles.css";
import SideBar from "../../components/home/sidebar";
import { SearchResultsContext } from "../../contexts/SearchResultsContext";
import Pagination from "rc-pagination";

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
            <Pagination current={1} pageSize={5} total={results.totalResults}/>
          </div>
        </div>
      </SearchResultsContext.Provider>
    </>
  );
};

export default Home;

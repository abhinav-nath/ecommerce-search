import React, { useState } from "react";
import SearchBox from "../../components/home/searchbox";
import Content from "../../components/home/content";
import "./styles.css";
import SideBar from "../../components/home/sidebar";
import { SearchResultsContext } from "../../contexts/SearchResultsContext";
import Pagination from "rc-pagination";

const Home = () => {
  const pageSize = 5;
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const PerPageChange = (value) => {
    const newPerPage = Math.ceil(results.totalResults / value);
    if (currentPage > newPerPage) {
      setCurrentPage(newPerPage);
    }
  };

  const PaginationChange = (currentPage) => {
    setCurrentPage(currentPage);
  };

  return (
    <>
      <SearchResultsContext.Provider value={{ results, setResults }}>
        <div className="sui-layout">
          <div className="sui-layout-header">
            <div className="sui-layout-header__inner">
              <SearchBox page={currentPage} pageSize={pageSize} />
            </div>
          </div>
          <div className="sui-layout-body">
            <div className="sui-layout-body__inner">
              <SideBar />
              <Content />
            </div>
          </div>
          <div className="sui-layout-main-footer">
            {results.totalResults && (<Pagination current={currentPage}
                                     pageSize={pageSize}
                                     onChange={PaginationChange}
                                     onShowSizeChange={PerPageChange}
                                     total={results.totalResults} />)}
          </div>
        </div>
      </SearchResultsContext.Provider>
    </>
  );
};

export default Home;

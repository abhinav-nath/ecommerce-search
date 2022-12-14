import React, { useRef, useState } from "react";
import SearchBox from "../../components/home/searchbox";
import Content from "../../components/home/content";
import "./styles.css";
import SideBar from "../../components/home/sidebar";
import { SearchResultsContext } from "../../contexts/SearchResultsContext";
import { FilterCheckedContext } from "../../contexts/FilterCheckedContext";
import { SelectedFiltersContext } from "../../contexts/SelectedFiltersContext";
import Pagination from "rc-pagination";

const Home = () => {
  const pageSize = 5;
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterChecked, setFilterChecked] = useState({});
  const selectedFilters = useRef([]);

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
        <SelectedFiltersContext.Provider value={{ selectedFilters }}>
          <FilterCheckedContext.Provider value={{ filterChecked, setFilterChecked }}>
            <div className="sui-layout">
              <div className="sui-layout-header">
                <div className="sui-layout-header__inner">
                  {results.totalResults === 0 && <div className="alert alert-danger" role="alert">
                    No Search Results Found!
                  </div>}
                  <SearchBox page={currentPage} pageSize={pageSize} />
                </div>
              </div>
              <div className="sui-layout-body">
                <div className="sui-layout-body__inner">
                  <SideBar />
                  <div className="sui-layout-main">
                    <Content />
                    {results.totalResults > 0 &&
                      <div className="sui-layout-main-footer">
                        <Pagination current={currentPage}
                          pageSize={pageSize}
                          onChange={PaginationChange}
                          onShowSizeChange={PerPageChange}
                          total={results.totalResults} />
                      </div>}
                  </div>
                </div>
              </div>
            </div>
          </FilterCheckedContext.Provider>
        </SelectedFiltersContext.Provider>
      </SearchResultsContext.Provider>
    </>
  );
};

export default Home;

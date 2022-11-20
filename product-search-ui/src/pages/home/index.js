import React from "react";
import SearchBox from "../../components/home/searchbox";
import Content from "../../components/home/content";
import "./styles.css";
import SideBar from "../../components/home/sidebar";

const Home = () => {
  return (
    <div className="sui-layout">
      <div className="sui-layout-header">
        <div className="sui-layout-header__inner">
          <SearchBox />
        </div>
      </div>
      <div className="sui-layout-body">
        <div className="sui-layout-body__inner">
          <SideBar />
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Home;

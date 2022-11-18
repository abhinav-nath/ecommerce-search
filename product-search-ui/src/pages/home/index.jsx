import React from 'react';
import SearchBar from '../../components/home/searchbar';
import SidePanel from '../../components/home/sidepanel';
import Content from '../../components/home/content';
import './styles.css';

const Home = () => {
  return (
    <div className="home">
      <SearchBar />
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          <SidePanel />
        </div>
        <div className="home_content-wrap">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Home;

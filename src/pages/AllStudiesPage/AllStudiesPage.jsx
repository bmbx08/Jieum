import React, { useState } from 'react';
import SideBar from '../../default/SideBar';
import SubNav from '../../default/SubNav';
import SearchBar from './components/SearchBar';
import StudyList from './components/StudyList';
import StudyStatus from './components/StudyStatus';
import './AllStudiesPage.style.css';

const AllStudiesPage = () => {
  const [selectedTab, setSelectedTab] = useState('전체');

  return (
    <div className="app-container">
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="main-container">
        <div className="left-box">
          <SubNav selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <SearchBar />
          <StudyList selectedTab={selectedTab} />
        </div>
        <div className="right-box">
          <StudyStatus />
        </div>
      </div>
    </div>
  );
};

export default AllStudiesPage;

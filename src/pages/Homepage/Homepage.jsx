import React, { useState } from 'react';
import SideBar from '../../default/SideBar';
import SubNav from '../../default/SubNav';
import StudyList from './components/StudyList';
import StudyStatus from './components/StudyStatus';
import './Homepage.style.css';

const Homepage = () => {
  const [selectedTab, setSelectedTab] = useState('전체');

  return (
    <div className="app-container">
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="main-container">
        <div className="left-box">
          <SubNav selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <StudyList selectedTab={selectedTab} />
        </div>
        <div className="right-box">
          <StudyStatus />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

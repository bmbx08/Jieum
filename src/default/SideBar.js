import React from 'react';
import './SideBar.css';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import SettingsIcon from '@mui/icons-material/Settings';
import User from './User';
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <User className="sidebarIcon" />
            </li>
            <li className="sidebarListItem">
              <HomeIcon className="sidebarIcon" />홈
            </li>
            <li className="sidebarListItem">
              <FavoriteBorderIcon className="sidebarIcon" />
              스터디 신청
            </li>
            <li className="sidebarListItem">
              <BrowserUpdatedIcon className="sidebarIcon" />
              마이페이지
            </li>
            <li className="sidebarListItem">
              <SettingsIcon className="sidebarIcon" />
              마이페이지
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

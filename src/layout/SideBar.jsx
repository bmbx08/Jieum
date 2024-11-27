import React from "react";
import "./SideBar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import SettingsIcon from "@mui/icons-material/Settings";
import User from "../default/User";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <ul className="sidebarList">
        <li className="sidebarListItem top-nav-underline top-nav">
          <User className="sidebarIcon" />
        </li>
        <div className="sidebar-top-box">
          <li onClick={()=>navigate("/")} className="sidebarListItem list-nav">
            <HomeOutlinedIcon className="sidebarIcon home-icon " />홈
          </li>
          <li onClick={()=>navigate("/studies")} className="sidebarListItem list-nav">
            <CreateOutlinedIcon className="sidebarIcon" />
            스터디 신청
          </li>
          <li onClick={()=>navigate("/myinfo")} className="sidebarListItem list-nav">
            <AccountCircleOutlinedIcon className="sidebarIcon" />
            마이 페이지
          </li>
        </div>
        <div className="sidebar-bottom-box">
          <li onClick={()=>navigate("")} className="sidebarListItem list-nav">
            <FavoriteBorderIcon className="sidebarIcon" />
            관심 목록
          </li>
          <li onClick={()=>navigate("")} className="sidebarListItem list-nav">
            <BrowserUpdatedIcon className="sidebarIcon" />
            지원 현황
          </li>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;

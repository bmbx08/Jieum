import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import profileImg from "./images/male-profile.png";
import "./AppLayout.style.css";
import SideBar from "./SideBar";

const AppLayout = () => {
  const [userName, setUserName] = useState("정기찬");
  return (
    <div>
      <div className="sidebar-container">
        <SideBar/>
      </div>
      <div className="top-navbar">
        <div className="site-title-section">백석 지음(知音)</div>
        {/* <div className="user-section">
          <img src={profileImg} className="profile-image" />
          <div>{userName} 님</div>
        </div> */}
      </div>

      <Outlet /> {/*네브바 고정 위해 필요*/}
    </div>
  );
};

export default AppLayout;

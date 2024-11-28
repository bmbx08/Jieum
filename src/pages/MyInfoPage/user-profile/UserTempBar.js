import React from 'react';
import './UserTempBar.css';
const UserTempBar = ({ userTemp }) => {
  return (
    <div className="user-temp-container">
      <div className="temp-title">* 열정 온도</div>
      <div className="user-temp-bar-container">
        <div className="user-temp-bar">
          <div className="temp-fill" style={{ width: `${userTemp}%` }} />
        </div>
        <span className="temp-label">{userTemp}°C</span>
      </div>
    </div>
  );
};

export default UserTempBar;

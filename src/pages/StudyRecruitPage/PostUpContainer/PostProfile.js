import './PostProfile.css';
import React, { useState, useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const PostProfile = ({ authorName }) => {
  const [currentTime, setCurrentTime] = useState('');

  //날짜 및 시간 실시간 업데이트
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      //문자열 2자리로 맞추고 부족한 부분 채울 문자 0으로 설정
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');

      //날짜 가져오기
      const date = now.toLocaleDateString();

      setCurrentTime(`${date} ${hours}:${minutes}`);
    };

    updateTime(); //초기 시간
    const intervalId = setInterval(updateTime, 60000); //분마다 시간 업데이트

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="post-profile-box">
      <div className="post-profile">
        <div className="profile-icon-container">
          <AccountCircleIcon className="profile-icon" />
        </div>
        <div className="user-info">
          <span className="user-name">{authorName}</span>
          <div className="post-time">{currentTime}</div>
        </div>
      </div>
    </div>
  );
};

export default PostProfile;



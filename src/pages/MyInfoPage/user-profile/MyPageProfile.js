import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserTempBar from './UserTempBar';
import './MyPageProfile.css';

const MyPageProfile = ({ userInfo }) => {
  //사용자 온도바
  const [userTemp, setUserTemp] = useState(80); //초기값 80으로 설정

  return (
    <div className="myPage-profile-box">
      <div className="profile-section">
        <AccountCircleIcon className="user-profile-icon" />
        <UserTempBar userTemp={userTemp} />
      </div>

      <p className="user-profile-item">
        <strong>{userInfo.userName}</strong>
        {userInfo.userDepartment} <br />
        {userInfo.studentNum}학번
      </p>

      <div className="interest-keywords-Subtitle">
        <p>-관심 키워드</p>
      </div>
      <div className="interest-keywords">
        {userInfo.interestBadgeArray.map((keyword, index) => (
          <span key={index} className="keyword-item">
            #{keyword}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MyPageProfile;

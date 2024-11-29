import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './MyPageProfile.css';
import UserTempBar from './UserTempBar';

const MyPageProfile = ({ userInfo }) => {
  //userTempBar
  const [userTemp, setUserTemp] = useState(80); //우선 초기값으로 80 해 두겠습니다!!!
  return (
    <div className="myPage-profile-box">
      {/* <img src={bg} className="profile-box-bg" alt="background" /> */}
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
        <p>- 관심 키워드</p>
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

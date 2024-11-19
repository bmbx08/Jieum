import React, { useState } from 'react';
import UserTemp from './UserTemp';

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState({
    studentNum: '20213900',
    name: '고하늘',
    userId: 'kohaneul1219',
    college: '컴퓨터공학부',
    department: '소프트웨어학과',
    phoneNum: '010-9806-3719',
  });
  return (
    <div>
      <div className="userInfo">
        <p>
          {userInfo.studentNum} {userInfo.name}
        </p>
        <p>아이디 {userInfo.userId}</p>
        <p>
          학부 {userInfo.college} {userInfo.department}
        </p>
        <p>전화번호 {userInfo.phoneNum}</p>
      </div>
    </div>
  );
};

export default UserInfo;

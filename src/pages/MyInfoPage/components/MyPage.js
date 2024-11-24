import React, { useState, useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './MyPage.css';
import UserInfoBox from './UserInfoBox';
import UserInfoEdit from './UserInfoEdit';
import bg from './img/userInfo-bg.png';

const MyPage = () => {
  const [userInfo, setUserInfo] = useState({
    name: '', //사용자 이름
    department: '', //학과
    studentNum: '', //학번
    phone: '', //연락처
    userId: '', //아이디
    password: '', //비번
    determination: '', //각오
  });
  console.log('userInfo:', userInfo);

  const [isEditing, setIsEditing] = useState(false);

  const fields = [
    { name: 'name', label: '이름' },
    { name: 'department', label: '학과' },
    { name: 'studentNum', label: '학번' },
    { name: 'phone', label: '연락처' },
    { name: 'userId', label: '아이디' },
    { name: 'password', label: '비밀번호' },
    { name: 'determination', label: '각오' },
  ];
  console.log('fields:', fields);

  useEffect(() => {
    const fetchUserData = async () => {
      //우선 가상으로.. 제 정보 설정했습니당
      const userdata = {
        name: '고하늘',
        department: '컴퓨터공학부',
        studentNum: '20213900',
        phone: '010-9806-3719',
        userId: 'kohaneul1219',
        password: 'fuckinghaneul$$11',
        determination: '리액트 빠이또',
      };
      setUserInfo(userdata);
    };
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log('updated user info:', userInfo);
  };

  return (
    <div className="myPage">
      <h1 className="myPage-title">마이페이지</h1>
      <div className="myPage-profile-box">
        <img src={bg} className="profile-box-bg" alt="background" />
        {/* <AccountCircleIcon className="user-profile-icon" /> */}
      </div>
      <div className="user-info-box">
        {!isEditing ? (
          <UserInfoBox
            userInfo={userInfo}
            fields={fields}
            onEdit={() => setIsEditing(true)}
          />
        ) : (
          <UserInfoEdit
            userInfo={userInfo}
            fields={fields}
            onChange={handleChange}
            onSave={handleSave}
            onCancel={() => setIsEditing(false)}
          />
        )}
      </div>
    </div>
  );
};

export default MyPage;

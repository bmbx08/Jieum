import React, { useState, useEffect } from 'react';
import './MyPage.css';
import UserInfoBox from '../userinfo-page/UserInfoBox';
import UserInfoEdit from '../userinfo-page/UserInfoEdit';
import MyPageProfile from './MyPageProfile';
import UserTempBar from './UserTempBar';
import { Category } from '@mui/icons-material';
import StudySection from '../my-study-list/StudySection';

const MyPage = () => {
  const [createdUserData, setCreatedUserData] = useState({
    userName: '',
    userDepartment: '',
    userPhoneNum: '',
    userID: '',
    userPassword: '',
    studentNum: '',
    userAppealPhrase: '',
    interestBadgeArray: [],
  });

  console.log('userData:', createdUserData);

  const [originalUserInfo, setOriginalUserInfo] = useState(createdUserData);
  const [isEditing, setIsEditing] = useState(false);
  const [isViewing, setIsViewing] = useState(false);

  const fields = [
    { name: 'userName', label: '이름' },
    { name: 'userDepartment', label: '학과' },
    { name: 'studentNum', label: '학번' },
    { name: 'userPhoneNum', label: '연락처' },
    { name: 'userID', label: '아이디' },
    { name: 'userPassword', label: '비밀번호' },
    { name: 'userAppealPhrase', label: '각오' },
    { name: 'interestBadgeArray', label: '관심 태그' },
  ];
  console.log('fields:', fields);

  useEffect(() => {
    const fetchUserData = async () => {
      //우선 가상으로.. 제 정보 설정했습니당
      const userInfo = {
        userName: '고하늘',
        userDepartment: '컴퓨터공학부',
        studentNum: 21,
        userPhoneNum: '010-9806-3719',
        userID: 'kohaneul1219',
        userPassword: 'fuckinghaneul$$11',
        userAppealPhrase: '리액트 빠이또',
        interestBadgeArray: ['리액트', '자바스크립트', '컴퓨터공학부'],
      };
      console.log('userdata: ', userInfo);
      setCreatedUserData(userInfo);
      setOriginalUserInfo(userInfo);
    };
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreatedUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    setOriginalUserInfo(createdUserData);
    console.log('updated user info:', createdUserData);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCreatedUserData(originalUserInfo);
  };

  return (
    <div className="myPage">
      <div className="user-info-box">
        <h1 className="myPage-title">마이페이지</h1>

        {/* 내 정보 보기 버튼 클릭 >> UserInfo.js 렌더링 */}
        {!isViewing ? (
          <button onClick={() => setIsViewing(true)} className="view-info-btn">
            내 정보 보기
          </button>
        ) : !isEditing ? (
          <UserInfoBox
            userInfo={createdUserData}
            fields={fields}
            onEdit={() => setIsEditing(true)}
          />
        ) : (
          //수정 버튼 클릭 >> UserInfoEdit 렌더링
          <UserInfoEdit
            userInfo={createdUserData}
            fields={fields}
            onChange={handleChange}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}
      </div>
      <MyPageProfile userInfo={createdUserData} />
      <StudySection />
    </div>
  );
};

export default MyPage;

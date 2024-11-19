import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import UserInfo from './UserInfo';
import UserTemp from './UserTemp';
import TempProgress from './TempProgress';

const MyPage = () => {
  return (
    <div className="myPage">
      <h2 className="title">마이페이지</h2>
      {/* 프로필 사진 / 내 정보 / 온도 */}
      <Row className="myPage-row">
        <div>
          <img
            className="user-img"
            src="https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png"
            alt="userImage"
          />
        </div>
        <Col>
          <UserInfo />
          <TempProgress />
          <button className="edit-btn">수정하기</button>
        </Col>
      </Row>
    </div>
  );
};

export default MyPage;

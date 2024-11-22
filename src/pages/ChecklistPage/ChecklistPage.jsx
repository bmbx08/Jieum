import React from "react";
import "../ChecklistPage/ChecklistPage.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaUserCircle } from "react-icons/fa";

const ChecklistPage = () => {
  const now = 60;
  return (
    <div className="display-center">
      <div className="main-content">
        <div className="progress-section">
          <div className="Cl-header">
            <h4 className="Cl-study-title">웹프로그래밍</h4>
            <a href="/studyAdmin" className="goToAdmin">
              스터디 관리 바로가기
            </a>
          </div>
          <div className="progress-container">
            <div className="weekly-content">
              <div className="weekly-header">
                <h7 className="week-info">2주차</h7>
                <h3>React 기초 및 컴포넌트 구조 이해</h3>
              </div>
              <div className="weekly-progressbar">
                <h9>개인 진행 상황</h9>
                <ProgressBar
                  now={now}
                  className="custom-progress-bar"
                  label={`${now}%`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="members-content">
          <h7 className="members-header-text">멤버별 진행 상황</h7>
          <div className="members-name">
            <FaUserCircle className="user-icon" />
            <h9 className="members-name-text">김주은</h9>
          </div>
          <div className="members-name">
            <FaUserCircle className="user-icon"/>
            <h9 className="members-name-text">고하늘</h9>
          </div>
          <div className="members-name">
            <FaUserCircle className="user-icon"/>
            <h9 className="members-name-text">표선영</h9>
          </div>
          <div className="members-name">
            <FaUserCircle className="user-icon"/>
            <h9 className="members-name-text">박정효</h9>
          </div>
        </div>
      </div>
      <div className="checklist-content">
        <div className="checklist-header">
          <h5 className="check-header-text">- 체크리스트</h5>
        </div>
        <div className="week-checklist">
          <input type="checkbox" className="check-box"/>
          <h6 className="week-todo">1주차: HTML & CSS 기초 학습, JavaScript 기본 문법 복습</h6>
        </div>
        <div className="week-checklist">
          <input type="checkbox" className="check-box"/>
          <h6 className="week-todo">1주차: HTML & CSS 기초 학습, JavaScript 기본 문법 복습</h6>
        </div>
        <div className="week-checklist">
          <input type="checkbox" className="check-box"/>
          <h6 className="week-todo">1주차: HTML & CSS 기초 학습, JavaScript 기본 문법 복습</h6>
        </div>
        <div className="week-checklist">
          <input type="checkbox" className="check-box"/>
          <h6 className="week-todo">1주차: HTML & CSS 기초 학습, JavaScript 기본 문법 복습</h6>
        </div>
      </div>
    </div>
  );
};

export default ChecklistPage;

import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ChecklistPage.css";

// WeekChecklist Component (빨간색 - 체크리스트 항목)
const WeekChecklist = ({ week, description, link }) => {
  return (
    <div className="week-checklist">
      <input type="checkbox" className="check-box" />
      <Link to={link} className="week-todo">
        {`${week}주차: ${description}`}
      </Link>
    </div>
  );
};

// MemberProgress Component (빨간색 - 멤버 이름)
const MemberProgress = ({ name }) => {
  return (
    <div className="members-name">
      <FaUserCircle className="user-icon" />
      <h9 className="members-name-text">{name}</h9>
    </div>
  );
};

// ProgressSection Component (파란색 - 진행 상황 섹션)
const ProgressSection = ({ week, title, progress }) => {
  return (
    <div className="progress-section">
      <div className="Cl-header">
        <h4 className="Cl-study-title">웹프로그래밍</h4>
      </div>
      <div className="progress-container">
        <div className="weekly-content">
          <div className="weekly-header">
            <h7 className="week-info">{`${week}주차`}</h7>
            <h3>{title}</h3>
          </div>
          <div className="weekly-progressbar">
            <h9>개인 진행 상황</h9>
            <ProgressBar
              now={progress}
              className="custom-progress-bar"
              label={`${progress}%`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// MembersContent Component (파란색 - 멤버 진행 상황 섹션)
const MembersContent = ({ members }) => {
  return (
    <div className="members-content">
      <h7 className="members-header-text">멤버별 진행 상황</h7>
      {members.map((member, index) => (
        <MemberProgress key={index} name={member} />
      ))}
    </div>
  );
};

// ChecklistContent Component (파란색 - 체크리스트 섹션)
const ChecklistContent = ({ weeks }) => {
  return (
    <div className="checklist-content">
      <div className="checklist-header">
        <h5 className="check-header-text">- 체크리스트</h5>
      </div>
      {weeks.map((week, index) => (
        <WeekChecklist
          key={index}
          week={week.week}
          description={week.description}
          link={week.link}
        />
      ))}
    </div>
  );
};

// Main ChecklistPage Component
const ChecklistPage = () => {
  const now = 25; // 개인 진행 상황
  const members = ["김주은", "고하늘", "표선영", "박정효"];
  const weeks = [
    { week: 1, description: "HTML & CSS 기초 학습", link: "/checklist/week1" },
    {
      week: 2,
      description: "React 기초 및 컴포넌트 구조 이해",
      link: "/checklist/week2",
    },
    { week: 3, description: "간단한 프로젝트 제작", link: "/checklist/week3" },
    { week: 4, description: "최종 프로젝트 진행", link: "/checklist/week4" },
  ];

  return (
    <div className="display-center">
      <div className="main-content">
        <ProgressSection
          week={2}
          title="React 기초 및 컴포넌트 구조 이해"
          progress={now}
        />
        <MembersContent members={members} />
      </div>
      <ChecklistContent weeks={weeks} />
    </div>
  );
};

export default ChecklistPage;

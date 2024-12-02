import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ChecklistPage.css";

const WeekChecklist = ({ id, week, description, link, checked, onCheck }) => (
  <div className="week-checklist">
    <input
      type="checkbox"
      className="check-box"
      checked={checked}
      onChange={onCheck}
    />
    <Link to={link} className="week-todo">
      {`${week}: ${description}`}
    </Link>
  </div>
);

const MemberProgress = ({ name }) => (
  <div className="members-name">
    <FaUserCircle className="user-icon" />
    <h9 className="members-name-text">{name}</h9>
  </div>
);

const ProgressSection = ({ week, title, progress }) => (
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
          <h7 className="week-info">{`${week}주차`}</h7>
          <h3>{title}</h3>
        </div>
        <div className="weekly-progressbar">
          <h9>개인 진행 상황</h9>
          <div className="progress-wrapper">
            <ProgressBar now={progress} className="custom-progress-bar" />
            <span className="progress-percent">{`${progress.toFixed(
              0
            )}%`}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MembersContent = ({ members }) => (
  <div className="members-content">
    <h7 className="members-header-text">멤버별 진행 상황</h7>
    {members.map((member, index) => (
      <MemberProgress key={index} name={member} />
    ))}
  </div>
);

const ChecklistContent = ({ weeks, completed, onCheck }) => (
  <div className="checklist-content">
    <div className="checklist-header">
      <h5 className="check-header-text">- 체크리스트</h5>
    </div>
    {Object.keys(weeks).map((key, index) => (
      <WeekChecklist
        key={key}
        id={key}
        week={`${index + 1}주차`} // 수정된 부분
        description={weeks[key].description}
        link={weeks[key].link}
        checked={completed[index]}
        onCheck={() => onCheck(index)}
      />
    ))}
  </div>
);

const ChecklistPage = () => {
  const weeks = {
    week1: { description: "HTML & CSS 기초 학습", link: "/checklist/week1" },
    week2: {
      description: "React 기초 및 컴포넌트 구조 이해",
      link: "/checklist/week2",
    },
    week3: { description: "간단한 프로젝트 제작", link: "/checklist/week3" },
    week4: { description: "최종 프로젝트 진행", link: "/checklist/week4" },
  };

  const [completed, setCompleted] = useState(
    Array(Object.keys(weeks).length).fill(false)
  );
  const progress =
    (completed.filter(Boolean).length / Object.keys(weeks).length) * 100;

  const handleCheck = (index) => {
    const updated = [...completed];
    updated[index] = !updated[index];
    setCompleted(updated);
  };

  const members = ["김주은", "고하늘", "표선영", "박정효"];

  return (
    <div className="display-center">
      <div className="main-content">
        <ProgressSection
          week={2}
          title="React 기초 및 컴포넌트 구조 이해"
          progress={progress}
        />
        <MembersContent members={members} />
      </div>
      <ChecklistContent
        weeks={weeks}
        completed={completed}
        onCheck={handleCheck}
      />
    </div>
  );
};

export default ChecklistPage;

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./WeekTodoPage.css";

const WeekTodoPage = () => {
  const { weekId } = useParams();
  const navigate = useNavigate();
  const [uploadedFile, setUploadedFile] = useState(null);

  const weekDetails = {
    week1: {
      title: "1주차: HTML & CSS 기초 학습, JavaScript 기본 문법 복습",
      tasks: [
        "HTML 구조와 태그 이해하기 (헤더, 섹션, 푸터)",
        "CSS 기본 스타일링 (색상, 배경, 폰트)",
        "CSS Flexbox와 Grid 기초 학습",
        "JavaScript 기본 문법 복습 (변수, 조건문, 반복문)",
        "기본 HTML/CSS 및 JavaScript를 활용한 간단한 프로젝트 구성",
      ],
      assignment: "학습 내용 사진찍어서 업로드하기",
    },
    week2: {
      title: "2주차: React 기초 및 컴포넌트 구조 이해",
      tasks: [
        "React의 주요 개념과 JSX 학습",
        "컴포넌트 생성 및 Props/State 이해",
        "React Router를 활용한 간단한 라우팅 구현",
        "React Hook (useState, useEffect) 학습 및 실습",
        "React로 TodoList 컴포넌트 만들기",
      ],
      assignment: "React 기반 컴포넌트 설계 및 결과물 공유",
    },
  };

  const currentWeek = weekDetails[weekId];

  if (!currentWeek) {
    return <p>해당 주차 정보를 찾을 수 없습니다.</p>;
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  const handleSubmit = () => {
    if (uploadedFile) {
      alert(`${uploadedFile.name} 파일이 업로드되었습니다.`);
    } else {
      alert("업로드할 파일을 선택하세요.");
    }
  };

  return (
    <div className="display-center">
      <div className="week-todo-page">
        <div className="header">
          <h1>웹프로그래밍</h1>
        </div>
        <div className="content">
          <div className="content-card">
            <h2 className="week-title">{currentWeek.title}</h2>
            <div className="tasks">
              <h3>학습 내용</h3>
              <ul>
                {currentWeek.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="upload-card">
            <h3>과제 제출</h3>
            <p>{currentWeek.assignment}</p>
            <div className="upload-section">
              <input
                type="file"
                id="upload-input"
                onChange={handleFileChange}
                className="upload-input"
              />
              <div className="upload-actions">
                <label htmlFor="upload-input" className="upload-label">
                  파일 업로드
                </label>
                <button className="submit-button" onClick={handleSubmit}>
                  제출하기
                </button>
              </div>
              {uploadedFile && (
                <div className="file-info">
                  <p>선택된 파일: {uploadedFile.name}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <button className="back-button" onClick={() => navigate("/checklist")}>
          목록으로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default WeekTodoPage;

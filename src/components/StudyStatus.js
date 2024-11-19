import React, { useState } from 'react';
import './StudyStatus.css';
import { colors } from '@mui/material';

const StudyStatus = () => {
  const [ongoingStudies, setOngoingStudies] = useState([
    '파이썬 프로그래밍',
    '인간발달 교육',
    '마케팅 관리론',
  ]);

  const [completedStudies, setCompletedStudies] = useState([
    'JAVA 프로그래밍',
    '과학기술 글쓰기',
  ]);

  return (
    <div className="study-status-box">
      <h3 className="studyStatus-title">스터디 현황</h3>
      <div className="study-status">
        <div className="status-content">
          <h4 className="content-title">참여 중</h4>
          <ul className="status-list">
            {ongoingStudies.map((study, index) => (
              <li key={index}>{study}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="content-title">완료</h4>
          <ul className="status-list">
            {completedStudies.map((study, index) => (
              <li key={index}>{study}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudyStatus;

import React from 'react';
import './StudyForm.css';

const StudyForm = ({ category, duration, maxParticipants, schedule }) => {
  return (
    <div className="study-condition">
      <p>
        <strong>세부영역 |</strong> {category}
      </p>
      <p>
        <strong>스터디 기간 |</strong> {duration}주
      </p>
      <p>
        <strong>모집 인원 |</strong> {maxParticipants}명
      </p>

      <div className="study-schedule">
        <h3>학습 일정</h3>
        <ul>
          {schedule.map((item, index) => (
            <li key={index}>
              <strong>{index + 1}주차 |</strong> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudyForm;

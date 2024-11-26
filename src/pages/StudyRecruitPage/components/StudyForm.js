import React from 'react';
import './StudyForm.css';
import { Description } from '@mui/icons-material';

const StudyForm = ({ studyInfo, weeklySchedule }) => {
  return (
    <div className="study-condition">
      <p>
        <strong>세부영역 |</strong>
        {studyInfo.interestBadgeArray.map((badge, index) => (
          <span key={index}>
            #{badge}
            {index < studyInfo.interestBadgeArray.length - 1 && ' '}
          </span>
        ))}
      </p>
      <p>
        <strong>스터디 기간 |</strong> {studyInfo.studyPeriod}주
      </p>
      <p>
        <strong>모집 인원 |</strong>
        {studyInfo.limitlessRecruit
          ? '제한 없음'
          : `${studyInfo.recruitSize}명`}
      </p>

      <div className="study-schedule">
        <h3>학습 일정</h3>
        <ul>
          {Object.entries(weeklySchedule).map(([week, description], index) => (
            <li key={week}>
              <strong>{index + 1}주차 |</strong> {description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudyForm;

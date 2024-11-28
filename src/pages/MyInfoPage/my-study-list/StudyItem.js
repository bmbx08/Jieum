import React from 'react';
import './StudyItem.css';
const StudyItem = ({ study }) => {
  const { subject, recruitSize, limitlessRecruit } = study.studyInfo;
  const { createdAt } = study;

  return (
    <div className="study-item">
      <div className="study-header">
        <h3>{subject}</h3>
        <span>참여 인원: {limitlessRecruit ? '없음' : `${recruitSize}명`}</span>
      </div>

      <p className="study-data">생성 날짜: {createdAt}</p>
    </div>
  );
};

export default StudyItem;

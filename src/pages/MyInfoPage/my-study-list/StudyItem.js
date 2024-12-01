import React from 'react';
import './StudyItem.css';
const StudyItem = ({ study, handleCompleteRecruit }) => {
  const { subject, recruitSize, limitlessRecruit, currentRecruit } =
    study.studyInfo;
  const { createdAt, status } = study;

  return (
    <div className="study-item">
      <div className="study-header">
        <strong>{subject}</strong>
        <div className="recruit-state-text-box">
          {status === '모집 중' ? (
            <div>
              <span>
                모집 인원: {limitlessRecruit ? '제한 없음' : `${recruitSize}명`}
              </span>
              <span className="study-applicants">
                지원 인원: {currentRecruit}명
              </span>
            </div>
          ) : (
            <span className="current-recruit-text">
              참여 인원:{' '}
              {limitlessRecruit ? '제한 없음' : `${currentRecruit}명`}
            </span>
          )}
        </div>
      </div>
      <p className="study-data">생성 날짜: {createdAt}</p>
    </div>
  );
};

export default StudyItem;

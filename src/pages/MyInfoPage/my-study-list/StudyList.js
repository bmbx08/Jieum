import React from 'react';
import StudyItem from './StudyItem';
import './StudyList.css';
// import RecruitState from './RecruitState';

const StudyList = ({ studies, handleCompleteRecruit }) => {
  return (
    <div className="study-list">
      <div className="study-list-item">
        {studies.map((study) => (
          <div key={study.id} className="study-item-wrapper">
            <StudyItem study={study} />
            {study.status === '모집 중' && (
              <button
                className="complete-recruit-btn"
                onClick={() => handleCompleteRecruit(study.id)}
              >
                모집 완료
              </button>
            )}
            {/* <RecruitState
              study={study}
              handleCompleteRecruit={handleCompleteRecruit}
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyList;

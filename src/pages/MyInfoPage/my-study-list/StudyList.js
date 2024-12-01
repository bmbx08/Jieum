import React from 'react';
import StudyItem from './StudyItem';
import './StudyList.css';

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyList;

import React from 'react';
import StudyItem from './StudyItem';
import './StudyList.css';
import RecruitState from './RecruitState';

const StudyList = ({ studies, handleCompleteRecruit }) => {
  return (
    <div className="study-list">
      {studies.map((study) => (
        <div key={study.id} className="study-item-wrapper">
          <StudyItem study={study} />
          <RecruitState
            study={study}
            handleCompleteRecruit={handleCompleteRecruit}
          />
        </div>
      ))}
    </div>
  );
};

export default StudyList;

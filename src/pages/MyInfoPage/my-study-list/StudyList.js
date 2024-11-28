import React from 'react';
import StudyItem from './StudyItem';

const StudyList = ({ studies }) => {
  return (
    <div className="study-list">
      {studies.length > 0 ? (
        studies.map((study) => <StudyItem key={study.id} study={study} />)
      ) : (
        <p>해당 카테고리에 스터디가 없습니다.</p>
      )}
    </div>
  );
};

export default StudyList;

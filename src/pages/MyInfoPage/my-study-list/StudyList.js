import React from 'react';
import StudyItem from './StudyItem';
import './StudyList.css';

const StudyList = ({ studies, handleCompleteRecruit }) => {
  return (
    <div className="study-list">
      <div className="study-list-item">
        {studies.length > 0 ? (
          studies.map((study) => (
            <div key={study.id}>
              <StudyItem study={study} />{' '}
              {study.status === '모집 중' && (
                <button onClick={() => handleCompleteRecruit(study.id)}>
                  모집 완료
                </button>
              )}
            </div>
          ))
        ) : (
          <p>해당하는 스터디가 없습니다</p>
        )}
      </div>
    </div>
  );
};

export default StudyList;

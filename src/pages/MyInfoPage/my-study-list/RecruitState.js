import React from 'react';

const RecruitState = ({ study, handleCompleteRecruit }) => {
  return (
    <div>
      {study.status === '모집 중' && (
        <button onClick={() => handleCompleteRecruit(study.id)}>
          모집 완료
        </button>
      )}
    </div>
  );
};

export default RecruitState;

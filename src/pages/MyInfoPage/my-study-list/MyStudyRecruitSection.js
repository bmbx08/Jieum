import React from 'react';
import StudyList from './StudyList';

const MyStudyRecruitSection = ({ userID, studies, handleCompleteRecruit }) => {
  const recruitingStudies = studies.filter(
    (study) =>
      study.status === '진행 중' && study.studyInfo.createdBy === userID
  );

  return (
    <div>
      <h3 className="myStudy-list-title">- 모집 중인 스터디 내역</h3>
      <div className="study-section">
        {recruitingStudies.length > 0 ? (
          <StudyList
            studies={recruitingStudies}
            handleCompleteRecruit={handleCompleteRecruit}
          />
        ) : (
          <p>모집 중인 스터디가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default MyStudyRecruitSection;

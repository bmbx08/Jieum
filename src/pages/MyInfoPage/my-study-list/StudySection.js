import React, { useState } from 'react';
import './StudySection.css';
import './StudyList';
import StudyList from './StudyList';

const StudySection = ({ studies, handleCompleteRecruit }) => {
  //내 스터디 내역 카테고리 진행 중/ 진행 완료/ 전체
  const [statusFilter, setStatusFilter] = useState('진행 중');

  const filteredData =
    statusFilter === '전체'
      ? studies
      : studies.filter((study) => study.status === statusFilter);

  return (
    <div>
      <h3 className="myStudy-list-title">- 내 스터디</h3>
      <div className="study-section">
        <div className="study-status-filter">
          {['진행 중', '진행 완료', '전체'].map((status) => (
            <button
              key={status}
              className={`status-btn ${
                statusFilter === status ? 'active' : ''
              }`}
              onClick={() => setStatusFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="study-list">
          {filteredData.length > 0 ? (
            <StudyList
              studies={filteredData}
              handleCompleteRecruit={handleCompleteRecruit}
            />
          ) : (
            <p>해당하는 스터디가 없습니다</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudySection;

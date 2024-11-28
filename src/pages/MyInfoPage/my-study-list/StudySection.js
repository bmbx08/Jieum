import React, { useState } from 'react';
import StudyList from './StudyList';
import './StudySection.css';

const StudySection = () => {
  const [statusFilter, setStatusFilter] = useState('전체');

  //우선 초기값 설정
  const studyData = [
    {
      id: 1,
      studyInfo: {
        category: '전공',
        subCategory: 'React 심화',
        subject: '리액트 프로젝트',
        recruitSize: 5,
        limitlessRecruit: false,
      },
      createdAt: '2024-11-01',
      status: '진행 중',
    },
    {
      id: 2,
      studyInfo: {
        category: '교양',
        subCategory: '알고리즘',
        subject: '자료구조 및 알고리즘',
        recruitSize: 10,
        limitlessRecruit: true,
      },
      createdAt: '2024-09-15',
      status: '진행 완료',
    },
  ];

  const filteredData =
    statusFilter === '전체'
      ? studyData
      : studyData.filter((study) => study.status === statusFilter);

  return (
    <div>
      <h2 className="MyStudy-list-title">- 내 스터디</h2>
      <div className="study-section">
        <div className="study-status-filter">
          {['전체', '진행 중', '진행 완료'].map((status) => (
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
          <StudyList studies={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default StudySection;

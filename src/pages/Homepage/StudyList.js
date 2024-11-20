import React, { useState } from 'react';
import './StudyList.css';
import SearchBar from './SearchBar';

const StudyList = ({ selectedTab }) => {
  //초기 데이터 예시!!! 새로운 게시물 등록 시 이 배열에 추가될 수 있도록....
  const allItems = [
    {
      id: 1,
      tag: '#파이썬 프로그래밍',
      title: '파이썬 스터디 할 분 모집',
      category: '전공',
    },
    { id: 2, tag: '#웹 개발', title: '웹 개발 스터디 모집', category: '전공' },
    { id: 3, tag: '#인문학', title: '인문학 독서 모임', category: '교양' },
    {
      id: 4,
      tag: '#자기개발',
      title: '자기개발 스터디 모집',
      category: '자기개발',
    },
  ];

  const filteredItems = allItems.filter(
    (item) => selectedTab === '전체' || item.category === selectedTab
  );

  return (
    <div className="study-list">
      <SearchBar />
      <div className="study-items">
        {filteredItems.map((item) => (
          <div className="study-item" key={item.id}>
            <p>{item.tag}</p>
            <p className="studyItem-title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyList;

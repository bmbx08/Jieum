import React, { useState } from 'react';
import './StudyList.css';

const StudyList = ({ selectedTab }) => {
  //초기 데이터 예시!!! 새로운 게시물 등록 시 이 배열에 추가될 수 있도록....

  const allItems = [
    {
      id: 1,
      interestBadgeArray: ['#전공','#컴퓨터공학부','#파이썬 프로그래밍'],
      blogPostContent:{
        blogTitle: '파이썬 스터디 할 분 모집'
      },
      category: '전공',
    },
    { 
      id: 2, 
      interestBadgeArray: ['#자기개발','#개발','#웹프로그래밍'], 
      blogPostContent:{
        blogTitle:'웹 개발 스터디 모집'
      },
      category: '전공' },
    { 
      id: 3, 
      interestBadgeArray: ['#자기개발','#어학','#인문학'], 
      blogPostContent:{
        blogTitle:'인문학 독서 모임'
      },
      category: '교양' },
    {
      id: 4,
      interestBadgeArray: ['#교양','#사랑의 실천','#기독교세계관'],
      blogPostContent:{
        blogTitle:'자기개발 스터디 모집'
      },
      category: '자기개발',
    },
  ];

  const filteredItems = allItems.filter(
    (item) => selectedTab === '전체' || item.category === selectedTab
  );

  return (
    <div className="study-list">
      <div className='study-list-title'>스터디 모집 글</div>
      <div className="study-items">
        {filteredItems.map((item) => (
          <div className="study-item" key={item.id}>
            <div className='tag-section'>
              <span className='list-badge-style'>모집중</span>
              {item.interestBadgeArray.map((badge)=>(
                <span className='list-badge-style'>{badge}</span>
              ))}
            </div>
            
            <p className="studyItem-title">{item.blogPostContent.blogTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyList;

import React, { useState } from 'react';
import './Check.css';
import { Container } from 'react-bootstrap';
import PostTitle from './PostTitle';
import StudyForm from './StudyForm';
import UserComment from './UserComment';
import StudyApply from './StudyApply';

const Check = () => {
  const [applicants, setApplicants] = useState([]);

  const studyData = {
    category: '#웹프로그래밍 #리액트',
    duration: 4,
    maxParticipants: 6,
    description: '간단히 복습하고 프로젝트 진행할 분 구합니다.',
    schedule: [
      'HTML & CSS 기초 학습, JavaScript 기본 문법 복습',
      'React 기본 및 컴포넌트 구조 이해',
      '간단한 웹 프로젝트 진행',
      '고급 웹 프로젝트 완성',
    ],
  };

  const handleApplicantUpdate = (updatedApplicants) => {
    setApplicants(updatedApplicants);
  };

  return (
    <div>
      <Container className="study-recruit-check-box">
        <PostTitle />
        <StudyForm
          category={studyData.category}
          duration={studyData.duration}
          maxParticipants={studyData.maxParticipants}
          schedule={studyData.schedule}
        />

        <p className="study-description">{studyData.description}</p>
        <StudyApply onApplicantAdd={handleApplicantUpdate} />

        <UserComment />
      </Container>
    </div>
  );
};

export default Check;

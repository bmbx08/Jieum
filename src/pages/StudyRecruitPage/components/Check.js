import React, { useState } from 'react';
import './Check.css';
import PostTitle from './PostTitle';
import StudyForm from './StudyForm';
import UserComment from './comment/UserComment';
import StudyApply from './StudyApply';
import ReactionBox from './ReactionBox';

const Check = () => {
  // const [applicants, setApplicants] = useState([]);
  const [comments, setComments] = useState([]);

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

  const handleApplicantAdd = (newApplicant) => {
    console.log('현재 신청자 목록:', newApplicant);
  };

  //댓글 추가
  const handleCommentAdd = (
    newComment,
    isReply = false,
    parentIndex = null
  ) => {
    setComments((prevComments) => {
      const updatedComments = [...prevComments];

      //댓글이면 댓글 추가
      if (isReply && parentIndex !== null) {
        updatedComments[parentIndex].replies.push(newComment);
      } else {
        //답글이면 답글 추가
        updatedComments.push({ text: newComment, replies: [] });
      }
      return updatedComments;
    });
  };

  //총 댓글 수
  const totalCommentCount = comments.reduce(
    (count, comment) => count + 1 + comment.replies.length,
    0
  );

  return (
    <div className="study-recruit-check-box">
      <PostTitle />
      <StudyForm
        category={studyData.category}
        duration={studyData.duration}
        maxParticipants={studyData.maxParticipants}
        schedule={studyData.schedule}
      />

      <p className="study-description">{studyData.description}</p>

      <StudyApply onApplicantAdd={handleApplicantAdd} />
      <ReactionBox commentCount={totalCommentCount} />
      <UserComment onCommentAdd={handleCommentAdd} />
    </div>
  );
};

export default Check;

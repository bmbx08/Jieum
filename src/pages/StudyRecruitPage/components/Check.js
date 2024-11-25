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

  const createdStudyData = {
    studyInfo: {
      category: '전공', //카테고리(string)
      subCategory: '컴퓨터공학부', //서브 카테고리 (string)
      subject: 'C언어 프로그래밍', //과목(string)
      studyPeriod: 4, //스터디 기간
      recruitSize: 7, //모집인원(number)
      limitlessRecruit: false, //인원 제한 유무 (boolean)
      interestBadgeArray: ['전공', '컴퓨터공학부', 'C언어 프로그래밍'], //관심 항목 배열(array)
    },
    weeklySchedule: [week1:], //주차별 계획 객체 (obj : string값)
    blogPostContent: {
      blogTitle: blogTitle, //게시판 제목(string)
      blogContent: blogContent, //게시판 내용(string)
    },
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

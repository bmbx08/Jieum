import React, { useState, useEffect } from 'react';
import './Check.css';
import PostTitle from '../PostUpContainer/PostTitle';
import StudyForm from './StudyForm';
import UserComment from './comment/UserComment';
import StudyApply from './StudyApply';
import ReactionBox from './comment/ReactionBox';

const Check = () => {
  const [applicants, setApplicants] = useState([]);
  const [comments, setComments] = useState([]);
  const [authorID, setAuthorID] = useState(null);

  //사용자 정보
  const createdUserData = {
    userName: '고하늘', //이름(string)
    userPhoneNum: '01098063719', //전화번호(num)
    userID: 'haneul1219', //ID(string)
    userPassword: 'fuckinghn$$1212', //비밀번호(string)
    studentNum: 22, //학번 (number)
    userAppealPhrase: '화이팅입니당!!', //각오의 한 마디(string)
    interestBadgeArray: ['전공', '교양', '컴퓨터공학부', '어문학부', '개발'], //관심 tag들 (array)
  };

  //스터디 게시글 정보 :: 우선 초기값 설정해 뒀습니다!!!
  const createdStudyData = {
    authorName: '정기찬',
    authorID: 'jung2929',
    studyInfo: {
      category: '전공',
      subCategory: '컴퓨터공학부',
      subject: 'C언어 프로그래밍',
      studyPeriod: 4,
      recruitSize: 7,
      limitlessRecruit: false,
      interestBadgeArray: ['전공', '컴퓨터공학부', 'C언어 프로그래밍'],
    },
    weeklySchedule: {
      week1: '스터디 재미있게 해요~',
      week2: '스터디 재미잇게 해여',
      week3: '우아아아아아아아아악',
      week4: '짱구는 못 말려',
    },
    blogPostContent: {
      blogTitle: '리액트 스터디 모집합니다.',
      blogContent: '스터디 같이 해여',
    },
  };

  const handleApplicantAdd = (newApplicant) => {
    setApplicants((prevApplicants) => [...prevApplicants, newApplicant]);
  };

  //댓글 추가
  const handleCommentAdd = (
    newComment,
    isReply = false,
    parentIndex = null
  ) => {
    setComments((prevComments) => {
      const updatedComments = [...prevComments];

      if (isReply && parentIndex !== null) {
        //답글 추가
        updatedComments[parentIndex].replies.push(newComment);
      } else {
        //댓글 추가
        updatedComments.push(newComment);
      }
      return updatedComments;
    });
  };

  //총 댓글 수
  const totalCommentCount = Array.isArray(comments)
    ? comments.reduce((count, comment) => count + 1 + comment.replies.length, 0)
    : 0;

  const [currentTime, setCurrentTime] = useState('');

  //날짜 및 시간 실시간 업데이트
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      //문자열 2자리로 맞추고 부족한 부분 채울 문자 0으로 설정
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');

      //날짜 가져오기
      const date = now.toLocaleDateString();

      setCurrentTime(`${date} ${hours}:${minutes}`);
    };

    updateTime(); //초기 시간
    const intervalId = setInterval(updateTime, 60000); //분마다 시간 업데이트

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="study-recruit-check-box">
      <PostTitle
        blogPostContent={createdStudyData.blogPostContent}
        authorName={createdStudyData.authorName}
        createdStudyData={createdStudyData}
        setAuthorID={setAuthorID}
      />
      <StudyForm
        studyInfo={createdStudyData.studyInfo}
        weeklySchedule={createdStudyData.weeklySchedule}
      />

      <p className="study-description">
        {createdStudyData.blogPostContent.blogContent}
      </p>

      <StudyApply
        onApplicantAdd={handleApplicantAdd}
        userName={createdUserData.userName}
        createdStudyData={createdStudyData}
      />
      <ReactionBox commentCount={totalCommentCount} />
      <UserComment
        onCommentAdd={handleCommentAdd}
        comments={comments}
        createdUserData={createdUserData}
        currentTime={currentTime}
        authorID={authorID}
      />
    </div>
  );
};

export default Check;

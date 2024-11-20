import './PostTitle.css';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import PostProfile from './PostProfile';

const PostTitle = () => {
  //게시글 제목 (우선 초기값 설정) 이후 수정시 null로 값 변경할 것
  const [title, setTitle] = useState('study title');
  const [userName, setUserName] = useState('정기찬');
  //모집 중 버튼 상태
  const [isRecruiting, setIsRecruiting] = useState(true);

  //데이터 가져오기 (fetch or axios 사용하여 실제 api로부터 데이터 받아오기)
  //나중에 데이터 받아오면 이 부분에서 처리할 것
  useEffect(() => {
    //data loading
    //이 부분은 나중에 데이터를 불러오는 Api 호출로 대체 가능
    //실제 데이터 가져오고 제목 업데이트
    const fetchTitle = async () => {
      try {
        //서버에서 데이터 요런 식으로 가져오기!!!
        // const response = await fetch('/api/get-post-title'); //API url 입력하기
        // const data = await response.json();
        // setTitle(data.title);
        console.log('게시글 제목을 서버에서 가져오는 중...');

        //우선 실제 api 호출 없이 3초 후에 제목 바꾸기!! >> api 완성시 수정할 것
        setTimeout(() => {
          setTitle('리액트 스터디 모집합니다');
        }, 3000);
      } catch (error) {
        console.error('제목을 가져오는 데 실패했습니다:', error);
      }
    };

    fetchTitle();
  }, []);

  return (
    <div>
      <div className="post-title-box">
        {/* 제목 로딩 전 기본 텍스트 표시 */}
        <span className="post-title">{title}</span>
        <Button disabled={!isRecruiting} className="toRecruit-state">
          {isRecruiting ? '모집 중' : '모집 완료'}
        </Button>
      </div>
      <PostProfile userName={userName} />
    </div>
  );
};

export default PostTitle;

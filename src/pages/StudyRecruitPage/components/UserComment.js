import React, { useState } from 'react';
import './UserComment.css';

const UserComment = () => {
  //댓글 목록
  const [comments, setComments] = useState([]);
  //댓글 입력값
  const [commentText, setCommentText] = useState('');
  //댓글 입력값 관리
  const [replyText, setReplyText] = useState('');
  //답글 추가할 대상 댓글 관리
  const [replyingToIndex, setReplyingToIndex] = useState(null);

  //댓글 입력
  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  //답글 입력
  const handelReplyChange = (e) => {
    setReplyText(e.target.value);
  };

  //댓글 추가 : trim() 문자열의 앞뒤 공백 제거
  const handleAddComment = () => {
    if (commentText.trim()) {
      //새로운 댓글을 기존 댓글 목록에 추가
      //comments == 현재 댓글 배열
      //newComment == 추가된 댓글 저장 객체
      const newComment = { text: commentText, replies: [] };
      setComments([...comments, newComment]);
      setCommentText(''); //입력창 초기화
    }
  };

  //답글 추가
  const handleAddReply = () => {
    if (replyText.trim() && replyingToIndex !== null) {
      const updatedComments = [...comments];
      updatedComments[replyingToIndex].replies.push(replyText);
      setComments(updatedComments);
      setReplyText('');
      setReplyingToIndex(null);
    }
  };

  //답글을 달 댓글 선택!!
  const handleReplyToComment = (index) => {
    setReplyingToIndex(index);
  };

  return (
    <div>
      {/* 댓글 목록 출력 */}
      <div className="comment-container">
        <ul className="reply-comment">
          {comments.map((comment, index) => (
            <li key={index} className="comment-text">
              <p>{comment.text}</p>
              <button
                className="reply-btn"
                onClick={() => handleReplyToComment(index)}
              >
                답글 달기
              </button>

              {replyingToIndex === index && (
                <div className="reply-content">
                  <textarea
                    value={replyText}
                    onChange={handelReplyChange}
                    placeholder="답글을 남겨보세요"
                    rows="3"
                    cols="50"
                    className="textarea-comment"
                  />
                  <button onClick={handleAddReply}>답글 달기</button>
                </div>
              )}

              <div className="reply-box">
                {comment.replies.length > 0 && (
                  <ul>
                    {comment.replies.map((reply, replyIndex) => (
                      <li key={replyIndex}>{reply}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="comment-input-container">
        <textarea
          value={commentText}
          onChange={handleCommentChange}
          placeholder="댓글을 남겨보세요"
          rows="4"
          cols="50"
          className="textarea-comment"
        />
        <button onClick={handleAddComment} className="apply-btn">
          등록
        </button>
      </div>
    </div>
  );
};

export default UserComment;

import React, { useState } from 'react';
import './UserComment.css';
import CommentProfile from './CommentProfile';

const UserComment = ({
  onCommentAdd,
  comments,
  createdUserData,
  authorID,
  currentTime,
}) => {
  const [commentText, setCommentText] = useState(''); //댓글 입력값
  const [replyText, setReplyText] = useState(''); //답글 입력값
  const [replyingToIndex, setReplyingToIndex] = useState(null); //답글 추가할 대상 댓글 관리

  //댓글 입력
  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  //답글 입력
  const handleReplyChange = (e) => {
    setReplyText(e.target.value);
  };

  //댓글 추가
  //trim()으로 문자열의 앞뒤 공백 제거!!
  const handleAddComment = () => {
    if (commentText.trim()) {
      const newComment = {
        text: commentText,
        replies: [],
        userID: createdUserData.userID,
        userName: createdUserData.userName,
        timestamp: currentTime,
      };
      onCommentAdd(newComment);
      setCommentText('');
    }
  };

  //답글 추가
  const handleAddReply = () => {
    if (replyText.trim() && replyingToIndex !== null) {
      const newReply = {
        text: replyText,
        userID: createdUserData.userID,
        userName: createdUserData.userName,
        timestamp: currentTime,
      };
      onCommentAdd(newReply, true, replyingToIndex);
      setReplyText('');
      setReplyingToIndex(null);
    }
  };

  //답글을 달 댓글 선택
  const handleReplyToComment = (index) => {
    setReplyingToIndex(index);
  };

  // const isAuthor = (userID) => userID === authorID;

  return (
    <div>
      {/* 댓글 목록 출력 */}
      <div className="comment-container">
        <ul className="reply-comment">
          {comments &&
            comments.length > 0 &&
            comments.map((comment, index) => (
              <li key={index} className="comment-text">
                <div className="comment-header">
                  <CommentProfile
                    userName={comment.userName}
                    userID={comment.userID}
                    authorID={authorID}
                  />
                  <p>{comment.text}</p>
                  <span className="timestamp">{comment.timestamp}</span>
                </div>

                {/* 답글 입력창 && 등록 버튼 */}
                {replyingToIndex === index ? (
                  <div className="reply-content">
                    <textarea
                      value={replyText}
                      onChange={handleReplyChange}
                      placeholder="답글을 남겨보세요"
                      rows="3"
                      className="textarea-comment"
                    />
                    <button
                      onClick={handleAddReply}
                      className="reply-submit-btn"
                    >
                      등록
                    </button>
                  </div>
                ) : (
                  <button
                    className="reply-toggle-btn"
                    onClick={() => handleReplyToComment(index)}
                  >
                    답글 달기
                  </button>
                )}

                {/* 기존 답글 목록 */}
                <div className="reply-box">
                  {comment.replies.length > 0 && (
                    <ul>
                      {comment.replies.map((reply, replyIndex) => (
                        <li key={replyIndex} className="reply-text">
                          <CommentProfile
                            userName={reply.userName}
                            userID={reply.userID}
                            authorID={authorID}
                          />
                          <p>{reply.text}</p>
                          <span className="timestamp">{reply.timestamp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
        </ul>
      </div>

      {/* 댓글 입력창 */}
      <div className="comment-input-container">
        <textarea
          value={commentText}
          onChange={handleCommentChange}
          placeholder="댓글을 남겨보세요"
          rows="4"
          className="textarea-comment"
        />
        <button onClick={handleAddComment} className="comment-apply-btn">
          등록
        </button>
      </div>
    </div>
  );
};

export default UserComment;

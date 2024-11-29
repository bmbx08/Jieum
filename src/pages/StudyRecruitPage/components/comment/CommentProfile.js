import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './CommentProfile.css';

const CommentProfile = ({ userName, userID, authorID }) => {
  const isAuthor = userID === authorID;

  return (
    <div className="comment-profile">
      <AccountCircleIcon />
      <span className="comment-author">
        {userName}
        {isAuthor && <span className="author-badge">작성자</span>}
      </span>
    </div>
  );
};

export default CommentProfile;

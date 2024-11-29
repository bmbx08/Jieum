import { useEffect } from 'react';
import './PostProfile.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const PostProfile = ({ authorName, currentTime, authorID, setAuthorID }) => {
  useEffect(() => {
    if (authorID) {
      setAuthorID(authorID);
    }
  }, [authorID, setAuthorID]);

  return (
    <div className="post-profile-box">
      <div className="post-profile">
        <div className="profile-icon-container">
          <AccountCircleIcon className="profile-icon" />
        </div>
        <div className="user-info">
          <span className="user-name">{authorName}</span>
          <div className="post-time">{currentTime}</div>
        </div>
      </div>
    </div>
  );
};

export default PostProfile;

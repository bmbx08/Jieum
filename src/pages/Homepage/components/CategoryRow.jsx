import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import "./HomepageComponent.style.css";

const CategoryRow = ({item}) => {
    console.log(item);
  return (
    <div className="study-item">
      <div className="item-badge-section">
        <span className="list-badge-style recruit-badge">모집중</span>
        {item&&item.interestBadgeArray.map((badge) => (
          <span className="list-badge-style">{badge}</span>
        ))}
      </div>

      <div className="study-item-title-section">
        <div className="study-item-subtitle sub-text">#{item&&item.subject}</div>
        <div className="study-item-title">{item&&item.blogPostContent.blogTitle}</div>
      </div>

      <div className="study-item-button-section">
        <FavoriteBorderIcon className="study-item-icon" />
        <div className="icon-number">{item&&item.blogPostContent.likes}</div>
        <ArchiveOutlinedIcon className="study-item-icon" />
        <div className="icon-number">{item&&item.blogPostContent.submissions}</div>
      </div>
    </div>
  );
};

export default CategoryRow;

import React from 'react'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";

const CarouselItem = ({item}) => {
  return (
    <div className='carousel-item-box'>
      <div className='carousel-top-row'>
        <h3 className='carousel-sub-category'>#{item&&item.subCategory}</h3>
        <h5 className='carousel-passion-temp'>작성자 열정 온도: {item&&item.createdUserInfo.passionTemp}°</h5>
      </div>
      <div className='carousel-title-row'>{item&&item.subject}</div>
      <div className='carousel-blog-title'>{item&&item.blogPostContent.blogTitle}</div>
      <div className='carousel-icon-row'>
        <div className='carousel-icon-number'>{item&&item.formattedDate}</div>
        <FavoriteBorderIcon className="carousel-item-icon" />
        <div className="carousel-icon-number">{item&&item.blogPostContent.likes}</div>
        <ArchiveOutlinedIcon className="carousel-item-icon" />
        <div className="carousel-icon-number">{item&&item.blogPostContent.submissions}</div>
      </div>
    </div>
  )
}

export default CarouselItem

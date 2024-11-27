import React from "react";
import CategoryRow from "./CategoryRow";
import { useNavigate } from "react-router-dom";
import "./HomepageComponent.style.css";

const StudyColumn = ({title}) => {
  const navigate=useNavigate();

  const categoryArray = [
    {
      id: 1,
      subject: "파이썬프로그래밍",
      interestBadgeArray: ["#전공", "#컴퓨터공학부", "#파이썬 프로그래밍"],
      blogPostContent: {
        blogTitle: "파이썬 스터디 할 분 모집",
        likes: 15,
        submissions: 10,
      },
      category: "전공",
    },
    {
      id: 2,
      subject: "웹프로그래밍",
      interestBadgeArray: ["#자기개발", "#개발", "#웹프로그래밍"],
      blogPostContent: {
        blogTitle: "웹 개발 스터디 모집",
        likes: 27,
        submissions: 14,
      },
      category: "전공",
    },
    {
      id: 3,
      subject: "인문학",
      interestBadgeArray: ["#자기개발", "#어학", "#인문학"],
      blogPostContent: {
        blogTitle: "인문학 독서 모임",
        likes: 22,
        submissions: 12,
      },
      category: "교양",
    },
    {
      id: 4,
      subject: "기독교세계관",
      interestBadgeArray: ["#교양", "#사랑의 실천", "#기독교세계관"],
      blogPostContent: {
        blogTitle: "자기개발 스터디 모집",
        likes: 10,
        submissions: 2,
      },
      category: "자기개발",
    },
  ];

  return (
    <div className="category-studies-list">
      <div className="category-title-row">
        <div className="category-green-circle"></div>
        <div className="category-title">{title} 모집 글</div>
      </div>

      <div onClick={()=>navigate("/studies")} className="see-more-row">더보기</div>

      <div className="category-items-box">
        {categoryArray.map((item,index) => (
          <CategoryRow item={item} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default StudyColumn;

import React from "react";
import CategoryRow from "./CategoryRow";
import { useNavigate } from "react-router-dom";
import categoryArray from "../../../common/studyExampleArray"
import "./HomepageComponent.style.css";


const StudyColumn = ({title}) => {
  const navigate=useNavigate();

  

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

import React, { useState } from "react";
import BadgeRow from "./components/BadgeRow";
import { dropDownArrayObject } from "../../../../common/arrayObject";
import { useSelector } from "react-redux";

const BadgeOverlay = ({interestBadgeArray,setInterestBadgeArray,toggleOverlay, handleFormSubmit}) => {

  const [checkedMajorCount,setCheckedMajorCount]=useState(0);
  const [checkedElectiveCount,setCheckedElectiveCount]=useState(0);
  const [checkedImproveCount,setCheckedImproveCount]=useState(0);

  const interestBadgeObject = useSelector(state=>state.interestButtonObject)

  return (
    <div className="overlay">
      <div className="overlay-content sub-text">
        <div className="overlay-top-section">
          <h2 className="overlay-title font-bold">
            맞춤형 스터디 추천을 위해 관심있는 태그를 선택해보세요.{" "}
          </h2>
          <h4 className="overlay-subtitle">*중복선택 가능</h4>
        </div>
        <div className="overlay-bottom-section">
            <BadgeRow title="전공" badgeArray={dropDownArrayObject.majorList} interestBadgeArray={interestBadgeArray} setInterestBadgeArray={setInterestBadgeArray} checkedCategoryCount={checkedMajorCount} setCheckedCategoryCount={setCheckedMajorCount}/>
            <BadgeRow title="교양" badgeArray={dropDownArrayObject.electiveList} interestBadgeArray={interestBadgeArray} setInterestBadgeArray={setInterestBadgeArray} checkedCategoryCount={checkedElectiveCount} setCheckedCategoryCount={setCheckedElectiveCount}/>
            <BadgeRow title="자기개발" badgeArray={dropDownArrayObject.selfImproveList} interestBadgeArray={interestBadgeArray} setInterestBadgeArray={setInterestBadgeArray} checkedCategoryCount={checkedImproveCount} setCheckedCategoryCount={setCheckedImproveCount}/>
        </div>
        <div className="overlay-button-section">
          <button onClick={()=>toggleOverlay(false)} className="overlay-button overlay-prev-button">이전</button>
          {checkedMajorCount>=2&&checkedElectiveCount>=2&&checkedImproveCount>=1?(
            <button type="submit" onClick={handleFormSubmit} className="overlay-button overlay-submit-button">완료</button>
          ):(
            <button type="submit" onClick={handleFormSubmit} className="overlay-button overlay-submit-button" disabled>완료</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BadgeOverlay;

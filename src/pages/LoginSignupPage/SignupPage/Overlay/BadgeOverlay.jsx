import React from "react";
import BadgeRow from "./comonents/BadgeRow";
import { dropDownArrayObject } from "../../../../common/arrayObject";

const BadgeOverlay = ({interestBadgeArray,setInterestBadgeArray}) => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="overlay-top-section">
          <h2 className="overlay-title">
            맞춤형 스터디 추천을 위해 관심있는 태극를 선택해보세요.{" "}
          </h2>
          <h4 className="overlay-subtitle">*중복선택 가능</h4>
        </div>
        <div className="overlay-bottom-section">
            <BadgeRow title="전공" badgeArray={dropDownArrayObject.majorList} interestBadgeArray={interestBadgeArray} setInterestBadgeArray={setInterestBadgeArray}/>
            <BadgeRow title="교양" badgeArray={dropDownArrayObject.electiveList} interestBadgeArray={interestBadgeArray} setInterestBadgeArray={setInterestBadgeArray}/>
            <BadgeRow title="자기개발" badgeArray={dropDownArrayObject.selfImproveList} interestBadgeArray={interestBadgeArray} setInterestBadgeArray={setInterestBadgeArray}/>
        </div>
      </div>
    </div>
  );
};

export default BadgeOverlay;

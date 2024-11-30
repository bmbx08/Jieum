import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const BadgeRow = ({title, badgeArray, interestBadgeArray, setInterestBadgeArray, checkedCategoryCount, setCheckedCategoryCount}) => {
  const dispatch=useDispatch();
  

  const handleCheckboxBadge=(event)=>{
    console.log("clicked");
    if(!interestBadgeArray.includes(event.target.value)){
      setInterestBadgeArray((prevValues)=>[...prevValues,event.target.value])
      setCheckedCategoryCount(checkedCategoryCount+1);
      // if(title==="전공")setCheckedMajorCount(checkedMajorCount+1);
      // if(title==="교양")setCheckedElectiveCount(checkedElectiveCount+1)
      // if(title==="자기개발")setCheckedImproveCount(checkedImproveCount+1)
    }
    if(interestBadgeArray.includes(event.target.value)){
      setInterestBadgeArray((prevArray)=> prevArray.filter((badge)=> badge!==event.target.value))
      setCheckedCategoryCount(checkedCategoryCount-1);
      // if(title==="전공")setCheckedMajorCount(checkedMajorCount-1);
      // if(title==="교양")setCheckedElectiveCount(checkedElectiveCount-1);
      // if(title==="자기개발")setCheckedImproveCount(checkedImproveCount-1);
    }
    // dispatch({type:"INTEREST_BUTTON_DATA",payload: {checkedMajorCount,checkedElectiveCount,checkedImproveCount}});   
    console.log(event.target.value);
    // console.log("눌러진 버튼 개수",checkedMajorCount,checkedElectiveCount,checkedImproveCount)  
  }

  return (
    <div className='badge-row'>
      <div className='badge-title font-bold'>{title}</div>
      <div className='badge-section'>
        {badgeArray.map((badge, index)=>(
          <div className='checkbox-wrapper' key={index}>
            <input
              type="checkbox"
              id={badge&&badge} //label과 연결 위해 사용
              value={badge&&badge}
              checked={interestBadgeArray.includes(badge)}
              // checked={selectedCategory&&selectedCategory === `${badge}`}
              onChange={handleCheckboxBadge}
              className="interest-checkbox-input"
              // disabled={checkedRadioCount>=5}
            />
            <label htmlFor={badge&&badge} className={`interest-checkbox-button ${interestBadgeArray.includes(badge)?"checked":""}`}>
              #{badge&&badge}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BadgeRow

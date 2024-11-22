import React, { useState } from 'react'

const BadgeRow = ({title, badgeArray, interestBadgeArray, setInterestBadgeArray}) => {

  // const handleCategoryRadio = (event) => {
  //   setSelectedCategory(event.target.value);
  //   // setShowDropdownTwo(false);
  //   setShowSubjectInput(false);
  //   setShowSelfImproveInput(false);
  //   setSelfImproveSubject("");
  //   setSelectedDropdownOne("");
  //   // setSelectedDropdownTwo("");
  // };

  const [checkedRadioCount,setCheckedRadioCount]=useState(0);

  const handleCheckboxBadge=(event)=>{
    console.log("clicked");
    if(interestBadgeArray.length<=4){
      if(!interestBadgeArray.includes(event.target.value)){
        setInterestBadgeArray((prevValues)=>[...prevValues,event.target.value])
        setCheckedRadioCount(checkedRadioCount+1);
      }
    }
    if(interestBadgeArray.includes(event.target.value)){
      setInterestBadgeArray((prevArray)=> prevArray.filter((badge)=> badge!==event.target.value))
    }

    // setInterestBadgeArray((prev) => {
    //   console.log("Previous state:", prev);
    //   if (!prev) prev = []; // Fallback to an empty array if prev is undefined
    //   return prev.includes(event.target.value)
    //     ? prev.filter((v) => v !== event.target.value) // Remove value if it's already in the array
    //     : [...prev, event.target.value]; // Add value if it's not in the array
    // });
    
    console.log(event.target.value);
    
  }

  return (
    <div className='badge-row'>
      <div className='badge-title'>{title}</div>
      <div className='badge-section'>
        {badgeArray.map((badge)=>(
          <div className='checkbox-wrapper'>
            <input
              type="checkbox"
              id={badge&&badge}
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

{/* <div className="mb-2">
      {dropDownArrayObject.categoryList.map((category)=>(
        <label className={`radio-button ${selectedCategory===category?"active":""}`}>
          <input
            type="radio"
            name="category"
            value={`${category&&category}`}
            checked={selectedCategory&&selectedCategory === `${category}`}
            onChange={handleCategoryRadio&&handleCategoryRadio}
            className="radio-input"
          />
          {category&&category}
        </label>
      ))}
    </div> */}

export default BadgeRow

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

  const handleBadgeCheckbox=(event)=>{
    console.log("clicked");
    if(interestBadgeArray.length<=4){
      if(!interestBadgeArray.includes(event.target.value)){
        setInterestBadgeArray((prevValues)=>[...prevValues,event.target.value])
        setCheckedRadioCount(checkedRadioCount+1);
      }
    }
    if(interestBadgeArray.includes(event.target.value)){
      console.log("clicked button is clicked again")
      setInterestBadgeArray((prevArray)=>{
        prevArray.filter((badge)=>event.target.value!==badge)
      })
    }
    
    console.log(event.target.value);
    
  }

  return (
    <div className='badge-row'>
      <div className='badge-title'>{title}</div>
      <div className='badge-section'>
        {badgeArray.map((badge)=>(
          <>
              <input
                type="checkbox"
                id={badge&&badge}
                value={badge&&badge}
                checked={interestBadgeArray.includes(badge)}
                // checked={selectedCategory&&selectedCategory === `${badge}`}
                onChange={handleBadgeCheckbox}
                className="interest-checkbox-input"
                // disabled={checkedRadioCount>=5}
              />
                <label className={`interest-checkbox-button ${interestBadgeArray.includes(badge)?"checked":""}`}>
                  {badge&&badge}
                </label>
            </>
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

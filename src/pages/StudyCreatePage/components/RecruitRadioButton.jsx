import React from 'react'

const RecruitRadioButton = ({limitlessRecruitBoolean, handleRecruitRadio}) => {

  return (
    <label className='recruit-radio-section recruit-radio-font'>
        <input
            type="radio"
            checked={limitlessRecruitBoolean&&limitlessRecruitBoolean}
            onClick={handleRecruitRadio&&handleRecruitRadio}
            className="recruit-radio"
        />
        제한 없음
    </label>
  )
}

export default RecruitRadioButton

    // <label className={`radio-button ${selectedCategory===category?"active":""}`}>
    //     <input
    //         type="radio"
    //         name="category"
    //         value={`${category&&category}`}
    //         checked={selectedCategory&&selectedCategory === `${category}`}
    //         onChange={handleCategoryRadio&&handleCategoryRadio}
    //         className="radio-input"
    //     />
    //     {category&&category}
    // </label>

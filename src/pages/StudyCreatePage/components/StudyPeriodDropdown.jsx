import React from 'react'

const StudyPeriodDropdown = ({studyPeriod, handleStudyPeriodDropdown, selectedPeriodDropdown}) => {
    const periodArray=[4,8,16,"직접 입력"]

  return (
    <div>
        <select value={selectedPeriodDropdown} onChange={handleStudyPeriodDropdown} className='custom-dropdown me-2'>
            <option value="" disabled>
                기간 선택
            </option>
            {periodArray.map((length)=>{
                if(length==="직접 입력"){
                    return <option value={length}>{length}</option>
                } else{
                    return <option value={length}>{length}주</option>
                }
            })}
        </select>
    </div>
  )
}

export default StudyPeriodDropdown

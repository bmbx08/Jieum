import React from 'react'
import { dropDownArrayObject } from '../../../../common/arrayObject';

const MajorDropdown = ({selectedMajor, setSelectedMajor}) => {

  const handleMajorDropdown=(event)=>{
    setSelectedMajor(event.target.value);
  }

  return (
    <div>
        <h4 className='signup-input-title'>학부</h4>
        <select value={selectedMajor} onChange={handleMajorDropdown} className='major-dropdown-style'>
            <option value="" disabled>
                소속 학부를 선택해주세요
            </option>
            {dropDownArrayObject.majorList.map((major)=>(
                <option key={major} value={major}>
                    {major}
                </option>
            ))}
        </select>
    </div>
  )
}

export default MajorDropdown

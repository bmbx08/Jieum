import React from 'react'

const MajorDropdown = ({selectedMajor, setSelectedMajor}) => {

  const majorList=["컴퓨터공학부", "첨단IT학부", "기독교학부", "어문학부", "사회복지학부", "경찰학부", "경상학부", "관광학부", "사범학부",  "보건학부", "간호학부", "디자인영상학부", "스포츠과학부", "문화예술학부", "혁신융합학부", "외식산업학부"];

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
            {majorList.map((major)=>(
                <option key={major} value={major}>
                    {major}
                </option>
            ))}
        </select>
    </div>
  )
}

export default MajorDropdown

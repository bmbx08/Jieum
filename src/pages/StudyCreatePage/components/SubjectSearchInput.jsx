import React from 'react'

const SubjectSearchInput = ({handleSubjectInput}) => {
  return (
    <div className='mb-2'>
      <input placeholder='과목 입력' className='subject-input' onChange={handleSubjectInput}/>
    </div>
  )
}

export default SubjectSearchInput

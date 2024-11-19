import React from 'react'

const StudyTable = ({studyPeriod}) => {
  return (
    <div className="table-section">
      {Array.from({length:studyPeriod}).map((week,index)=>(
        <span className='table-row'>
          <div>{index+1}주차 : </div>
          <input className='week-content-input' placeholder="내용을 입력하세요"/>
        </span>
      ))}
    </div>
  )
}

export default StudyTable

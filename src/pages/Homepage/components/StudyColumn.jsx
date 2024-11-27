import React from 'react'
import "./StudyColumn.style.css"

const StudyColumn = ({title}) => {
  return (
    <div className='category-studies-list'>
        <div className='category-title-row'>
            <div className='category-green-circle'></div>
            <div className='category-title'>{title} 모집 글</div>
        </div>
        
        <div className="see-more-row">
          더 보기
        </div>
        <div className></div>
    </div>
  )
}

export default StudyColumn

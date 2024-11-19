import React from 'react'

const BadgeGroup = ({selectedCategory, selectedDropdownOne, selfImproveSubject, subjectInputContent}) => {
  return (
    <div className='badge-section'>
      {selectedCategory&&(<span className='interest-badge'>{selectedCategory}</span>)}
      {selectedDropdownOne&&(<span className='interest-badge'>{selectedDropdownOne}</span>)}
      {/* {selectedDropdownTwo&&(<span className='interest-badge'>{selectedDropdownTwo}</span>)} */}
      {selfImproveSubject&&(<span className='interest-badge'>{selfImproveSubject}</span>)}
      {subjectInputContent&&(<span className='interest-badge'>{subjectInputContent}</span>)}
    </div>
  )
}

export default BadgeGroup

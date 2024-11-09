import React from 'react'

const BadgeGroup = ({selectedCategory, selectedDropdownOne, selectedDropdownTwo, selfImproveSubject}) => {
  return (
    <div>
      {selectedCategory&&(<span className='interest-badge'>{selectedCategory}</span>)}
      {selectedDropdownOne&&(<span className='interest-badge'>{selectedDropdownOne}</span>)}
      {selectedDropdownTwo&&(<span className='interest-badge'>{selectedDropdownTwo}</span>)}
      {selfImproveSubject&&(<span className='interest-badge'>{selfImproveSubject}</span>)}

    </div>
  )
}

export default BadgeGroup

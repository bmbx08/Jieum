import React from 'react'

const SubjectSearchInput = () => {
  return (
    <div>
      <input/>
      <ul
          style={{
            width: '10em', // input과 동일한 너비 설정
            listStyleType: 'none',
            padding: 0,
            margin: 0,
            border: '1px solid #ccc',
            maxHeight: '150px',
            overflowY: 'auto',
            backgroundColor: 'white'
          }}
        >
            <li
              style={{
                padding: '10px',
                cursor: 'pointer',
                borderBottom: '1px solid #eee'
              }}
            >
                asdf
            </li>
        </ul>
    </div>
  )
}

export default SubjectSearchInput

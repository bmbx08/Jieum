import React from 'react'

const StudyTable = ({studyPeriod}) => {
  return (
    <table className='tablee'>
      <thead>
        <tr>
            <th>주차</th>
            <th>내용</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td></td>
            <td></td>
        </tr>
        {/* {for (let i=0;i<=studyPeriod;i++)(
            <tr>
            <td></td>
            </tr>
        )} */}
        
      </tbody>
    </table>
  )
}

export default StudyTable

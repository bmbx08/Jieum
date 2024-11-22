import React from 'react'
import SideBar from './default/SideBar'
import Check from './components/Check'

const StudyRecruitPage = () => {
  return (
    <div className="app-container">
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="main-container">
        <Check />
      </div>
    </div>
  )
}

export default StudyRecruitPage
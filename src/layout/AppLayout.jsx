import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      navbar
      <Outlet/> {/*네브바 고정 위해 필요*/}
    </div>
  )
}

export default AppLayout

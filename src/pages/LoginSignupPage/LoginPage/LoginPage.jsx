import React from 'react'
import "./LoginPage.style.css"

const LoginPage = ({authentication,setAuthentication}) => {
  console.log(authentication);
  return (
    <div className='testtest'>
      LoginPage
      <button onClick={()=>setAuthentication(!authentication)}>{authentication?"로그아웃":"로그인"}</button>
    </div>
  )
}

export default LoginPage

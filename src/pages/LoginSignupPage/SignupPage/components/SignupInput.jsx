import React from 'react'

const SignupInput = ({title,placeholder, type}) => {
  return (
    <div className='signup-input-section'>
      <h4 className="signup-input-title">{title}</h4>
      <input type={type} placeholder={placeholder} className='signup-input-style'/>
      {title==="비밀번호"?( 
        <input className='signup-input-style' placeholder="비밀번호 확인"/>
      ):""}
    </div>
  )
}

export default SignupInput

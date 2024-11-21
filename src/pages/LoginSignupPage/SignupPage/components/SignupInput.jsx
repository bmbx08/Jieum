import React from 'react'

const SignupInput = ({title,setData,placeholder,type,width}) => {
  return (
    <div className='signup-input-section'>
      <h4 className="signup-input-title">{title}</h4>
      <input onChange={(event)=>setData(event.target.value)} type={type} placeholder={placeholder} className={`signup-input-style ${width}`}/>
      {title==="비밀번호"?( 
        <input className='signup-input-style' placeholder="비밀번호 확인"/>
      ):""}
    </div>
  )
}

export default SignupInput

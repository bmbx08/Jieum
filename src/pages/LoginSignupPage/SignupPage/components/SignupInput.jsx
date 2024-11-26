import React from 'react'

const SignupInput = ({title,setData,placeholder,type,width}) => {
  return (
    <div className='signup-input-section'>
      <div className='flex-style'>
        <h4 className="signup-input-title">{title}</h4>
        {title==="각오의 한 마디"?<div className='signup-input-subtitle sub-text'>*스터디 신청시 스터디 장에게 제출됩니다.</div>:""}
      </div>
      
      <input onChange={(event)=>setData(event.target.value)} type={type} placeholder={placeholder} className={`signup-input-style ${width}`}/>
      {title==="비밀번호"?( 
        <input className='signup-input-style' type={type} placeholder="비밀번호 확인"/>
      ):""}
    </div>
  )
}

export default SignupInput

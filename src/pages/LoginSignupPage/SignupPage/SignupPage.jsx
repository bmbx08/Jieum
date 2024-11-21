import React, { useState } from "react";
import './SignupPage.css';
import FirstPage from "./FirstPage/FirstPage";
import SignupInput from "./components/SignupInput";
import MajorDropdown from "./components/MajorDropdown";

const SignupPage = () => {
  const [page, setPage]= useState(1);

  
  
  return (
    <div className="signup-page justify-middle">
      {/* <FirstPage/> */}
      <form>
        <h2 className="signup-form-title">백석 지음(知音) 회원가입</h2>
        <div className="signup-container">
          <SignupInput title="이름" placeholder="이름을 작성해주세요"/>
          <SignupInput title="핸드폰 번호" type="number" placeholder="하이픈(-) 없이 핸드폰 번호를 입력해주세요."/>
          <SignupInput title="아이디" placeholder="아이디를 작성해주세요"/>
          <SignupInput title="비밀번호" type="password" placeholder="비밀번호를 작성해주세요"/>
          <MajorDropdown/>
          <SignupInput title="학번" type="number" placeholder="학번(숫자)를 입력해주세요. ex)24"/>
          <SignupInput title="각오의 한 마디" type="number" placeholder="간단하게 각오의 말을 작성해주세요."/>
        </div>

      </form>
      
      <button onClick={()=>setPage(2)}>다음</button>
    </div>
  );
};

export default SignupPage;

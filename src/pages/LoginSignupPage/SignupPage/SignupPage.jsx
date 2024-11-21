import React, { useState } from "react";
import './SignupPage.css';
import FirstPage from "./FirstPage/FirstPage";
import SignupInput from "./components/SignupInput";
import MajorDropdown from "./components/MajorDropdown";

const SignupPage = () => {
  const [userName, setUserName]=useState("");
  const [userPhoneNum, setUserPhoneNum]=useState("");
  const [userID,setUserID]=useState("")
  const [userPassword,setUserPassword]=useState("");
  const [selectedMajor, setSelectedMajor]= useState("");
  const [studentNum, setStudentNum]=useState("");
  const [userAppealPhrase,setUserAppealPhrase] = useState("");

  const [page, setPage]= useState(1);

  
  
  return (
    <div className="signup-page justify-middle">
      {/* <FirstPage/> */}
      <form>
        <h2 className="signup-form-title">백석 지음(知音) 회원가입</h2>
        <div className="signup-container">
          <SignupInput title="이름" setData={setUserName} placeholder="이름을 작성해주세요"/>
          <SignupInput title="핸드폰 번호" setData={setUserPhoneNum} type="number" placeholder="하이픈(-) 없이 핸드폰 번호를 입력해주세요."/>
          <SignupInput title="아이디" setData={setUserID} placeholder="아이디를 작성해주세요"/>
          <SignupInput title="비밀번호" setData={setUserPassword} type="password" placeholder="비밀번호를 작성해주세요"/>
          <MajorDropdown selectedMajor={selectedMajor} setSelectedMajor={setSelectedMajor}/>
          <SignupInput title="학번" setData={setStudentNum} type="number" placeholder="학번(숫자)를 입력해주세요. ex)24" width="half-width"/>
          <SignupInput title="각오의 한 마디" setData={setUserAppealPhrase} placeholder="간단하게 각오의 말을 작성해주세요."/>
        </div>
      
        <div className="navigate-section">
          <button onClick={()=>setPage(2)} className="navigate-button">다음</button>
        </div>
        
      </form>
    </div>
  );
};

export default SignupPage;

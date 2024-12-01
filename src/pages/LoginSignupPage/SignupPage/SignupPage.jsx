import React, { useEffect, useState } from "react";
import FirstPage from "./OldPage/FirstPage";
import SignupInput from "./components/SignupInput";
import MajorDropdown from "./components/MajorDropdown";
import BadgeOverlay from "./Overlay/BadgeOverlay";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './SignupPage.style.css';


const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();

  const [userName, setUserName]=useState("");
  const [userPhoneNum, setUserPhoneNum]=useState("");
  const [userID,setUserID]=useState("")
  const [userPassword,setUserPassword]=useState("");
  const [selectedMajor, setSelectedMajor]= useState("");
  const [studentNum, setStudentNum]=useState("");
  const [userAppealPhrase,setUserAppealPhrase] = useState("");
  const [showOverlay,setShowOverlay] = useState(false);
  const [interestBadgeArray,setInterestBadgeArray]=useState([]);

  const toggleOverlay=()=>{
    setShowOverlay(!showOverlay);
  }

  const handleFormSubmit=(event)=>{
    event.preventDefault();
    console.log("submit data!!");
    const createdUserData={
      UniqueID: (Math.floor(Date.now()/1000).toString()),
      userInfo:{
        userName,
        userPhoneNum,
        userID,
        userPassword,
        studentNum,
        userAppealPhrase,
        passionTemp:35,
      },
      recommendInfo:{
        interestBadgeArray,
      },
      characterInfo:{
        level: 1,
        barPercent: 0,
      },
    }
    console.log("유저 정보!",createdUserData);
    dispatch({type:"CREATE_USERDATA",payload: {userData:createdUserData}});   
    alert("회원가입이 완료되었습니다.");
    navigate("/login")
    //회원가입 완료! 알람 띄우기
    //로그인 페이지로 이동
  }
  
  useEffect(()=>{
    if("interest Array",interestBadgeArray) console.log(interestBadgeArray);
  },[interestBadgeArray])

  return (
    <div className="signup-page justify-middle">
      {/* <FirstPage/> */}
      <form onSubmit={handleFormSubmit}>
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
          <button type="button" onClick={toggleOverlay} className="navigate-button">다음</button>
        </div>
        
        {showOverlay?(
          <BadgeOverlay interestBadgeArray={interestBadgeArray} setInterestBadgeArray={setInterestBadgeArray} toggleOverlay={toggleOverlay} handleFormSubmit={handleFormSubmit}/>
        ):""}

      </form>
    </div>
  );
};

export default SignupPage;

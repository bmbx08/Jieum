import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import pic1 from './img/emoji.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.style.css';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const LoginPage = ({setAuthentication}) => {
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const userDataArray=useSelector((state)=>state.userDataArray)

  const [userInputID,setUserInputID]= useState();
  const [userInputPassword, setUserInputPassword]=useState();

  const handleLogin=(e)=>{
    e.preventDefault();
    // console.log(userDataArray);
    try{
      let matchedData=userDataArray.find((data)=>{
        return (data.userInfo.userID===userInputID && data.userInfo.userPassword===userInputPassword)
      })
      if(matchedData===undefined){
        throw new Error("아이디 또는 비밀번호가 잘못 되었습니다.")
      } else{
        setAuthentication(true);
        dispatch({type:"LOGIN_USER",payload:{matchedData}})
        // alert("로그인 완료");
        navigate("/");
      }
    } catch(error){
      alert(error.message);
    }    
  }

  return (
    <div className="display-center">
      <div className="login-container">
        <div className="emoji-area">
          <img src={pic1} alt="jieum-emoji" className="jieum-emoji" />
          <div className="emoji-text-area">
            <h6 className="emoji-text1">스터디의 시작,</h6>
            <h4 className="emoji-text2">백석지음[知音]</h4>
          </div>
        </div>
        <div className="login-area">
          <Form className="login-box" onSubmit={handleLogin}>
            <h2 className="login-box-header">백석 지음[知音]</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="아이디" onChange={(e)=>setUserInputID(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="비밀번호" onChange={(e)=>setUserInputPassword(e.target.value)}/>
            </Form.Group>
            <div className="button-box">
              <Button type="submit" className="login-button">
                로그인
              </Button>
              <div className="register-link">
                <a className="goToRegister" onClick={()=>navigate("/signup")}>
                  회원가입
                </a>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

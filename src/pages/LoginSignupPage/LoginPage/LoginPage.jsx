import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import pic1 from './img/emoji.png'
import './LoginPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const LoginPage = () => {
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
          <Form className="login-box">
            <h2 className="login-box-header">백석 지음[知音]</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="아이디" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="비밀번호" />
            </Form.Group>
            <div className="button-box">
              <Button type="submit" className="login-button">
                로그인
              </Button>
              <div className="register-link">
                <a href="/signup" className="goToRegister">
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

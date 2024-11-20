import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignupPage.css';

const SignupPage = () => {
  const [page, setPage]= useState(1);

  
  
  return (
    <div className="display-center">
      <h2 className="register-header">백석지음[知音] 회원가입</h2>
      <div className="register-container">
        <div className="register-area">
          <Form className="register-box">
            <Form.Group className="mb-4" controlId="formName">
              <Form.Label>이름</Form.Label>
              <Form.Control type="string" placeholder="이름을 작성해주세요." />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicId">
              <Form.Label>아이디</Form.Label>
              <Form.Control type="id" placeholder="아이디를 작성해주세요." />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                type="password"
                placeholder="비밀번호를 작성해주세요."
              />
              <Form.Control
                type="password"
                placeholder="비밀번호 확인"
                className="password-check"
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label htmlFor="disabledSelect">학부</Form.Label>
              <Form.Select
                id="disabledSelect"
                placeholder="소속 학부를 선택해주세요."
              >
                <option>컴퓨터공학부</option>
                <option>첨단IT학부</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicNumber">
              <Form.Label>학번</Form.Label>
              <Form.Control
                type="string"
                placeholder="학번(숫자)를 입력해주세요. ex)20224234"
              />
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

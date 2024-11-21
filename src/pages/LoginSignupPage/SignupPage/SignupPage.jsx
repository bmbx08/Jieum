import React, { useState } from "react";
import './SignupPage.css';
import FirstPage from "./components/FirstPage";

const SignupPage = () => {
  const [page, setPage]= useState(1);

  
  
  return (
    <div>
      <FirstPage/>
    
    <button onClick={()=>setPage(2)}>다음</button>
    </div>
  );
};

export default SignupPage;

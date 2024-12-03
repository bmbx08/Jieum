import {Route, Routes} from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import AppLayout from "./layout/AppLayout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import LoginPage from "./pages/LoginSignupPage/LoginPage/LoginPage";
import SignupPage from "./pages/LoginSignupPage/SignupPage/SignupPage";
import StudyCreatePage from "./pages/StudyCreatePage/StudyCreatePage";
import MyStudyPage from "./pages/MyStudyPage/MyStudyPage";
import StudyInfoPage from "./pages/StudyInfoPage/StudyInfoPage";
import StudyRecruitPage from "./pages/StudyRecruitPage/StudyRecruitPage";
import MyInfoPage from "./pages/MyInfoPage/MyInfoPage";
import AllStudiesPage from "./pages/AllStudiesPage/AllStudiesPage";
import DifferentLayout from "./layout/DifferentLayout";
import { useState } from "react";
import MyDetailPage from "./pages/MyInfoPage/MyDetailPage.jsx/MyDetailPage";

function App() {
  const [authentication,setAuthentication]=useState(false);
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout authentication={authentication} setAuthentication={setAuthentication}/>}> {/*네브바*/}
          <Route index element={<Homepage authentication={authentication}/>} />
          <Route path="studies">
            <Route index element={<AllStudiesPage/>}/>
            <Route path=":id" element={<StudyRecruitPage/>}/> {/*스터디 모집 페이지(글쓰기)*/}
          </Route>
          <Route path ="mystudy">
            <Route index element={<MyStudyPage/>}/> {/*내 스터디 페이지*/}
            <Route path=":id" element={<StudyInfoPage/>}/> {/*스터디 상세 페이지*/}
          </Route>
          
          <Route path="login" element={<LoginPage authentication={authentication} setAuthentication={setAuthentication}/>}/>
          <Route path="signup" element={<SignupPage/>}/>
          <Route path="myinfo">
            <Route index element={<MyInfoPage/>}/>
            <Route path="details" element={<MyDetailPage/>}/>
          </Route>
        </Route>
        
        <Route path ="/newstudy" element={<><DifferentLayout/><StudyCreatePage/></>}/> {/*스터디 생성 페이지*/}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
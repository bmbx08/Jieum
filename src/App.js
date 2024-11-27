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
import StudyAdminPage from "./pages/StudyAdminPage/StudyAdminPage";
import EditPlanPage from "./pages/EditPlanPage/EditPlanPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}> {/*네브바*/}
          <Route index element={<Homepage />} />
          <Route path="studies">
            <Route index element={<AllStudiesPage/>}/>
            <Route path=":id" element={<StudyRecruitPage/>}/> {/*스터디 모집 페이지(글쓰기)*/}
          </Route>
          <Route path ="mystudy">
            <Route index element={<MyStudyPage/>}/> {/*내 스터디 페이지*/}
            <Route path=":id" element={<StudyInfoPage/>}/> {/*스터디 상세 페이지*/}
          </Route>
          <Route path ="newstudy" element={<StudyCreatePage/>}/> {/*스터디 생성 페이지*/}
          <Route path="login" element={<LoginPage/>}/>
          <Route path="signup" element={<SignupPage/>}/>
          <Route path="myinfo" element={<MyInfoPage/>}/>
          <Route path="studyAdmin" element={<StudyAdminPage/>}/>
          <Route path="studyAdmin/edit/:week" element={<EditPlanPage/>} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

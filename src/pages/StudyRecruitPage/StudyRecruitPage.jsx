import './StudyRecruitPage.style.css';
import Check from './components/Check';
//Material UI 아이콘 설치 npm install @mui/icons-material
import SideBar from '../../default/SideBar';

function StudyRecruitPage() {
  return (
    <div className="app-container">
      <div className="sidebar-container">
        <SideBar />
      </div>
      <div className="main-container">
        <Check />
      </div>
    </div>
  );
}

export default StudyRecruitPage;

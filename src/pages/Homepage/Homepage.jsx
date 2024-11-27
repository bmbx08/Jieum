import React from "react";
import "./Homepage.style.css";
import TopImage from "./components/TopImage";
import StudyColumn from "./components/StudyColumn";
import CharacterSection from "./components/CharacterSection";
import StudyNote from "./components/StudyNote/StudyNote";

const Homepage = ({authentication}) => {
  

  return (
    <div className="study-homepage">
      <div className="upper-image-section">
        {authentication?(
          <>
            <CharacterSection/>
            <StudyNote/>
          </>
        ):(
          <TopImage/>   
        )}
      </div>

      <div className="recommended-studies-section"></div>

      <div className="category-studies-section">
        <StudyColumn title="인기"/>
        <StudyColumn title="최근"/>
      </div>
    </div>
  );
};

export default Homepage;

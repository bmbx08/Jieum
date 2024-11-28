import React from "react";
import "./Homepage.style.css";
import TopImage from "./components/TopImage";
import StudyColumn from "./components/StudyColumn";
import CharacterSection from "./components/CharacterSection";
import StudyNote from "./components/StudyNote/StudyNote";
import StudyCarousel from "./components/Carousel/StudyCarousel";

const Homepage = ({authentication}) => {
  return (
    <div className="study-homepage">
      {authentication ? (
        <>
          <div className="upper-image-section">
            <CharacterSection />
            <StudyNote />
          </div>
          <div className="study-carousel-section">
            <StudyCarousel/>
          </div>
        </>
      ) : (
        <TopImage />
      )}

      <div className="recommended-studies-section"></div>

      <div className="category-studies-section">
        <StudyColumn title="인기" />
        <StudyColumn title="최근" />
      </div>
    </div>
  );
};

export default Homepage;

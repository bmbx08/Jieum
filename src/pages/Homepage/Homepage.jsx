import React from 'react';
import './Homepage.style.css';
import TopImage from './components/TopImage';
import StudyColumn from './components/StudyColumn';

const Homepage = () => {
  return (
    <div className='study-homepage'>
      <TopImage/>
      
      <div className='recommended-studies-section'>

      </div>
      <div className='category-studies-section'>
        <StudyColumn title="인기"/>
        {/* <StudyColumn title="최근"/> */}
      </div>
    </div>
  );
};

export default Homepage;

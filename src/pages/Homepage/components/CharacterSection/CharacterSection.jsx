import React, { useEffect, useState } from 'react'
import BeauryGrow from './BeauryGrow';
import CharInfoBox from './CharInfoBox';
import CharProgressBar from './CharProgressBar';
import "../HomepageComponent.style.css";
import { useSelector } from 'react-redux';

const CharacterSection = () => {
  const currentUserData = useSelector((state)=>state.currentUserData);

  const [charLevel,setCharLevel]=useState(1);
  const [barPercent,setBarPercent]=useState(80);
  const [showLevelUpText,setShowLevelUpText]=useState(false);

  useEffect(()=>{
    if(barPercent>=100){
      setShowLevelUpText(true);
      setTimeout(() => setShowLevelUpText(false), 1200); 
      setCharLevel(charLevel+1);
      setBarPercent(barPercent-100);
    }
  },[barPercent])

  return (
    <div className='top-left-box'>
      <div className='character-image-box'>
        <CharInfoBox level={currentUserData.characterInfo.level}/>
        <BeauryGrow level={currentUserData.characterInfo.level} showLevelUpText={showLevelUpText}/>
        <CharProgressBar barPercent={currentUserData.characterInfo.barPercent}/>
      </div>
      {/* <button onClick={()=>setBarPercent(barPercent+10)}>Weekly Schedule Finish</button>
      <button onClick={()=>setBarPercent(barPercent+30)}>Entire Study Finish</button> */}
    </div>
  )
}

export default CharacterSection

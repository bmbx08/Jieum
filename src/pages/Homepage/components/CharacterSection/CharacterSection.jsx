import React, { useEffect, useState } from 'react'
import "../HomepageComponent.style.css";
import BeauryGrow from './BeauryGrow';
import CharInfoBox from './CharInfoBox';
import CharProgressBar from './CharProgressBar';

const CharacterSection = () => {
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
        <CharInfoBox level={charLevel}/>
        <BeauryGrow level={charLevel} showLevelUpText={showLevelUpText}/>
        <CharProgressBar barPercent={barPercent} setCharLevel={setCharLevel}/>
      </div>
      {/* <button onClick={()=>setBarPercent(barPercent+10)}>Weekly Schedule Finish</button>
      <button onClick={()=>setBarPercent(barPercent+30)}>Entire Study Finish</button> */}
    </div>
  )
}

export default CharacterSection

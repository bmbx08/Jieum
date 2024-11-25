import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const sliderStyle = {
  width: 400,
  // margin: 50,
};

const marks = {
  2: "2",
  4: "4",
  8: "8",
  16: "16",
};

const RecruitSlider = ({setRecruitNumber, limitlessRecruitBoolean}) => {

  const handleSliderValue=(value)=>{
    setRecruitNumber(value);
  }

  return (
    <div style={{margin: 20}}>
      {limitlessRecruitBoolean?(
        <Slider
        disabled
        style={sliderStyle}
        min={2}
        max={16}
        defaultValue={4}
        marks={marks}
        onChange={handleSliderValue}
      />
      )
      :
      (
        <Slider
        style={sliderStyle}
        min={2}
        max={16}
        defaultValue={4}
        marks={marks}
        dotStyle={{borderColor: "rgba(160,165,75,255)"}}
        activeDotStyle={{borderColor: "rgba(141,148,41,255)"}}
        railStyle={{backgroundColor: "rgba(218,222,170,255)"}}
        trackStyle={{backgroundColor: "rgba(141,148,41,255)"}}
        onChange={handleSliderValue}
      />
      )}
      
    </div>
  );
};

export default RecruitSlider;

// 'rgba(218,222,170,255)'
// "rgba(141,148,41,255)"
// 180,185,105,255

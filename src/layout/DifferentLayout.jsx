import React from 'react'
import "./DifferentLayout.style.css";
import { useNavigate } from 'react-router-dom';

const DifferentLayout = () => {
    const navigate=useNavigate();
  return (
    <div>
      <div className="top-navbar">
        <div className="site-title-section different-layout-title" onClick={()=>navigate("/")}>백석 지음(知音)</div>
      </div>
    </div>
  )
}

export default DifferentLayout

import React, { useState } from 'react';
// npm install sweetalert2
import Swal from 'sweetalert2';
import './StudyApply.css';

const StudyApply = ({ onApplicantAdd, userName }) => {
  const handleApply = () => {
    if (!userName) {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: `${userName}님이 신청되었습니다.`,
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    const newApplicant = {
      name: userName,
      timestamp: new Date().toLocaleString(),
    };

    onApplicantAdd(newApplicant);
  };

  return (
    <div className="study-recruit-button-box">
      <button className="apply-button" onClick={handleApply}>
        신청하기
      </button>
    </div>
  );
};

export default StudyApply;

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './StudyApply.css';

const StudyApply = ({ onApplicantAdd, userName }) => {
  const handleApply = () => {
    if (!userName) {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: '신청되었습니다',
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    const newApplicant = {
      name: userName,
      timestapm: new Date().toLocaleString(),
    };

    onApplicantAdd(newApplicant);

    Swal.fire({
      position: 'top',
      icon: 'success',
      title: `#{userName}님이 신청되었습니다.`,
      showConfirmButton: false,
      timer: 1500,
    });
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

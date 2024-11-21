import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './StudyApply.css';

const StudyApply = ({ onApplicantAdd, userName }) => {
  const [applicants, setApplicants] = useState([]); //신청자 목록 상태 관리

  const handleApply = () => {
    const newApplicant = {
      name: { userName },
      timestamp: new Date().toLocaleString(),
    };

    setApplicants((prevApplicants) => {
      const updatedApplicants = [...prevApplicants, newApplicant];
      onApplicantAdd(updatedApplicants);
      return updatedApplicants;
    });

    Swal.fire({
      position: 'top',
      icon: 'success',
      title: '신청되었습니다',
      showConfirmButton: false,
      timer: 1500,
    });

    console.log('현재 신청자 목록:', [...applicants, newApplicant]);
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

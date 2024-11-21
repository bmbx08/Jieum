import React, { useState } from 'react';
import Swal from 'sweetalert2';

const StudyApply = ({ onApplicantAdd, userName }) => {
  const [applicants, setApplicants] = useState([]); //신청자 목록 상태 관리

  const handleApply = () => {
    const newApplicant = {
      name: { userName },
      timestamp: new Date().toLocaleString(), //신청시간 기록
    };

    //상태 업데이트
    setApplicants((prevApplicants) => {
      const updatedApplicants = [...prevApplicants, newApplicant];
      onApplicantAdd(updatedApplicants); //부모 컴포넌트에 업데이트 알림
      return updatedApplicants;
    });

    //알림
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: '신청되었습니다',
      showConfirmButton: false,
      timer: 1500,
    });

    console.log('현재 신청자 목록:', [...applicants, newApplicant]);
  };

  return (
    <div className="button-box">
      <button className="apply-button" onClick={handleApply}>
        신청하기
      </button>
    </div>
  );
};

export default StudyApply;

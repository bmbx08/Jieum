import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

// 값 props로 받기
function UserTemp({ temperature }) {
  return (
    <div className="user-temp-bar">
      <ProgressBar
        variant="success"
        now={temperature}
        label={`${temperature}°C`}
      />
    </div>
  );
}

export default UserTemp;

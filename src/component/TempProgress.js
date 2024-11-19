import React, { useState } from 'react';
import UserTemp from './UserTemp';

const TempProgress = () => {
  const [userTemperature, setUserTemperature] = useState(60);
  return (
    <div className="user-temp">
      <p>매너 온도</p>
      <UserTemp temperature={userTemperature} />
    </div>
  );
};

export default TempProgress;

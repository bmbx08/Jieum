import React from 'react';
import './UserInfoBox.css';

const UserInfoBox = ({ userInfo, fields, onEdit }) => {
  return (
    <div className="userInfo-box">
      {fields.map((field) => (
        <p key={field.name}>
          <strong>{field.label}</strong>
          {userInfo[field.name]}
        </p>
      ))}
      <button onClick={onEdit} className="info-edit-btn">
        수정
      </button>
    </div>
  );
};

export default UserInfoBox;

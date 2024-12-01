import React from 'react';
import './UserInfoEdit.css';

const UserInfoEdit = ({ userInfo, fields, onChange, onSave, onCancel }) => {
  return (
    <div>
      <h3 className="user-info-title">내 정보 수정</h3>
      <div className="userInfo-edit-box">
        {fields
          .filter((field) => field.name !== 'interestBadgeArray')
          .map((field) => (
            <div key={field.name} className="userInfo-edit">
              <label>
                {field.label}
                <input
                  className="userInfo-edit-input"
                  type={field.name === 'userPassword' ? 'password' : 'text'}
                  name={field.name}
                  value={
                    Array.isArray(userInfo[field.name])
                      ? userInfo[field.name].join(',')
                      : userInfo[field.name]
                  }
                  onChange={onChange}
                />
              </label>
            </div>
          ))}
        <div className="userInfo-edit-btn">
          <button onClick={onSave}>저장</button>
          <button onClick={onCancel}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default UserInfoEdit;

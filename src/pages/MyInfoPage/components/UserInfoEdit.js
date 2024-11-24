import React from 'react';

const UserInfoEdit = ({ userInfo, fields, onChange, onSave, onCancel }) => {
  return (
    <div>
      <h2>정보 수정</h2>
      {fields.map((field) => (
        <div key={field.name}>
          <label>
            {field.label}:
            <input
              type={field.name === 'password' ? 'password' : 'text'}
              name={field.name}
              value={userInfo[field.name]}
              onChange={onChange}
            />
          </label>
        </div>
      ))}
      <button onClick={onSave}>저장</button>
      <button onClick={onCancel}>취소</button>
    </div>
  );
};

export default UserInfoEdit;

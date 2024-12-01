import React from 'react';
import './UserInfoEdit.css';

const UserInfoEdit = ({
  userInfo,
  fields,
  onChange,
  onSave,
  onCancel,
  onPasswordChange,
}) => {
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
                {field.name === 'userPassword' ? (
                  <div className="password-edit">
                    <input
                      className="userInfo-edit-input"
                      type="password"
                      name={field.name}
                      value={'•'.repeat(8)}
                      readOnly
                    />
                    <button
                      className="password-change-btn"
                      onClick={() => {
                        const currentPassword =
                          prompt('현재 비밀번호를 입력하세요.');
                        if (!currentPassword) return;

                        const newPassword = prompt('새 비밀번호를 입력하세요.');
                        if (!newPassword) return;

                        const confirmPassword =
                          prompt('새 비밀번호를 다시 입력하세요.');
                        if (newPassword !== confirmPassword) {
                          alert('새 비밀번호가 일치하지 않습니다.');
                          return;
                        }

                        onPasswordChange(currentPassword, newPassword);
                        alert('비밀번호가 변경되었습니다.');
                      }}
                    >
                      변경
                    </button>
                  </div>
                ) : (
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
                )}
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

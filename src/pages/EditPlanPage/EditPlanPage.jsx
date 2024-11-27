import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditPlanPage.css";

const EditPlanPage = () => {
  const { week } = useParams(); // URL에서 주차 정보를 가져옴
  const navigate = useNavigate();
  const [plan, setPlan] = useState("");
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    alert("등록되었습니다.");
    navigate("/"); // 등록 후 메인 페이지로 이동
  };

  return (
    <div className="edit-plan-page">
      <h2>웹프로그래밍</h2>
      <h3>{`${week}주차`}</h3>
      <textarea
        placeholder="구체적인 계획을 작성해주세요."
        value={plan}
        onChange={(e) => setPlan(e.target.value)}
      />
      <div className="task-section">
        <label htmlFor="task">과제:</label>
        <input
          id="task"
          type="text"
          placeholder="텍스트를 작성해주세요"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <button className="submit-btn" onClick={handleSubmit}>
        등록
      </button>
    </div>
  );
};

export default EditPlanPage;

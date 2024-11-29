import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../EditPlanPage/EditPlanPage.css";

const EditPlanPage = () => {
  const { week } = useParams(); // URL에서 주차 정보를 가져옴
  const navigate = useNavigate();
  const [plan, setPlan] = useState("");
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    // 줄 단위로 계획을 배열 형태로 변환
    const plansArray = plan
      .split("\n") // 줄바꿈 기준으로 나누기
      .map((line) => line.trim()) // 각 줄의 공백 제거
      .filter((line) => line !== ""); // 빈 줄 제거

    if (plansArray.length === 0) {
      alert("계획을 작성해주세요.");
      return;
    }

    console.log("등록된 계획:", plansArray);
    console.log("등록된 과제:", task);

    alert("등록되었습니다.");
    navigate("/studyAdmin"); // 등록 후 메인 페이지로 이동
  };

  return (
    <div className="edit-plan-page">
      <h2>웹프로그래밍</h2>
      <h3>{`${week}주차`}</h3>
      <textarea
        placeholder="계획을 줄 단위로 작성해주세요. (Enter로 구분)"
        value={plan}
        onChange={(e) => setPlan(e.target.value)}
        rows={10}
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

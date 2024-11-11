import React from "react";
import {majorSubjectArrayObject} from "../arrayObject";
import {electiveSubjectArrayObject} from "../arrayObject";

const DropdownTwo = ({
  selectedDropdownTwo,
  handleDropdownTwo,
  selectedDropdownOne,
}) => {
  return (
    <div>
      <select value={selectedDropdownTwo} onChange={handleDropdownTwo}>
        <option value="" disabled>
          과목 선택:
        </option>
        {selectedDropdownOne === "컴퓨터공학부" &&
          majorSubjectArrayObject.computer.map((option) => (
            <option value={`${option}`}>{option}</option>
          ))}
        {selectedDropdownOne === "첨단IT학부" &&
          majorSubjectArrayObject.it.map((option) => (
            <option value={`${option}`}>{option}</option>
          ))}
        {selectedDropdownOne === "기독교학부" &&
          majorSubjectArrayObject.christian.map((option) => (
            <option value={`${option}`}>{option}</option>
          ))}
        {selectedDropdownOne === "기초교양" &&
          electiveSubjectArrayObject.basic.map((option) => (
            <option value={`${option}`}>{option}</option>
          ))}
        {selectedDropdownOne === "심화교양" &&
          electiveSubjectArrayObject.advanced.map((option) => (
            <option value={`${option}`}>{option}</option>
          ))}
        {selectedDropdownOne === "소양교양" &&
          electiveSubjectArrayObject.literacy.map((option) => (
            <option value={`${option}`}>{option}</option>
          ))}
      </select>
    </div>
  );
};

export default DropdownTwo;

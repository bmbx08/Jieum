import React from "react";
import {dropDownArrayObject} from "../arrayObject";

const DropdownOne = ({selectedDropdownOne,handleDropdownOne,selectedCategory}) => {
  return (
    <>
            <div>
              <select value={selectedDropdownOne} onChange={handleDropdownOne}>
                <option value="" disabled>
                {selectedCategory||"항목"} 선택:
                </option>
                {selectedCategory === "전공" &&
                  dropDownArrayObject.majorList.map((option) => (
                    <option value={`${option}`}>{option}</option>
                  ))}
                {selectedCategory === "교양" &&
                  dropDownArrayObject.electiveList.map((option) => (
                    <option value={`${option}`}>{option}</option>
                  ))}
                {selectedCategory === "자기개발" &&
                  dropDownArrayObject.selfImproveList.map((option) => (
                    <option value={`${option}`}>{option}</option>
                  ))}
              </select>
            </div>
    </>
  );
};

export default DropdownOne;

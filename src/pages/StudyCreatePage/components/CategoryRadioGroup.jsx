import React from "react";
import { dropDownArrayObject } from "../arrayObject";

const CategoryRadioGroup = ({selectedCategory,handleCategoryRadio}) => {
  return (
    <div className="mb-2">
      {dropDownArrayObject.categoryList.map((category)=>(
        <label className={`radio-button ${selectedCategory===category?"active":""}`}>
          <input
            type="radio"
            name="category"
            value={`${category&&category}`}
            checked={selectedCategory&&selectedCategory === `${category}`}
            onChange={handleCategoryRadio&&handleCategoryRadio}
            className="radio-input"
          />
          {category&&category}
        </label>
      ))}
    </div>
  );
};

export default CategoryRadioGroup;

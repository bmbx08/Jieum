import React from "react";
import { dropDownArrayObject } from "../arrayObject";

const CategoryRadioGroup = ({selectedCategory,handleCategoryRadio}) => {
  return (
    <div>
      {dropDownArrayObject.categoryList.map((category)=>(
        <label>
          <input
            type="radio"
            name="category"
            value={`${category&&category}`}
            checked={selectedCategory&&selectedCategory === `${category}`}
            onChange={handleCategoryRadio&&handleCategoryRadio}
          />
          {category&&category}
        </label>
      ))}    
    </div>
  );
};

export default CategoryRadioGroup;

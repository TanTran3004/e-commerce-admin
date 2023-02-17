import React from "react";
import CustomInput from "../components/CustomInput";

const AddCat = () => {
  return (
    <div>
      <h3 className="mb-4 title">Add Category</h3>
      <div>
        <form action="">
          <CustomInput
            label="Enter Blog Category"
            type="text"
            i_id=""
            i_className=""
            i_name=""
            i_value=""
            onChange={() => {}}
            onBlur={() => {}}
          />
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCat;

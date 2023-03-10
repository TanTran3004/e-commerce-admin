import React from "react";
import CustomInput from "../components/CustomInput";

const ResetPassword = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Reset Password</h3>
        <p className="text-center">Please Enter your new password.</p>
        <form action="">
          <CustomInput
            label="New Password"
            type="password"
            i_id="password"
            i_className=""
            i_name=""
            i_value=""
            onChange={() => {}}
            onBlur={() => {}}
          />
          <CustomInput
            type="password"
            label="Confirm Password"
            i_id="confirmPassword"
            i_className=""
            i_name=""
            i_value=""
            onChange={() => {}}
            onBlur={() => {}}
          />
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

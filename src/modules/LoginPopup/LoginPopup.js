import React, { useState } from "react";
import eye from "../../assets/passsword_eye.svg";
import "./loginPopupStyles.css";
import { useNavigate } from "react-router-dom";
import close from "../../assets/cross.png";
import "animate.css";

function LoginPopup({
  on_register_click = () => {},
  onClose = () => {},
  show_close_icon = true,
}) {
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const [password_visible, set_password_visible] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="login-container flex flex-col items-center justify-center animate__animated animate__zoomin">
      {show_close_icon && (
        <div className="w-full flex justify-end" onClick={onClose}>
          <img src={close} alt="close" />
        </div>
      )}
      <h3 className="text-dark-gray">WELCOME BACK</h3>
      <p className="text-white text-[18px] font-semibold">
        Log into your account
      </p>
      <div className="w-[415px] mt-10">
        <p className="text-light-gray font-medium">Email or Username</p>
        <input
          value={email}
          onChange={(e) => set_email(e.target.value)}
          className="focus:outline-none"
          placeholder="Enter your email or username"
        />
      </div>

      <div className="w-[415px] mt-5">
        <div className="flex justify-between">
          <p className="text-light-gray font-medium">Password</p>
          <p className="text-light-gray text-semi-bold text-[12px]">
            Forgot Password?
          </p>
        </div>
        <div className="w-full relative">
          <input
            value={password}
            onChange={(e) => set_password(e.target.value)}
            className="focus:outline-none"
            placeholder="Enter your password"
            type={password_visible ? "text" : "password"}
          />
          <div
            className="absolute inset-y-0 right-2 flex items-center pl-2 text-gray-500 cursor-pointer"
            onClick={() => set_password_visible((prev) => !prev)}
          >
            <img src={eye} alt="eye" />
          </div>
        </div>
      </div>
      <button
        className="mt-5"
        onClick={() => {
          navigate("/atlys-assignment/posts");
        }}
      >
        <p className="text-white text-[16px] font-medium">Login Now</p>
      </button>
      <div
        className="flex w-full mt-2 cursor-pointer"
        onClick={on_register_click}
      >
        <p className="text-dark-gray">
          Not registered yet?{" "}
          <span className="text-light-gray">Register →</span>
        </p>
      </div>
    </div>
  );
}

export default LoginPopup;

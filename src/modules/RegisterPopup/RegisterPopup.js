import React, { useState } from "react";
import eye from "../../assets/passsword_eye.svg";
import "./registerPopupStyles.css";
import close from "../../assets/cross.png";

function RegisterPopup({ on_login_click, onClose }) {
    const [email, set_email] = useState("");
    const [username, set_username] = useState("");
    const [password, set_password] = useState("");
    const [password_visible, set_password_visible] = useState(false);

    return (
        <div className="login-container flex flex-col items-center justify-center">
            <div className="w-full flex justify-end" onClick={onClose}>
                <img src={close} alt="close" />
            </div>
            <h3 className="text-dark-gray">SIGN UP</h3>
            <p className="text-white text-[18px]">
                Create an account to continue
            </p>
            <div className="w-[415px] mt-10">
                <p className="text-light-gray text-semi-bold">
                    Enter your Email
                </p>
                <input
                    value={email}
                    onChange={(e) => set_email(e.target.value)}
                    className="focus:outline-none"
                    placeholder="Enter your email"
                />
            </div>

            <div className="w-[415px] mt-5">
                <p className="text-light-gray text-semi-bold">Username</p>
                <input
                    value={username}
                    onChange={(e) => set_username(e.target.value)}
                    className="focus:outline-none"
                    placeholder="Choose a preferred username"
                />
            </div>

            <div className="w-[415px] mt-5">
                <div className="flex">
                    <p className="text-light-gray text-semi-bold">Password</p>
                </div>
                <div className="w-full relative">
                    <input
                        value={password}
                        onChange={(e) => set_password(e.target.value)}
                        className="focus:outline-none"
                        placeholder="Choose a strong password"
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
            <button className="mt-5">
                <p className="text-white text-semi-bold">Continue</p>
            </button>
            <div
                className="flex w-full mt-2 cursor-pointer"
                onClick={on_login_click}
            >
                <p className="text-dark-gray">
                    Already have an account?
                    <span className="text-light-gray">Login →</span>
                </p>
            </div>
        </div>
    );
}

export default RegisterPopup;

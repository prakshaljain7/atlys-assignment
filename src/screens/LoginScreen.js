import React from "react";
import logo from "../assets/logo.svg";
import LoginPopup from "../modules/LoginPopup/LoginPopup";

function LoginScreen() {
    return (
        <div className="flex items-center justify-center h-[100vh] flex-col">
            <img src={logo} alt="logo" />
            <LoginPopup />
        </div>
    );
}

export default LoginScreen;

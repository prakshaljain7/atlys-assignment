import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import LoginScreen from "./screens/LoginScreen";
import Posts from "./screens/Posts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/atlys-assignment" element={<LoginScreen />} />
        <Route path="/atlys-assignment/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;

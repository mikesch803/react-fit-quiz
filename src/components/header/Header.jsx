import React from "react";
import "./Header.css";

export function Header() {
  return (
    <div className="navbar">
      <h1 className="navbar-title">Quiz</h1>
      <div className="navbar-icons">
        <button className="btn btn-link">LOGIN</button>
      </div>
    </div>
  );
}

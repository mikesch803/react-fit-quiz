import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="navbar-title">Quiz</h1>
      </Link>
      <div className="navbar-icons">
        <button className="btn btn-link">LOGIN</button>
      </div>
    </div>
  );
}

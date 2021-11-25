import React from "react";
import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header className="navbar navbar-expand navbar-dark bg-dark text-light">
      <div className="container">
        <Link to="/" className="navbar-brand mb-0 d-flex align-items-center">
          <img src={require("/src/assets/logo.svg")} height="40" alt="" />
          React project
        </Link>

        <nav className="navbar-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

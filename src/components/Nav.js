import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <nav>
      <Link style={navStyle} to="/">
        <h3>LOGO</h3>
      </Link>
      <ul className="navLinks">
        <Link style={navStyle} to="/guide">
          <li>GUIDE</li>
        </Link>
        <Link style={navStyle} to="/intervals">
          <li>INTERVALS</li>
        </Link>
        <Link style={navStyle} to="/chords">
          <li>CHORDS</li>
        </Link>
        <Link style={navStyle} to="/scales">
          <li>SCALES</li>
        </Link>
      </ul>
    </nav>
  );
}

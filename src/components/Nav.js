import React from "react";
import "../nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar">
      <Link to="/">LOGO</Link>
      <div className="dropdown">
        <button className="dropbtn">QUIZZES</button>
        <div className="dropdown-content">
          <Link to="/intervals-quiz">
            <li>INTERVALS</li>
          </Link>
          <Link to="/chords-quiz">
            <li>CHORDS</li>
          </Link>
          <Link to="/scales-quiz">
            <li>SCALES</li>
          </Link>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">GUIDE</button>
        <div className="dropdown-content">
          <Link to="/intervals-guide">
            <li>INTERVALS</li>
          </Link>
          <Link to="/chords-guide">
            <li>CHORDS</li>
          </Link>
          <Link to="/scales-guide">
            <li>SCALES</li>
          </Link>
        </div>
      </div>
    </div>
  );
}

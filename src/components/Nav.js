import React from "react";
import "../nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div class="navbar">
      <Link to="/">LOGO</Link>
      <div class="dropdown">
        <button class="dropbtn">QUIZZES</button>
        <div class="dropdown-content">
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
      <div class="dropdown">
        <button class="dropbtn">GUIDE</button>
        <div class="dropdown-content">
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

    // <nav>
    //   <Link style={navStyle} to="/">
    //     <h3>LOGO</h3>
    //   </Link>
    //   <ul className="navLinks">
    //     <Link style={navStyle} to="/guide">
    //       <li>GUIDE</li>
    //     </Link>
    //     <Link style={navStyle} to="/intervals-quiz">
    //       <li>INTERVALS</li>
    //     </Link>
    //     <Link style={navStyle} to="/chords-quiz">
    //       <li>CHORDS</li>
    //     </Link>
    //     <Link style={navStyle} to="/scales-quiz">
    //       <li>SCALES</li>
    //     </Link>
    //   </ul>
    // </nav>
  );
}

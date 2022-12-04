import React from "react";
import { Link } from "react-router-dom";
import "../css/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar_container">
      <div className="top">top</div>
      <div className="sidebar">
        <ul>
          <li className="active">
            <Link>
              <i className="fas fa-home"></i>
              Home
            </Link>
          </li>
          <li>
            <Link>
              <i className="fas fa-chalkboard-teacher"></i>
              How it works
            </Link>
          </li>
          <li>
            <Link>
              <i className="fas fa-user"></i>
              about_us
            </Link>
          </li>
          <li>
            <Link>
              <i className="fas fa-user-friends"></i>
              become a partner
            </Link>
          </li>
          <li>
            <Link>
              <i className="fas fa-comment-alt"></i>
              testmonial
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <Link>
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link>
          <i className="fab fa-twitter"></i>
        </Link>
        <Link>
          <i className="fab fa-instagram"></i>
        </Link>
        <Link>
          <i className="fab fa-linkedin"></i>
        </Link>
        <Link>
          <i className="fab fa-telegram"></i>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;

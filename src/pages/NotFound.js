import React from "react";
import { Link } from "react-router-dom";
import "../css/notFound.css";

function NotFound() {
  return (
    <div className="notFound">
      <div className="image">
        <img src="../../images/404.png" />
      </div>
      <div className="text">Page not found</div>
      <Link to={"/"}>Click here to go Home</Link>
    </div>
  );
}

export default NotFound;

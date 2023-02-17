import React from "react";
import logo from "../../static/logo.png";

const HeaderLogo = () => {
  return (
    <div className="names">
      <div className="logo">
        <img src={logo} alt="logo can not displayed" />
      </div>
      <div className="projectTitle">
        <p>
          <span className="CofCanvas">C</span>anvas
          <span className="CofCanvas">E</span>ditor
        </p>
      </div>
      <div className="projectName">
        <input type="text" id="fileName" placeholder="canvas_1" />
      </div>
    </div>
  );
};

export default HeaderLogo;

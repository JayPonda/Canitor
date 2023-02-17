import React from "react";

const Footer = (props) => {
  return (
    <div className="footerTitle">
      <span>Description</span>
      <span
        className="material-icons-outlined expand_colleps_btn"
        onClick={() => {
          props.changeVisibility(true);
        }}
      >
        expand_less
      </span>
    </div>
  );
};

export default Footer;

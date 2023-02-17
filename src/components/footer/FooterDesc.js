import React from "react";

const FooterDesc = (props) => {
  return (
    <div className="footer">
      <div className="title">
        <span>Description</span>
        <span
          className="material-icons-outlined expand_colleps_btn"
          onClick={() => props.changeVisibility(false)}
        >
          expand_more
        </span>
      </div>
      <div className="details">{props.desc}</div>
    </div>
  );
};

export default FooterDesc;

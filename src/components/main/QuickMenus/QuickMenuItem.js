import React from "react";

const QuickMenuItem = (props) => {
  return (
    <div
      className="qMenu"
      id={props.item.id}
      onClick={props.item.changeQuickMenu}
    >
      <span className="material-icons-outlined"> {props.item.iconName} </span>
    </div>
  );
};

export default QuickMenuItem;

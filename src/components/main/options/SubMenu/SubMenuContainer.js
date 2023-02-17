import React from "react";

const submenus = [
  "color",
  "Shape",
  "attachements",
  "show case",
  "show case",
  "settings",
];

const SubMenuContainer = () => {
  return (
    <div className="subMenu">
      {submenus.map((item, index) => (
        <div className="submenuItems" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default SubMenuContainer;

import React from "react";
import MenuItem from "./MenuItem";

const menuItem = ["new", "help"];

const MenuRow = () => {
  return (
    <div className="menuList">
      {menuItem.map((item, index) => (
        <MenuItem item={item} key={index} />
      ))}
    </div>
  );
};

export default MenuRow;

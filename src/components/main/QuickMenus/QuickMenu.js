import React, { useState } from "react";
import QuickMenuItem from "./QuickMenuItem";

const menuList = [
  {
    id: "qmLine",
    iconName: "linear_scale",
    changeQuickMenu: () => alert("line"),
  },
  {
    id: "qmCircle",
    iconName: "brightness_1",
    changeQuickMenu: () => alert("line"),
  },
  {
    id: "qmSquare",
    iconName: "crop_din",
    changeQuickMenu: () => alert("line"),
  },
  {
    id: "qmPen",
    iconName: "mode",
    changeQuickMenu: () => alert("line"),
  },
  {
    id: "qmCurve",
    iconName: "looks",
    changeQuickMenu: () => alert("line"),
  },
  {
    id: "qmClean",
    iconName: "cleaning_services",
    changeQuickMenu: () => alert("line"),
  },
];

const QuickMenu = () => {
  const [menu, setMenu] = useState(menuList);

  return (
    <div className="quickMenu">
      {menu.map((items) => (
        <QuickMenuItem key={items.id} item={items} />
      ))}
    </div>
  );
};

export default QuickMenu;

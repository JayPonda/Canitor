import React from "react";
import HeaderLogo from "./HeaderLogo";
import BaseOptions from "./BaseOptions";

const Header = () => {
  return (
    <div className="header">
      <HeaderLogo />
      <BaseOptions />
    </div>
  );
};

export default Header;

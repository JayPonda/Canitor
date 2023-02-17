import React from "react";
import CanvasMain from "./canvasShowCase/CanvasMain";
import OptionsContainer from "./options/OptionsContainer";
import QuickMenu from "./QuickMenus/QuickMenu";

const Main = () => {
  return (
    <div className="main">
      <QuickMenu />
      <CanvasMain />
      <OptionsContainer />
    </div>
  );
};

export default Main;

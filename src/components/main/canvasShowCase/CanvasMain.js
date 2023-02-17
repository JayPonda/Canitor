import React from "react";
import CanvasWrapper from "./CanvaSection/CanvasWrapper";
import UiConfig from "./configCanva/UiConfig";
import MenuRow from "./MenuList/MenuRow";

const canvasMain = () => {
  return (
    <div className="canvasShowCase">
      <MenuRow />
      <UiConfig />
      <CanvasWrapper />
    </div>
  );
};

export default canvasMain;

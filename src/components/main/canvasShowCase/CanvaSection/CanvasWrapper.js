import React from "react";

const CanvasWrapper = () => {
  return (
    <div className="canvasWrapper">
      <div id="backgroundDiv" className="canvas"></div>
      <canvas
        className="canvas"
        id="canvasProjection"
        style={{ display: "none" }}
      ></canvas>
      <canvas
        className="canvas"
        id="canvasShado"
        style={{ display: "none" }}
      ></canvas>
      <canvas className="canvas" id="canvasVisible"></canvas>
    </div>
  );
};

export default CanvasWrapper;

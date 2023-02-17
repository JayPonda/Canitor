import React from "react";

const UiConfig = () => {
  return (
    <div className="config">
      <div id="colorpicker"></div>
      <div id="backgroundColor"></div>
      <div id="currentColor"></div>
      <select id="resolution">
        <option>128 X 256</option>
        <option>256 X 512</option>
      </select>
      <span className="material-icons-outlined icon-as-menu" id="zoom_in">
        zoom_in
      </span>
      <span className="material-icons-outlined icon-as-menu" id="zoom_out">
        zoom_out
      </span>
      <span className="material-icons-outlined icon-as-menu" id="check">
        check
      </span>
      <span className="material-icons-outlined icon-as-menu" id="cancel">
        cancel
      </span>
    </div>
  );
};

export default UiConfig;

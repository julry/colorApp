import React from "react";
import "./index.css";

const ColorBlock = ({ color, rowIndex, index, convertedIndex }) => (
  <div className="color-block" style={{ backgroundColor: color }}>
  </div> 
);

export default ColorBlock;
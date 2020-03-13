import React from "react";
import "./index.css";

const ColorBlock = ({ color }) => (
  <div className="color-block" style={{ backgroundColor: color }} />
);

export default ColorBlock;
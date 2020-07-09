import React from "react";
import "./index.css";

const MenuButton = props => (
  <div className={props.className} onClick={props.onClick}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default MenuButton;

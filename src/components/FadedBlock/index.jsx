import React from "react";
import "./index.css";

const FadedBlock = props => (
  <div
    className={
      "faded-block-wrapper" +
      (props.direction === "right" ? " to-right " : " to-left ") +
      props.className
    }
  >
    <div className="label muted-text">{props.label}</div>
    <div className={"faded-block"}>{props.children}</div>
  </div>
);

export default FadedBlock;

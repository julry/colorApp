import React from "react";
import "./index.css";

const Description = ({
  title,
  description,
  button,
  restartButton,
  className
}) => (
  <div className={"description " + className}>
    <h1>{title}</h1>
    <p>{description}</p>
    {!restartButton.isHidden && <button onClick={restartButton?.onClick}>{restartButton?.title}</button>}
    <button onClick={button?.onClick}>{button?.title}</button>
  </div>
);

export default Description;

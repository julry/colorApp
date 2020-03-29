import React from "react";
import styled from 'styled-components';
import "./index.css";

const Button = styled.button`
  background-color: #440c67;
  margin: 4px;
`;

const Description = ({ title, description, button }) => (
  <div className="description">
      <h1>{title}</h1>
      <p>{description}</p>
      <Button 
      onClick={button?.onClick}
      style = {{
        display: button.isHidden? "none" : "run-in"
      }}
      >{button?.title}</Button>
  </div>
);

export default Description;
import React from "react";
import styled from 'styled-components';

const Button = styled.button`
  background-color: #440c67;
`;

// button = { title, onClick }
const Description = ({ title, description, button }) => (
  <div className="description">
      <h1>{title}</h1>
      <p>{description}</p>
      <Button onClick={button?.onClick}>{button?.title}</Button>
  </div>
);

export default Description;
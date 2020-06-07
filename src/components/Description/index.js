import React from "react";
import "./index.css";



const Description = ({ title, description, button, className }) => (
  <div className={'description' + " " + className} >
      <h1>{title}</h1>
      <p>{description}</p>
      <button
      style={{display:"none"}}
      onClick={button?.onClick}>
       Продолжить
      </button>
      <button 
      onClick={button?.onClick}
      >{button?.title}</button>
      
  </div>
);

export default Description;
import React from "react";
import './index.css';
import ColorBlock from "../ColorBlock";
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

const Pyramid = (props) => {
 
  console.log(props.colors);
    return (
    <DndProvider backend={Backend}>
      <div className="pyramid">
          {[...new Array(props.level)].map((item, rowIndex) => (
            <div className="row" key={rowIndex}>
                {[...new Array(rowIndex + 1)].map((row, index) => (
                  <ColorBlock 
                  correct = {props.correctColors}
                  color = {props.colors[props.convert(rowIndex, index)]}
                  key={index} 
                  rowIndex={rowIndex} 
                  index = {index} 
                  convertedIndex = {props.convert(rowIndex, index)}
                  >
                  </ColorBlock>
                ))}
            </div>
          ))}
      </div>
      </DndProvider>
    );
};

export default Pyramid;
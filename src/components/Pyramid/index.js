import React from "react";
import './index.css';
import ColorBlock from "../ColorBlock";
import  "../../pages/pyramid-game";
import { getPyramidColor, convertIndex } from "../../pages/pyramid-game";


const Pyramid = ({ level }) => {
    return (
      <div className="pyramid">
          {[...new Array(level)].map((item, rowIndex) => (
            <div className="row" key={rowIndex}>
                {[...new Array(rowIndex + 1)].map((row, index) => (
                  <ColorBlock 
                  color = {getPyramidColor(rowIndex, index)}
                  key={index} 
                  rowIndex={rowIndex} 
                  index = {index} 
                  convertedIndex = {convertIndex(rowIndex, index)}>
                  </ColorBlock>
                ))}
            </div>
          ))}
      </div>
    );
};

export default Pyramid;
import React from "react";
import './index.css';
import ColorBlock from "../ColorBlock";

const Pyramid = (props) => {
  return (
    <div className="pyramid">
      {[...new Array(props.level)].map((item, rowIndex) => (
        <div className="row" key={rowIndex}>
          {[...new Array(rowIndex + 1)].map((row, index) => (
            <ColorBlock
              correct={props.correctColors[props.convert(rowIndex, index)]}
              color={props.colors[props.convert(rowIndex, index)]}
              key={index}
              rowIndex={rowIndex}
              index={index}
              convertedIndex={props.convert(rowIndex, index)}
              onGuess={props.onColorGuess}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Pyramid;
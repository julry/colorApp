import React from "react";
import "./index.css";
import AdditionBlock from "../AdditionBlock";

const AdditionColors = ({colors, isVisible, amount}) => {
  if (!isVisible) return null;
  return (
    <div className="addition-colors">
      {[...new Array(amount)].map((item, index) => (
        <AdditionBlock
          color={colors[index]}
          index={index}
          key={index}
        />))
      }
    </div>
  )
};

export default AdditionColors;
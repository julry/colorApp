import React from "react";
import "./index.css";
import AdditionBlock from "../AdditionBlock";

const AdditionColors = ({colors, isActive, amount}) => {
  if (!isActive) return null;
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
import React from "react";
import "./index.css";
import {useDrop} from 'react-dnd';
import {getRGB} from "../../pages/pyramid-game";

const ColorBlock = ({correct, color, rowIndex, index, convertedIndex, onGuess}) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "colorBlock",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    drop: (item) => {
      if (getRGB(correct) === item.color) {
        onGuess(convertedIndex, item.additionBlockIndex);
      }
      return {colorBlockIndex: convertedIndex};
    },
  });

  let computedColor = color;

  if (isOver && canDrop) computedColor = 'green';

  return (
    <div
      ref={drop}
      className="color-block"
      style={{
        backgroundColor: computedColor,
        opacity: isOver && canDrop ? '0.6' : '1',
      }}
    >
    </div>
  )
};

export default ColorBlock;
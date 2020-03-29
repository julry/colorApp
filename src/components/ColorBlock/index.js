import React from "react";
import "./index.css";
import {useDrop, DragSource} from 'react-dnd';

const ColorBlock = ({correct, color, rowIndex, index, convertedIndex }) => {
  const [isOver, drop] = useDrop({
    accept: "colorblock",
    collect: (mon) => ({
      isOver: !!mon.isOver(),
      canDrop: true,
    }),
    drop: () => ({ id: convertedIndex}), 
    
  })
 
  return(
  <div 
    ref = {drop}
    className="color-block"
    style={{
      backgroundColor:  color
    }}
  >
  </div> 
  )
};

export default ColorBlock;
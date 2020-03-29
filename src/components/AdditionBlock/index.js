import React from "react";
import "./index.css";
import {useDrag} from "react-dnd";

const AdditionBlock = ({ id, color }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: "colorblock",
            itemId: id
          },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
        if (item && dropResult) {
          alert(`You dropped ${item.itemId} into ${dropResult.id}!`);
      }
    },      
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })
  return <div  
    ref = {drag}
    className="addition-block" 
    style={{
      backgroundColor: color,
      cursor: 'move',
      opacity: isDragging ? 0.5 : 1
      }}
      >
  </div> 
};

export default AdditionBlock;
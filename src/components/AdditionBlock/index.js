import React from "react";
import "./index.css";
import {useDrag} from "react-dnd";

const AdditionBlock = ({index, color}) => {
  const [{isDragging}, drag] = useDrag({
    item: {
      type: "colorBlock",
      additionBlockIndex: index,
      color,
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      // if (item && dropResult) {
      //   alert(`You dropped ${item.additionBlockId} into ${dropResult.colorBlockIndex}!`);
      // }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  return <div
    ref={drag}
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
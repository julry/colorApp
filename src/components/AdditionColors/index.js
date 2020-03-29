import React from "react";
import "./index.css";
import AdditionBlock from "../AdditionBlock";
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

const AdditionColors = ({colors, isActive, amount }) => {
  if (!isActive) return <div></div>;
  return(
    <DndProvider backend={Backend}>
  <div className="addition-colors">
    {[...new Array(amount)].map((item, index) => (
    <AdditionBlock
      color = {colors[index]}
      id = {index}
      key = {index}
     />))
    }
  </div>
</DndProvider>
)
    
};

  export default AdditionColors;
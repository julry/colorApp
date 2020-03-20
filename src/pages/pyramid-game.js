import React, { useState } from "react";
import Pyramid from "../components/Pyramid";
import Description from "../components/Description";
import AdditionColors from "../components/AdditionColors";

const getPreviousCount = (rowIndex) => {
  if (rowIndex === 0) return 0;
  return rowIndex + getPreviousCount(rowIndex - 1);
  };
  
export const convertIndex = (rowIndex, index = 0) => {
  return getPreviousCount(rowIndex) + index;
  };

export const getRGB = (color) => {
   return `rgb(${color.red},${color.green}, ${color.blue})`;
  }

 const correctColors = [];

export const getRandomColor = () => {
  let color = {};
  color.red = Math.floor(Math.random() * 256);
  color.green = Math.floor(Math.random() * 256);
  color.blue = Math.floor(Math.random() * 256);
  return color;
}
const additionRow = [];
let randomColor = getRandomColor();

export const getPyramidColor = (rowIndex, index) =>{
  let color = {};
  let convertedIndex = convertIndex(rowIndex,index);
  switch(rowIndex){
    case 0: 
      correctColors[convertedIndex] = randomColor;
      return getRGB(randomColor);
    case 1:
      color.red = 3*randomColor.red/4 + 256*index/2 ;
      color.green = 3*randomColor.green/4 + 256*index/2;
      color.blue = 3*randomColor.blue/4 + 256*index/2 ;  
      break; 
    case 2:
      color.red = randomColor.red/2 + 256*index/4;
      color.green = randomColor.green/2 + 256*index/4;
      color.blue = randomColor.blue/2 + 256*index/4; 
      break;  
    case 3:  
      if (index < 2) {
        color.red = randomColor.red/4 + 256*index*3/16;
        color.green = randomColor.green/4 + 256*index*3/16;
        color.blue = randomColor.blue/4 + 256*index*3/16; 
      }
      else 
      {
        color.red = randomColor.red/4 + 256*(3 * index + 3)/16;
        color.green = randomColor.green/4 + 256*(3 * index + 3)/16;
        color.blue = randomColor.blue/4 + 256*(3 * index + 3)/16; 
      }
    break;      
    case 4: 
      color.red = index*256/4;
      color.green = index*256/4;
      color.blue = index*256/4;  
      correctColors[convertedIndex] = color;
      return getRGB(color);
    default:
      break;
  }
  correctColors[convertedIndex] = color;
  return 'rgb(0,0,0)';
  }

export const getAdditionColor = (index) =>{

while (true){let j = Math.floor(Math.random() * correctColors.length + 1);
  if ((!additionRow.includes(correctColors[j])&&(j<10))){
    additionRow[index] = correctColors[j];
    console.log(correctColors[j]);
    return getRGB(correctColors[j]);
  }
}
}

const PyramidGame = () => {
  const [level, setLevel] = useState(5);
  return (
    <div>
    <div className="wrapper">
      <Description
        title="Title"
        description="Lorem ipsum"
        button={{
          title: 'Начать',
          onClick: () => setLevel(prevLevel => prevLevel + 1),
          isHidden: false
        }}
      />
      <Pyramid level={level} />
    </div>
    <div>
    <AdditionColors amount={9}/>
    </div>
    </div>
  );
};

export default PyramidGame;
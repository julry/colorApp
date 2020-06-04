import React, { useState } from "react";
import Pyramid from "../components/Pyramid";
import Description from "../components/Description";
import AdditionColors from "../components/AdditionColors";

const getPreviousCount = (rowIndex) => {
  if (rowIndex === 0) return 0;
  return rowIndex + getPreviousCount(rowIndex - 1);
};
  
const convertIndex = (rowIndex, index = 0) => {
  return getPreviousCount(rowIndex) + index;
};

const getRGB = (color) => {
  return `rgb(${color.red},${color.green}, ${color.blue})`;
}

const pyramidColors = [];
const correctColors = [];

const getRandomColor = () => {
  let color = {};
  color.red = Math.floor(Math.random() * 256);
  color.green = Math.floor(Math.random() * 256);
  color.blue = Math.floor(Math.random() * 256);
  return color;
}

const additionRow = [];
const randomColor = getRandomColor();

const getPyramidColor = (rowIndex, index) =>{
  let color = {};
  let convertedIndex = convertIndex(rowIndex,index);
  switch(rowIndex){
    case 0: 
      correctColors[convertedIndex] = randomColor;
      pyramidColors[convertedIndex] = randomColor;
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
      pyramidColors[convertedIndex] = color;
      return getRGB(color);
    default:
      break;
  }

  correctColors[convertedIndex] = color;
  additionRow[convertedIndex-1] = color;
  return 'rgb(0,0,0)';

}

function getCorrectColors(level) 
{
  let colors  = [];
  for (let i=0; i< level; i++)
  {
    for(let j=0; j<= i; j++)
    {
        let index = convertIndex(i,j);
        getPyramidColor(i,j);
        colors[index] = typeof pyramidColors[index] == "undefined"? "" : getRGB(pyramidColors[index]); 
    }
  }
  return colors;
};

const beginColors = getCorrectColors(5);

const getAdditionColor = (level) =>{
  let colors  = [];
  additionRow.sort(()=> Math.random() - 0.5);
    for (let i=0; i< additionRow.length; i++)
    {
      colors[i] = getRGB(additionRow[i]); 
    }
  return colors;
}

const additionColors = getAdditionColor();

const PyramidGame = () => {
  const [isVisible, setActivity] = useState(false);
  return (
    <div>
      <div className="wrapper">
        <Description
          title="Однотонная пирамида"
          description="Перенесите оттенки снизу в пирамиду для получения пирамиды насыщенности. Правильный выбор цвета дает 25 баллов, неправильный отнимает 30."
          button={{
            title:'Начать',
            onClick: () => setActivity(visible => !visible),
            isHidden: isVisible
          }}
        />
        <Pyramid  correctColors = {correctColors} colors = {beginColors} convert = {convertIndex} level={5}/>
      </div>
      <div>
        <AdditionColors colors={additionColors} isActive={isVisible} amount={9}/>
      </div>
    </div>
  );
};



export default PyramidGame;
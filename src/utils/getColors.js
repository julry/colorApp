import { convertIndex } from "./convertIndex";

export const getRGB = color => {
  return `rgb(${color.red},${color.green},${color.blue})`;
};

export const getRandomColor = () => {
  let color = {};
  color.red = Math.floor(Math.random() * 256);
  color.green = Math.floor(Math.random() * 256);
  color.blue = Math.floor(Math.random() * 256);
  return color;
};

export const getAdditionColors = (allColors, level) => {
  const colors = [...allColors];
  colors.splice(convertIndex(level-1));
  colors.shift();
  return colors.sort(() => Math.random() - 0.5);
};

export function getCorrectColors( firstColor, level, isStarted) {
  let colors = [];
  for (let i = 0; i < level; i++) {
    for (let j = 0; j <= i; j++) {
      (!isStarted) ?
        colors.push(getPyramidColor(firstColor, i, j))
        : (i!==level-1 && i!==0) ?
          colors.push( 'rgb(0,0,0)')
          : colors.push(getPyramidColor(firstColor, i, j))
      ;
    }
  }
  return colors;
}



export const getPyramidColor = (randomColor, rowIndex, index) => {
  let color = {
    red: 0,
    green: 0,
    blue: 0
  };
    switch (rowIndex) {
      case 0:
        return getRGB(randomColor);
      case 1:
        color.red = (3 * randomColor.red) / 4 + (256 * index) / 4;
        color.green = (3 * randomColor.green) / 4 + (256 * index) / 4;
        color.blue = (3 * randomColor.blue) / 4 + (256 * index) / 4;

        break;
      case 2:
        color.red = randomColor.red / 2 + (256 * index) / 4;
        color.green = randomColor.green / 2 + (256 * index) / 4;
        color.blue = randomColor.blue / 2 + (256 * index) / 4;
        break;
      case 3:
        if (index < 2) {
          color.red = randomColor.red / 4 + (256 * index * 3) / 16;
          color.green = randomColor.green / 4 + (256 * index * 3) / 16;
          color.blue = randomColor.blue / 4 + (256 * index * 3) / 16;
        } else {
          color.red = randomColor.red / 4 + (256 * (3 * index + 3)) / 16;
          color.green = randomColor.green / 4 + (256 * (3 * index + 3)) / 16;
          color.blue = randomColor.blue / 4 + (256 * (3 * index + 3)) / 16;
        }
        break;
      case 4:
        color.red = (index * 256) / 4;
        color.green = (index * 256) / 4;
        color.blue = (index * 256) / 4;
      default:
        break;
    }
  return getRGB(color);
  }
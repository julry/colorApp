import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Pyramid from "../components/Pyramid";
import Description from "../components/Description";
import AdditionColors from "../components/AdditionColors";
import MenuButton from "../components/MenuButton";
import ModalWindow from "../components/ModalWindow";
import FadedBlock from "../components/FadedBlock";

const getPreviousCount = rowIndex => {
  if (rowIndex === 0) return 0;
  return rowIndex + getPreviousCount(rowIndex - 1);
};

const convertIndex = (rowIndex, index = 0) => {
  return getPreviousCount(rowIndex) + index;
};

export const getRGB = color => {
  return `rgb(${color.red},${color.green},${color.blue})`;
};

const pyramidColors = []; //colors in pyramid in the beginning
const correctColors = []; // all colors

const getRandomColor = () => {
  let color = {};
  color.red = Math.floor(Math.random() * 256);
  color.green = Math.floor(Math.random() * 256);
  color.blue = Math.floor(Math.random() * 256);
  return color;
};

const additionRow = [];
let randomColor = getRandomColor();

const getPyramidColor = (rowIndex, index) => {
  let color = {};
  let convertedIndex = convertIndex(rowIndex, index);
  switch (rowIndex) {
    case 0:
      correctColors[convertedIndex] = randomColor;
      pyramidColors[convertedIndex] = randomColor;
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
      correctColors[convertedIndex] = color;
      pyramidColors[convertedIndex] = color;
      return getRGB(color);
    default:
      break;
  }

  correctColors[convertedIndex] = color;
  additionRow[convertedIndex - 1] = color;
  return "rgb(0,0,0)";
};

function getCorrectColors(level) {
  let colors = [];
  for (let i = 0; i < level; i++) {
    for (let j = 0; j <= i; j++) {
      let index = convertIndex(i, j);
      getPyramidColor(i, j);
      colors[index] = pyramidColors[index] ? getRGB(pyramidColors[index]) : "";
    }
  }
  return colors;
}

let beginColors = getCorrectColors(5); //??????????????????

const getAdditionColor = level => {
  let colors = [];
  additionRow.sort(() => Math.random() - 0.5);
  for (let i = 0; i < additionRow.length; i++) {
    colors[i] = getRGB(additionRow[i]);
  }
  return colors;
};

let additionColors = getAdditionColor();

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
}

const gameConfig = {
  initialScore: 0,
  maxAvaliableTime: 60,
  guessScore: 25,
  mistakeScore: -15
};
const GameStatus = {
  NotStarted: "NOT_STARTED",
  Paused: "PAUSED",
  Playing: "PLAYING",
  Completed: "COMPLETED",
  Failed: "FAILED"
};

const PyramidGame = () => {
  //const [timerId, setTimerId] =
  const forceUpdate = useForceUpdate();
  const onColorGuess = (colorsIndex, additionColorsIndex) => {
    beginColors[colorsIndex] = getRGB(correctColors[colorsIndex]);
    additionColors.splice(additionColorsIndex, 1);
    setScore(score => score + gameConfig.guessScore);
    if (additionColors.length===0) {
      setGameStatus(GameStatus.Completed);
      console.log(gameStatus);
      console.log(isFinished);

    }
  };

  const onMistake = () => {
    setScore(score => score + gameConfig.mistakeScore);
  };

  const restartGame = () => {
    randomColor = getRandomColor();
    beginColors = getCorrectColors(5);
    additionColors = getAdditionColor();
    setScore(gameConfig.initialScore);
    setGameStatus(GameStatus.NotStarted);
  };

  const [score, setScore] = useState(gameConfig.initialScore);
  const [remainingTime, setRemainingTime] = useState(
    gameConfig.maxAvaliableTime
  );
  const [gameStatus, setGameStatus] = useState(GameStatus.NotStarted);
  //const [startedColors, setStartedColors] = useState([]); //array from objects | current correct (mb)isGuessed
  const isZenMode =
    gameStatus !== GameStatus.NotStarted && gameStatus !== GameStatus.Paused;

  const isFinished =
    gameStatus === GameStatus.Completed || gameStatus === GameStatus.Failed;

  return (
    <DndProvider backend={Backend}>
      <div className="wrapper">
        <MenuButton
          className={gameStatus === GameStatus.Playing ? " playing-mode" : ""}
          onClick={() => setGameStatus(GameStatus.Paused)}
        />
        <Description
          className={
            isZenMode ? "hiddenDescription" : ""
          }
          title="Однотонная пирамида"
          description="Перенесите оттенки снизу в пирамиду для получения пирамиды насыщенности. Правильный выбор цвета дает 25 баллов, неправильный отнимает 15."
          button={{
            title: gameStatus === GameStatus.Paused ? "Продолжить" : "Начать",
            onClick: () => setGameStatus(GameStatus.Playing)
          }}
          restartButton={{
            title: "Начать заново",
            isHidden: gameStatus !== GameStatus.Paused && !isZenMode,
            onClick: restartGame
          }}
        />
        <ModalWindow isVisible={isFinished} title="Победа" score={score} />
        <div style={{ position: "absolute" }}>
          <p>{score}</p>
          <p>{remainingTime}</p>
        </div>
        <div className={"pyramid-wrapper" + (isZenMode ? " full-pyramid" : "")}>
          {isZenMode && (
            <>
              <FadedBlock
                label={"Счет"}
                direction={"right"}
                className="game-score"
              >
                {score}
              </FadedBlock>
              <FadedBlock
                label={"Время"}
                direction={"left"}
                className="game-time"
              >
                {remainingTime}
              </FadedBlock>
            </>
          )}
          <Pyramid
            correctColors={correctColors}
            colors={beginColors}
            convert={convertIndex}
            level={5}
            onColorGuess={onColorGuess}
            onMistake={onMistake}
          />
          <AdditionColors
            colors={additionColors}
            isVisible={isZenMode}
            amount={additionColors.length}
          />
        </div>
      </div>
    </DndProvider>
  );
};

export default PyramidGame;

import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Pyramid from "../components/Pyramid";
import Description from "../components/Description";
import AdditionColors from "../components/AdditionColors";
import MenuButton from "../components/MenuButton";
import ModalWindow from "../components/ModalWindow";
import FadedBlock from "../components/FadedBlock";
import { getAdditionColors, getCorrectColors, getRandomColor, getRGB } from "../utils/getColors";
import { convertIndex } from "../utils/convertIndex";

const gameConfig = {
  initialScore: 0,
  maxAvaliableTime: 30,
  guessScore: 25,
  mistakeScore: -15,
  level: 5
};
const GameStatus = {
  NotStarted: "NOT_STARTED",
  Paused: "PAUSED",
  Playing: "PLAYING",
  Completed: "COMPLETED",
  Failed: "FAILED"
};

let randomColor = getRandomColor();

const PyramidGame = () => {

  const [score, setScore] = useState(gameConfig.initialScore);
  const [remainingTime, setRemainingTime] = useState(
    gameConfig.maxAvaliableTime
  );
  const [timerId, setTimerId] = useState();
  const [pyramidColors, setPyramidColors] = useState(getCorrectColors(randomColor, gameConfig.level));
  const [additionColors, setAdditionColors] = useState(getAdditionColors(pyramidColors, gameConfig.level));
  const [gameStatus, setGameStatus] = useState(GameStatus.NotStarted);
  const [shownColors, setShownColors] = useState(getCorrectColors(randomColor, gameConfig.level, GameStatus.NotStarted));

  useEffect( ()=> {
    if (remainingTime === 0) {
      clearInterval(timerId);
      setGameStatus(GameStatus.Failed);
    }
  }, [remainingTime]);


  const onColorGuess = (colorsIndex, additionColorsIndex) => {
    shownColors[colorsIndex] = pyramidColors[colorsIndex];
    additionColors.splice(additionColorsIndex, 1);
    setScore(score => score + gameConfig.guessScore);
    if (additionColors.length===0) {
      setGameStatus(GameStatus.Completed);
      clearInterval(timerId);
    }
  };


  const onMistake = () => {
    setScore(score => score + gameConfig.mistakeScore);
  };

  const restartGame = () => {
    randomColor = getRandomColor();
    clearInterval(timerId);
    let newColors = getCorrectColors(randomColor, gameConfig.level);
    setPyramidColors(newColors);
    setShownColors(getCorrectColors(randomColor, gameConfig.level, GameStatus.NotStarted));
    setAdditionColors(getAdditionColors(newColors, gameConfig.level));
    setScore(gameConfig.initialScore);
    setRemainingTime(gameConfig.maxAvaliableTime);
    setGameStatus(GameStatus.NotStarted);
  };

  const isZenMode =
    gameStatus !== GameStatus.NotStarted && gameStatus !== GameStatus.Paused;

  const isFinished =
    gameStatus === GameStatus.Completed || gameStatus === GameStatus.Failed;


  return (
    <DndProvider backend={Backend}>
      <div className="wrapper">
        <MenuButton
          className={gameStatus === GameStatus.Playing  ? " playing-mode" : ""}
          onClick={() => {
            setGameStatus(GameStatus.Paused);
            clearInterval(timerId);
          }}
        />
        <Description
          className={
            isZenMode ? "hiddenDescription" : ""
          }
          title="Однотонная пирамида"
          description="Перенесите оттенки снизу в пирамиду для получения пирамиды насыщенности. Правильный выбор цвета дает 25 баллов, неправильный отнимает 15."
          button={{
            title: gameStatus === GameStatus.Paused ? "Продолжить" : "Начать",
            onClick: () => {
              setGameStatus(GameStatus.Playing);
              setTimerId(setInterval(
                  () => {
                    setRemainingTime(time => time - 1);
                  }
                ,1000));

            }
          }}
          restartButton={{
            title: "Начать заново",
            isHidden: gameStatus !== GameStatus.Paused && !isZenMode,
            onClick: restartGame
          }}
        />
        <ModalWindow isVisible={isFinished}
                     title={gameStatus === GameStatus.Failed ? "Поражение" : "Победа"}
                     score={score}
                     onClickClose={()=>setGameStatus(GameStatus.Playing)}
                     onClickRestart={restartGame}
        />
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
            correctColors={pyramidColors}
            colors={shownColors}
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

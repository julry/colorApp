import React from "react";
import "./index.css";

const ModalWindow = props => (
  <div className="modal-wrapper" style={{ display: props.isVisible ? "block" : "none" }}>
    <div className={"modal-window"}>
      <div className="announcement">
        <div className="title-wrapper">
          <h1>{props.title}</h1>
        </div>
        <div className="separator" />
        <div className="score-wrapper">
          <p>
            <span className="muted-text">Ваш счет:</span>
            <span className='score'>{props.score}</span>
          </p>
          <div className="modal-window-buttons">
            <button onClick={props.onClickRestart} className="primary-button">
              Начать заново
            </button>
            <button onClick={props.onClickClose} className="secondary-button">
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ModalWindow;

import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import TimeDisplay from "./TimeDisplay";

import { ThemeContext } from "../Context/ThemeContext";

import "./Timer.scss";

const Timer = ({ initialState = false, initialTime = 0, step = 1000 }) => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(initialState);
  const [valueInput, setValueInput] = useState("");

  const { theme } = useContext(ThemeContext);

  const timerButtonClass = `timer-button timer-button--${theme}`;

  const handleValueInput = (e) => setValueInput(e.target.value);

  const timeToggle = () => setIsActive(!isActive);

  const resetTimer = () => setTime(0);

  const setTimer = () => {
    setTime(+valueInput);
    setValueInput("");
  };

  return (
    <div className={`timer ${theme}`}>
      <div className="timer-inner">
        <label>
          <input
            className={`timer-input timer-input--${theme}`}
            value={valueInput}
            onChange={handleValueInput}
            placeholder="write your value"
          />
        </label>
        <button
          className={timerButtonClass}
          onClick={setTimer}
          value={valueInput}
        >
          Set
        </button>
        <button className={timerButtonClass} onClick={timeToggle}>
          {isActive ? "Pause" : "Start"}
        </button>
        <button className={timerButtonClass} onClick={resetTimer}>
          {isActive} Reset
        </button>
        <TimeDisplay initialTime={time} step={step} isActive={isActive} />
      </div>
    </div>
  );
};

Timer.propTypes = {
  item: PropTypes.shape({
    initialState: PropTypes.bool,
    initialTime: PropTypes.number,
    step: PropTypes.number,
  }),
  handleValueInput: PropTypes.func,
  timeToggle: PropTypes.func,
  resetTimer: PropTypes.func,
  setTimer: PropTypes.func,
};

export default Timer;

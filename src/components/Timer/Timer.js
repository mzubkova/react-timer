import React, { useState, useEffect } from "react";
import "./timer.scss";

const Timer = ({ initialState = false, initialTime = 0, step = 1000 }) => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(initialState);
  const [valueInput, setValueInput] = useState("");

  const secondsToDisplay = step;
  const minutesRemaining = step * 60;

  const minutesToDisplay = minutesRemaining % 60;

  const handleValueInput = (e) => {
    setValueInput(e.target.value);
  };

  const timeToggle = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setTime("00:00");
  };

  const setTimer = () => {
    setTime(initialTime);
    setValueInput("");
  };

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, step);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time, step]);

  return (
    <div className="timer-inner">
      <label>
        <input
          value={valueInput}
          onChange={handleValueInput}
          placeholder="write your value"
        />
      </label>
      <div>Value: {valueInput}</div>
      <button
        className="timer-button"
        onClick={setTimer}
        value={(initialTime = valueInput)}
      >
        Set
      </button>
      <button className="timer-button" onClick={timeToggle}>
        {isActive ? "Pause" : "Start"}
      </button>
      <button className="timer-button" onClick={resetTimer}>
        {isActive} Reset
      </button>
      <div className="timer-progress" style={{ width: `${time}px`, max-width: `200px` }}></div>
      <h1 className="title">Time: {time}</h1>
    </div>
  );
};

export default Timer;

import React, { useState } from "react";
import TimeDisplay from "./TimeDisplay";
import "./Timer.scss";

const Timer = ({ initialState = false, initialTime = 0, step = 1000 }) => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(initialState);
  const [valueInput, setValueInput] = useState("");

  const handleValueInput = (e) => setValueInput(e.target.value);

  const timeToggle = () => setIsActive(!isActive);

  const resetTimer = () => setTime(0);

  const setTimer = () => {
    setTime(+valueInput);
    setValueInput("");
  };

  return (
    <div className="timer">
      <div className="timer-inner">
        <label>
          <input
            className="timer-input"
            value={valueInput}
            onChange={handleValueInput}
            placeholder="write your value"
          />
        </label>
        {/* <div>Value: {valueInput}</div> */}
        <button className="timer-button" onClick={setTimer} value={valueInput}>
          Set
        </button>
        <button className="timer-button" onClick={timeToggle}>
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="timer-button" onClick={resetTimer}>
          {isActive} Reset
        </button>
        <TimeDisplay initialTime={time} step={step} isActive={isActive} />
      </div>
    </div>
  );
};

export default Timer;

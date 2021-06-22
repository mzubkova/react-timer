import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "../../Context/ThemeContext";

import "../Timer.scss";

const TimeDisplay = ({ initialTime, step = 1000, isActive }) => {
  const [time, setTime] = useState(initialTime);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setTime(initialTime);
  }, [initialTime]);

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

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  const getTimeInMin = (time) => {
    let hours = Math.floor(time / 60 / 60);
    let minutes = Math.floor((time / 60) % 60);
    let seconds = time % 60;

    seconds = formatTime(seconds);
    minutes = formatTime(minutes);
    hours = formatTime(hours);

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <>
      <h1 className={`title title--${theme}`}>Time: {getTimeInMin(time)}</h1>
      <div
        className="timer-progress"
        style={{ width: `${(time / initialTime) * 100}%` }}
      ></div>
    </>
  );
};

TimeDisplay.propTypes = {
  item: PropTypes.shape({
    initialTime: PropTypes.number,
    step: PropTypes.number,
    isActive: PropTypes.bool,
  }),
  formatTime: PropTypes.func,
  getTimeInMin: PropTypes.func,
};

export default TimeDisplay;

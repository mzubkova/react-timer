import React, { useState, useEffect } from "react";
// import { ThemeContext } from "../../Context/ThemeContext";
import "../Timer.scss";

const TimeDisplay = ({ initialTime, step = 1000, isActive }) => {
  const [time, setTime] = useState(initialTime);

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
      <h1 className="title">Time: {getTimeInMin(time)}</h1>
      <div
        className="timer-progress"
        style={{ width: `${(time / initialTime) * 100}%` }}
      ></div>
    </>
  );
};

export default TimeDisplay;

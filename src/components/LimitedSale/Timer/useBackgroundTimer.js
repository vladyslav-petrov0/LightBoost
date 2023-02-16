import { useState, useEffect } from 'react';

export const useBackgroundTimer = (startTime, id) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isUp, setIsUp] = useState(false);

  const reduceTime = () => {
    if (!isUp) {
      setCurrentTime((prevValue) => {
        let newValue = prevValue - 1000;

        if (newValue <= 0) {
          setIsUp(true);
          return prevValue;
        } else {
          return new Date(newValue);
        }
      });
    }
  };

  const initializeTimer = () => {
    if (startTime) {
      if (!localStorage.getItem(`${id}_timer_endTime`)) {
        localStorage.setItem(`${id}_timer_endTime`, Date.now() + startTime);
      }

      const endTime = localStorage.getItem(`${id}_timer_endTime`);

      setCurrentTime(new Date(endTime - Date.now()));

      if (endTime - Date.now() <= 0) {
        setIsUp(true);
      }

      reduceTime();
      const interval = setInterval(reduceTime, 1000);
      return () => clearInterval(interval);
    }
  };

  useEffect(initializeTimer, [isUp]);

  if (isUp) {
    return {
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isUp
    };
  }

  return {
    months: currentTime.getMonth(),
    days: currentTime.getDate() - 1,
    hours: currentTime.getHours() - 1,
    minutes: currentTime.getMinutes(),
    seconds: currentTime.getSeconds()
  };
};

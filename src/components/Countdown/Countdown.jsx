import React, { useState, useEffect } from "react";

export const Countdown = () => {
  const countDownDate = new Date("Dec 24, 2021 18:00:00").getTime();
  const [timeToChristmas, setTimeToChristmas] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      if (distance > 0) {
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeToChristmas(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        clearInterval(interval);
        setTimeToChristmas("Merry Christmas!");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeToChristmas]);

  return <div>{timeToChristmas}</div>;
};

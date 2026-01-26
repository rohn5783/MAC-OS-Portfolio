import React, { useEffect, useState } from "react";

const DateandTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    const day = date.toLocaleString("en-US", { weekday: "long" }).toLowerCase();

    const month = date
      .toLocaleString("en-US", { month: "short" })
      .toLowerCase();

    const dayNum = date.getDate();

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";

    hours = hours % 12 || 12;

    return `${day} ${month} ${dayNum} ${hours}:${minutes} ${ampm}`;
  };

  return (
    <div className="date-time">
      <p>{formatDateTime(time)}</p>
    </div>
  );
};

export default DateandTime;

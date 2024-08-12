import moment from "moment";
import { useEffect, useState } from "react";

const FlashSaleTimer = () => {
  const expiredData = moment().add(1, "days"); // Calculate expired date

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = moment();
      const timeRemaining = moment.duration(expiredData.diff(now));
      // console.log(timeRemaining);

      setDays(timeRemaining.days());
      setHours(timeRemaining.hours());
      setMinutes(timeRemaining.minutes());
      setSeconds(timeRemaining.seconds());

      if (timeRemaining.asMilliseconds() <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="flex items-center gap-16">
      <span className="text-xl md:text-3xl font-semibold">Flash Sales</span>
      <div className="text-center flex gap-4">
        <div className="flex gap-4 items-center ">
          <div>
            <p className="font-bold text-[8px] md:text-[10px] text-sm md:text-xl">Days</p>
            <p className="text-sm md:text-xl font-bold">{days}</p>
          </div>
          <span className="text-designRedColor">:</span>
        </div>
        <div className="flex gap-4 items-center ">
          <div>
            <p className="font-bold text-[8px] md:text-[10px] text-sm md:text-xl">Hours</p>
            <p className="text-sm md:text-xl font-bold">{hours}</p>
          </div>
          <span className="text-designRedColor">:</span>
        </div>
        <div className="flex gap-4 items-center ">
          <div>
            <p className="font-bold text-[8px] md:text-[10px] text-sm md:text-xl">Minutes</p>
            <p className="text-sm md:text-xl font-bold">{minutes}</p>
          </div>
          <span className="text-designRedColor">:</span>
        </div>
        <div className="flex gap-4 items-center ">
          <div>
            <p className="font-bold text-[8px] md:text-[10px] text-sm md:text-xl">Seconds</p>
            <p className="text-sm md:text-xl font-bold">{seconds}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleTimer;

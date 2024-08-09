import moment from "moment";
import { useEffect, useState } from "react";

const CountDownTimer = () => {
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
    <div className="text-center flex gap-4">
      <div className="grid place-content-center size-16 lg:size-20  rounded-full bg-[#ffffff]">
        <p>{days}</p>
        <p className="font-semibold text-[10px] lg:text-sm">Days</p>
      </div>
      <div className="grid place-content-center size-16 lg:size-20  rounded-full bg-[#ffffff]">
        <p>{hours}</p>
        <p className="font-semibold text-[10px] lg:text-sm">Hours</p>
      </div>
      <div className="grid place-content-center size-16 lg:size-20  rounded-full bg-[#ffffff]">
        <p>{minutes}</p>
        <p className="font-semibold text-[10px] lg:text-sm">Minutes</p>
      </div>
      <div className="grid place-content-center size-16 lg:size-20  rounded-full bg-[#ffffff]">
        <p>{seconds}</p>
        <p className="font-semibold text-[10px] lg:text-sm">Seconds</p>
      </div>
    </div>
  );
};

export default CountDownTimer;

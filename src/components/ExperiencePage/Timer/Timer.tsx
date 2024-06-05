"use client";
import React, { FC, useState, useEffect } from "react";
import { calculateElapsedTime, CounterFunctionInterface } from "./counter";

export const Timer: FC = () => {
  const startDate = new Date("2020-11-01");
  const [timeElapsed, setTimeElapsed] = useState<CounterFunctionInterface>({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      const elapsedTime = calculateElapsedTime(startDate);
      setTimeElapsed(elapsedTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startDate]);

  return (
    <div className="flex justify-end py-4 md:pt-0 md:pb-8">
      <div className="cuted-div-wrapper-variant-1 ">
        <div className="cuted-div-item flex items-center justify-center text-base md:text-xl italic">
          <div className="text-titleColor">
            { "Total expirience" }
          </div>
          <div className="text-mainTextColor whitespace-pre">
            {` ${timeElapsed.years || 0} years ${timeElapsed.months || 0} month`}
          </div>
        </div>
      </div>
    </div>
  );
};

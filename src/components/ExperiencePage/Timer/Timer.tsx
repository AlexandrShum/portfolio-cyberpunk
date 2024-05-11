"use client"
import React, { FC, useState, useEffect } from 'react';
import { calculateElapsedTime, CounterFunctionInterface } from "./counter";

export const Timer: FC = () => {
  const startDate = new Date('2020-11-01');
  const [timeElapsed, setTimeElapsed] = useState<CounterFunctionInterface>({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      const elapsedTime = calculateElapsedTime(startDate);
      setTimeElapsed(elapsedTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startDate]);

  return (
    <div className=" float-end w-[50%] flex justify-evenly">
      <div className='text-[#08CAD4] font-semibold'>
        {"total count:".toUpperCase()}
      </div>
      <div className='text-[#FFFFF0]'>
        { `Years: ${timeElapsed.years || 0} Month: ${timeElapsed.months || 0}` }
      </div>
    </div>
  );
};

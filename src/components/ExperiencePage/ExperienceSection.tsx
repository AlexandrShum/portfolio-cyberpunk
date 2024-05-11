import React, { FC } from "react";
import { ExperienceBlock } from "./ExperienceBlock";
import { Timer } from "./Timer/Timer";
import { experienceData, ExperienceDataInterface } from "./data";

export const ExperienceSection: FC = () => {
  
  return (
    <div className="w-full">
      {experienceData.map((item: ExperienceDataInterface, i: number) => (
        <ExperienceBlock key={i} {...item} />
      ))}
      <Timer />
    </div>
  );
};

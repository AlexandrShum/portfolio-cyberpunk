import React, { FC } from "react";
import { ExperienceBlock } from "./ExperienceBlock";
import { Timer } from "./Timer/Timer";
import { experienceData, ExperienceDataInterface } from "./data";

export const ExperienceSection: FC = () => (
  <div className="w-full">
    <Timer />
    <div className="scrollable-container md:max-h-[700px]">
      {experienceData.map((item: ExperienceDataInterface, i: number) => (
        <ExperienceBlock key={i} {...item} count={i + 1} />
      ))}
    </div>
  </div>
);

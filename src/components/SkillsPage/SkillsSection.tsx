import React, { FC } from "react";
import { SkillsBlock } from "./Skills/SkillsBlock";
import { ExperienceHighlights } from "./ExpHighlights/ExpHighlight";
import { skillsData, SkillDataInterface } from "./Skills/data";

export const SkillSection: FC = () => (
  <div>
    <div className="flex flex-wrap gap-10 pb-14">
      {skillsData.map((skill: SkillDataInterface, i: number) => (
        <SkillsBlock {...skill} />
      ))}
    </div>
    <div>
      <ExperienceHighlights />
    </div>
  </div>
);

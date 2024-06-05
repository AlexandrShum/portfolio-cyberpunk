import React, { FC } from "react";
import { SkillsBlock } from "./Skills/SkillsBlock";
import { ExperienceHighlights } from "./ExpHighlights/ExpHighlight";
import { skillsData, SkillDataInterface } from "./Skills/data";

import { getImageUrl } from "../../utils"; 

export const SkillSection: FC = () => (
  <div>
    <div
      className="md:hidden w-full h-[80px] bg-100 bg-no-repeat flex items-center justify-end"
      style={{ backgroundImage: `url(${getImageUrl("/skills-mobile-hero.png")})`}}
    >
      <div className="pr-10 text-xl font-semibold text-titleColor">
        {"My skills"}
      </div>
    </div>
    <div className="flex flex-wrap justify-between px-4 py-8 md:pt-0 gap-5 md:gap-10 md:pb-14">
      {skillsData.map((skill: SkillDataInterface, i: number) => (
        <SkillsBlock {...skill} key={i} />
      ))}
    </div>
    <div>
      <ExperienceHighlights />
    </div>
  </div>
);

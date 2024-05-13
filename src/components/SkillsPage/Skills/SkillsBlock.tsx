import React, { FC } from "react";
import Image from "next/image";
import { SkillDataInterface } from "./data";

export const SkillsBlock: FC<SkillDataInterface> = ({ title, iconHref }) => (
  <div className="cuted-skills-wrapper flex items-center">
    <div className="cuted-skills-item flex items-center">
      <div className="flex w-[90%] px-4">
        <div className="mx-4">
          <Image src={iconHref} alt={title} width={24} height={24} />
        </div>
        <div>
          { title }
        </div>
      </div>
    </div>
  </div>
);

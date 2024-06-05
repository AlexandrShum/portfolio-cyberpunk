import React, { FC } from "react";
import Image from "next/image";
import { SkillDataInterface } from "./data";

import { getImageUrl } from "../../../utils";

export const SkillsBlock: FC<SkillDataInterface> = ({ title, iconHref }) => (
  <div className="cuted-div-wrapper flex items-center">
    <div className="cuted-div-item flex items-center">
      <div className="flex w-[90%] px-4">
        <div className="mx-4">
          <Image src={getImageUrl(iconHref)} alt={title} width={24} height={24} />
        </div>
        <div className="text-mainTextColor">
          { title }
        </div>
      </div>
    </div>
  </div>
);

import React, { FC } from "react";
import Image from "next/image";
import { SkillDataInterface } from "./data";

import { getImageUrl } from "../../../utils";

export const SkillsBlock: FC<SkillDataInterface> = ({ title, iconHref }) => (
  <div className="cuted-div-wrapper">
    <div className="cuted-div-item flex items-center">
      <div className="flex justify-start w-full md:w-[90%] md:px-4">
        <div className="mx-2 md:mx-4 w-4 h-4 md:w-6 md:h-6">
          <Image src={getImageUrl(iconHref)} alt={title} width={0} height={0}  style={{ width: "100%", height: "auto"}}/>
        </div>
        <div className="text-mainTextColor text-xs md:text-base">
          { title }
        </div>
      </div>
    </div>
  </div>
);

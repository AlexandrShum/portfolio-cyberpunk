import React, { FC } from "react";
import { getImageUrl } from "../../../utils";

export const ExperienceHighlights: FC = () => (
  <div>
    <div className="hidden md:block text-title pb-5">
      {"Experience Hightlights"}
    </div>
    <div
      className="w-full h-[60px] bg-100 bg-no-repeat md:hidden text-lg font-medium text-titleColor flex items-center pl-6"
      style={{ backgroundImage: `url(${getImageUrl("/experience-highlights.png")})`}}
    >
      {"Experience Hightlights"}
    </div>
    <div className="text-description p-4 ">
      {"I've seamlessly integrated ORM frameworks, crafted dynamic graphics with canvas, and enhanced user experiences with visual libraries like PixiJS and D3.js. Additionally, I bring expertise in Ethereum blockchain technologies, implementing smart contracts and decentralized applications (DApps) to deliver innovative, secure solutions."}
    </div>
  </div>
);

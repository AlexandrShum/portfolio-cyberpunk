import React, { FC } from "react";
import { getImageUrl } from "../../../utils";

export const ExperienceHighlights: FC = () => (
  <div>
    <div className="hidden md:block text-title pb-5">
      {'Experience Hightlights'}
    </div>
    <div
      className="w-full h-[60px] bg-100 bg-no-repeat md:hidden text-lg font-medium text-titleColor flex items-center pl-6"
      style={{
        backgroundImage: `url(${getImageUrl('/experience-highlights.png')})`,
      }}
    >
      {'Experience Hightlights'}
    </div>
    <div className="text-description p-4 md:p-0 ">
      {
        "My experience spans modern full-stack development, legacy system modernization, and blockchain applications. I've designed REST and GraphQL APIs, worked with SQL and NoSQL databases, integrated Elasticsearch for high-performance search, built interactive data visualizations with D3.js and PixiJS, and developed Web3 applications with smart contract and wallet integrations. I also have hands-on experience with Docker, automated workflows, and delivering scalable, maintainable solutions across the entire development lifecycle."
      }
    </div>
  </div>
);

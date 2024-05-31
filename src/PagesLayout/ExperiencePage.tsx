import React, { FC } from "react";
import {
  Header,
  BlockWithBorderLeft,
  BlockWithBorderRight,
  ExperienceSection
} from "../components";

import { getImageUrl } from "../utils";

export const ExperiencePage: FC = () => {
  return (
    <div className="flex h-[100vh] max-h-[1080px] relative overflow-hidden w-full">

      <BlockWithBorderLeft />
      <div
        className="hidden xl:block bg-100 bg-no-repeat w-[23%] inner-shadow"
        style={{ backgroundImage: `url(${getImageUrl("/experience_page_picture.png")})`}}
      >
      </div>

      <BlockWithBorderRight>
        <Header />
        <div className=" m-auto pt-[5%] w-[70%] relative z-20">
          <ExperienceSection />
        </div>
      </BlockWithBorderRight>
    </div>
  );
};

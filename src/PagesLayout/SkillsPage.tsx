import React, { FC } from "react";
import {
  Header,
  BlockWithBorderLeft,
  BlockWithBorderRight,
  SkillSection
} from "../components";

import { getImageUrl } from "../utils";


export const SkillsPage: FC = () => {
  return (
    <div className="flex h-[100vh] max-h-[1080px] relative overflow-hidden w-full">

      <BlockWithBorderLeft />
      <div
        className="hidden xl:block bg-100 bg-no-repeat w-[23%] inner-shadow"
        style={{ backgroundImage: `url(${getImageUrl("/skills_page_picture.png")})`}}
      ></div>

      <BlockWithBorderRight>
        <Header />
        <div className=" m-auto pt-[10%] w-[70%] relative z-20">
          <SkillSection />
        </div>
      </BlockWithBorderRight>
    </div>
  );
};

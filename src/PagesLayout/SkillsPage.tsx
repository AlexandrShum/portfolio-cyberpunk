import React, { FC } from "react";
import {
  Header,
  BlockWithBorderLeft,
  BlockWithBorderRight,
  SkillSection
} from "../components";

export const SkillsPage: FC = () => {
  return (
    <div className="flex h-[100vh] max-h-[1080px] relative overflow-hidden w-full">

      <BlockWithBorderLeft />
      <div className="bg-[url('/skills_page_picture.png')] bg-100 bg-no-repeat w-[23%] inner-shadow"></div>

      <BlockWithBorderRight>
        <Header />
        <div className=" m-auto pt-[10%] w-[70%] relative z-20">
          <SkillSection />
        </div>
      </BlockWithBorderRight>
    </div>
  );
};

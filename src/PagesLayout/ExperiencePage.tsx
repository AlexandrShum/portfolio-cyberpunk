import React, { FC } from "react";
import {
  Header,
  BlockWithBorderLeft,
  BlockWithBorderRight,
  ExperienceSection
} from "../components";

export const ExperiencePage: FC = () => {
  return (
    <div className="flex h-[100vh] max-h-[1080px] relative overflow-hidden w-full">

      <BlockWithBorderLeft />
      <div className="bg-[url('/experience_page_picture.png')] bg-100 bg-no-repeat w-[23%] inner-shadow"></div>

      <BlockWithBorderRight>
        <Header />
        <div className=" m-auto pt-[10%] w-[70%] relative z-20">
          <ExperienceSection />
        </div>
      </BlockWithBorderRight>
    </div>
  );
};

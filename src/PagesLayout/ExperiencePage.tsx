import React, { FC } from "react";
import {
  Header,
  BlockWithBorderLeft,
  BlockWithBorderRight,
  ExperienceSection,
  MobileHeader
} from "../components";

import Image from "next/image";

import { getImageUrl } from "../utils";

export const ExperiencePage: FC = () => {
  return (
    <div className="flex h-[100vh] max-h-[1080px] relative md:overflow-hidden w-full">

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

      <MobileHeader />
      <div className="relative md:hidden w-full h-full pt-16 max-h-[680px] flex flex-col justify-between items-end">
        <Image src={getImageUrl("/scheme.png")} alt="scheme" width={760} height={700} className="-z-30 absolute top-0"/>
        <Image src={getImageUrl("/elipse-left.png")} alt="elipse" width={300} height={700} className="-z-30 absolute top-[350px] left-[-100px] opacity-40" />
        <ExperienceSection />
      </div>
    </div>
  );
};

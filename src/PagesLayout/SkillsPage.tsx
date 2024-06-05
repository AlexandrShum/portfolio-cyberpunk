import React, { FC } from "react";
import {
  Header,
  BlockWithBorderLeft,
  BlockWithBorderRight,
  SkillSection,
  MobileHeader
} from "../components";

import Image from "next/image"; 

import { getImageUrl } from "../utils";


export const SkillsPage: FC = () => {
  return (
    <div className="flex md:h-[100vh] h-[375px] md:max-h-[1080px] relative md:overflow-hidden w-full">
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
      <MobileHeader />
      <div className="relative md:hidden w-full h-full pt-[56px] flex flex-col justify-between items-end">
        <Image src={getImageUrl("/scheme.png")} alt="scheme" width={760} height={700} className="-z-30 absolute top-0"/>
        <Image src={getImageUrl("/elipse-mobile-right.png")} alt="elipse" width={300} height={700} className="-z-30 absolute top-[50px] right-[0px]" />
        <Image src={getImageUrl("/elipse-mobile-left.png")} alt="elipse" width={300} height={700} className="-z-30 absolute top-[250px] left-[0px]" />
        <SkillSection />
      </div>
    </div>
  );
};

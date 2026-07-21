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
    <div className="flex h-full md:h-[100vh] md:max-h-[1080px] relative md:overflow-hidden w-full">
      <BlockWithBorderLeft />
      <div
        className="hidden md:block bg-100 bg-no-repeat w-[23%] inner-shadow"
        style={{
          backgroundImage: `url(${getImageUrl('/experience_page_picture.png')})`,
        }}
      />

      <BlockWithBorderRight>
        <Header />
        <div className=" m-auto pt-[5%] w-[70%] h-full md:max-h-[70%] relative z-20">
          <ExperienceSection />
        </div>
      </BlockWithBorderRight>

      {/* Mobile View */}
      <MobileHeader />
      <div className="relative md:hidden w-full max-w-[100vw] h-full pt-16 max-h-[680px] flex flex-col justify-between items-end">
        <Image
          src={getImageUrl('/scheme.png')}
          alt="scheme"
          width={760}
          height={700}
          className="-z-30 absolute top-0"
        />
        <Image
          src={getImageUrl('/elipse-mobile-right.png')}
          alt="elipse"
          width={300}
          height={700}
          className="-z-30 absolute top-[50px] right-[0px]"
        />
        <Image
          src={getImageUrl('/elipse-mobile-left.png')}
          alt="elipse"
          width={300}
          height={700}
          className="-z-30 absolute top-[460px] left-[0px]"
        />
        <ExperienceSection />
      </div>
    </div>
  );
};

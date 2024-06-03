import React, { FC } from "react";
import {
  Header,
  MainPageContent,
  DownloadCVButton,
  BlockWithBorderLeft,
  BlockWithBorderRight,
  MobileHeader,
} from "../components";

import { getImageUrl } from "../utils";

export const HomePage: FC = () => {
  return (
    <div className="flex h-[100vh] max-h-[1080px] relative overflow-hidden w-full">
      <BlockWithBorderLeft />
      <div
        className="hidden xl:block bg-100 bg-no-repeat w-[23%] inner-shadow"
        style={{ backgroundImage: `url(${getImageUrl("/main_page_picture.png")})`}}
      ></div>

      <BlockWithBorderRight>
        <Header />
        <div className=" m-auto pt-[20%] w-[60%] relative z-20">
          <MainPageContent />
          <div className="pt-16 float-right">
            <DownloadCVButton />
          </div>
        </div>
      </BlockWithBorderRight>

      <MobileHeader />
      <div className="md:hidden w-full h-full pt-16 max-h-[740px] flex flex-col justify-between items-end">
        <MainPageContent />
        <div className=" p-4">
          <DownloadCVButton />
        </div>
      </div>
    </div>
  );
};

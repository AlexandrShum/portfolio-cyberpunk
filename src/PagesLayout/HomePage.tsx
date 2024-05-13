import React, { FC } from "react";
import {
  Header,
  MainPageContent,
  DownloadCVButton,
  BlockWithBorderLeft,
  BlockWithBorderRight,
} from "../components";

export const HomePage: FC = () => {
  return (
    <div className="flex h-[100vh] max-h-[1080px] relative overflow-hidden w-full">
      <BlockWithBorderLeft />
      <div className="bg-[url('/main_page_picture.png')] bg-100 bg-no-repeat w-[23%] inner-shadow"></div>

      <BlockWithBorderRight>
        <Header />
        <div className=" m-auto pt-[20%] w-[60%] relative z-20">
          <MainPageContent />
          <div className="pt-16 float-right">
            <DownloadCVButton />
          </div>
        </div>
      </BlockWithBorderRight>
    </div>
  );
};

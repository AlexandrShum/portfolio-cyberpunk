import React, { FC } from "react";
import {
  Header,
  BlockWithBorderLeft,
  BlockWithBorderRight,
  ContactsSection,
  MobileHeader
} from "../components";

import Image from "next/image";

import { getImageUrl } from "../utils";

export const ContactsPage: FC = () => {
  return (
    <div className="flex h-[100vh] max-h-[1080px] relative overflow-hidden w-full">

      <BlockWithBorderLeft />
      <div
        className="hidden xl:block bg-100 bg-no-repeat w-[23%] inner-shadow"
        style={{ backgroundImage: `url(${getImageUrl("/contacts_page_picture.png")})`}}
      >
      </div>

      <BlockWithBorderRight>
        <Header />
        <div className=" m-auto pt-[20%] w-[70%] relative z-20 h-full">
          <ContactsSection />
        </div>
      </BlockWithBorderRight>

      <MobileHeader />
      <div className="relative md:hidden w-full max-w-[100vw] h-full pt-[56px] max-h-[680px] flex flex-col justify-between items-end">
        <Image src={getImageUrl("/scheme.png")} alt="scheme" width={760} height={700} className="-z-30 absolute top-0"/>
        <Image src={getImageUrl("/elipse-mobile-right.png")} alt="elipse" width={300} height={700} className="-z-30 absolute top-[50px] right-[0px]" />
        <Image src={getImageUrl("/elipse-mobile-left.png")} alt="elipse" width={300} height={700} className="-z-30 absolute top-[260px] left-[0px]" />
        <ContactsSection />
        <div className="absolute bottom-[20px] right-[10px] -z-30 rotate-12">
          <Image src={getImageUrl("/my-logo.png")} alt="elipse" width={150} height={130}/>
        </div>
      </div>
    </div>
  );
};

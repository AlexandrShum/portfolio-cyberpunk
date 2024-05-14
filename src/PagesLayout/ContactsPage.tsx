import React, { FC } from "react";
import {
  Header,
  BlockWithBorderLeft,
  BlockWithBorderRight,
  ContactsSection
} from "../components";

import { getImageUrl } from "../utils";

export const ContactsPage: FC = () => {
  return (
    <div className="flex h-[100vh] max-h-[1080px] relative overflow-hidden w-full">

      <BlockWithBorderLeft />
      <div
        className=" bg-100 bg-no-repeat w-[23%] inner-shadow"
        style={{ backgroundImage: `url(${getImageUrl("/contacts_page_picture.png")})`}}
      >
      </div>

      <BlockWithBorderRight>
        <Header />
        <div className=" m-auto pt-[20%] w-[70%] relative z-20 h-full">
          <ContactsSection />
        </div>
      </BlockWithBorderRight>
    </div>
  );
};

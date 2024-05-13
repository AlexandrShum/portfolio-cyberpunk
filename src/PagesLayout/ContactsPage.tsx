import React, { FC } from "react";
import {
  Header,
  BlockWithBorderLeft,
  BlockWithBorderRight,
  ContactsSection
} from "../components";

export const ContactsPage: FC = () => {
  return (
    <div className="flex h-[100vh] relative overflow-hidden w-full">

      <BlockWithBorderLeft />
      <div className="bg-[url('/contacts_page_picture.png')] bg-100 bg-no-repeat w-[23%] inner-shadow"></div>

      <BlockWithBorderRight>
        <Header />
        <div className=" m-auto pt-[20%] w-[70%] relative z-20 h-full">
          <ContactsSection />
        </div>
      </BlockWithBorderRight>
    </div>
  );
};

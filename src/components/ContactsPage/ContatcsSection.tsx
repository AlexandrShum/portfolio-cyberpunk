"use client";
import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { socialMediaData, SocialMediaInterface } from "./socialMediaData";

import { getImageUrl } from "../../utils";


export const ContactsSection: FC = () => (
  <div className="h-[80%] md:h-[50%] flex flex-col justify-between">
    <div>
      <div className="hidden md:block text-title tracking-title pb-2">
        {"Get in touch".toUpperCase()}
      </div>
      <div
        className="flex justify-end items-end pr-2 tracking-[5px] pb-10 font-semibold text-lg md:hidden w-full h-[165px] bg-100 bg-no-repeat text-title mb-10"
        style={{ backgroundImage: `url(${getImageUrl("/contacts-mobile.png")})` }}
      >
        {"Get in touch".toUpperCase()}
      </div>

      <div className="px-4 md:px-0 text-description">
        {
          "Have a project in mind or just want to say hello? I'd love to hear from you! Feel free to reach out using the contact form below or connect with me through the provided email address or social media links. Whether you're looking to collaborate on a new venture or simply want to discuss technology and innovation, I'm always eager to engage in meaningful conversations."
        }
      </div>
    </div>

    <div >
      <div className="text-description px-4 md:px-0 pb-4">
        {"Let's turn your ideas into reality together!"}
      </div>
      <div className="flex justify-between w-[40%] md:w-[30%] pl-4 md:pl-0">
        {socialMediaData.map((media: SocialMediaInterface , i: number) => {
          const { icon, href, target } = media;
          return (
            <div key={i} className="w-6 h-6 md:w-10 md:h-10 ">
              <Link href={ href } target={ target }>
                <Image src={getImageUrl(icon)} alt={icon.slice(1)} width={0} height={0} style={{ width: "100%", height: "auto"}}/>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

"use client";
import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { socialMediaData, SocialMediaInterface } from "./socialMediaData";

import { getImageUrl } from "../../utils";


export const ContactsSection: FC = () => (
  <div className="h-[50%] flex flex-col justify-between">
    <div>
      <div className="text-title tracking-title pb-2">
        {"Get in touch".toUpperCase()}
      </div>
      <div className=" text-description">
        {
          "Have a project in mind or just want to say hello? I'd love to hear from you! Feel free to reach out using the contact form below or connect with me through the provided email address or social media links. Whether you're looking to collaborate on a new venture or simply want to discuss technology and innovation, I'm always eager to engage in meaningful conversations."
        }
      </div>
    </div>

    <div>
      <div className="text-description pb-4">
        {"Let's turn your ideas into reality together!"}
      </div>
      <div className="flex justify-between w-[30%]">
        {socialMediaData.map((media: SocialMediaInterface , i: number) => {
          const { icon, href, target } = media;
          return (
            <div key={i}>
              <Link href={ href } target={ target }>
                <Image src={getImageUrl(icon)} alt={icon.slice(1)} width={40} height={40} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

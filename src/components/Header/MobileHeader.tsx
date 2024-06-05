"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LinkDataInterface, linksData } from "./linksData";
import { NavLink } from "./NavLink";

import { getImageUrl } from "../../utils";

export const MobileHeader: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[44px] md:hidden fixed z-[50]">
      <div className="gradient-background pb-[1px] relative z-[50]">
        <div className="w-full h-full flex justify-between items-center bg-[#161D32] relative z-[50]">
          <div className="p-2">
            <Link href="/">
              <Image src={getImageUrl("/logo.png")} alt="logo" width={40} height={40} />
            </Link>
          </div>
          <div className=" mr-2 relative w-7">
            <input id="menu-toggle" type="checkbox" onChange={toggleMenu} checked={isMenuOpen}/>
            <label className="hamburger-menu" htmlFor="menu-toggle">
              <span></span>
            </label>
          </div>
        </div>
      </div>
      <div className={isMenuOpen ? "menubox-open" : "menubox"}>
        <div className="relative z-[-1]">
          <Image src={getImageUrl("/chip-large.png")} alt="chip" width={400} height={400} className=" absolute top-[-10%] left-0"/>
        </div>
        <div className="mt-[100px] w-full h-[40%] flex flex-col justify-evenly items-center z-30">
          {linksData.map((link: LinkDataInterface, i: number) => (
            <NavLink title={link.title} href={link.href} key={i} />
          ))}
        </div>
      </div>
      
      
    </div>
  );
};

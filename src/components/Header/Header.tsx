import React, { FC } from "react";
import { NavLink } from "./NavLink";
import { linksData, LinkDataInterface } from "./linksData";

export const Header: FC = () => {

  return (
    <div className="flex justify-end w-full pr-8 pt-9 relative z-30">
      {linksData.map((link: LinkDataInterface, i: number) => (
        <NavLink title={link.title} href={link.href} key={i} />
      ))}
    </div>
  );
};

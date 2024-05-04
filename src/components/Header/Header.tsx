import React, { FC } from "react";
import { NavLink } from "./NavLink";
import { linksData, LinkDataInterface } from "./linksData";

export const Header: FC = () => {

  return (
    <div className="flex justify-end w-full">
      {linksData.map((link: LinkDataInterface, i: number) => (
        <NavLink title={link.title} href={link.href} key={i} />
      ))}
    </div>
  )
};

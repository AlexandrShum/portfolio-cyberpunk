"use client"
import React, { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LinkDataInterface } from "./linksData";

export const NavLink: FC<LinkDataInterface> = ({ title, href }) => {
  const pathName = usePathname();

  if (pathName === href) {
    return (
      <div className="nav-link md:pb-2 mx-4 text-titleColor border-b-2 border-b-[#08CAD4] animate-pulse	">
        <Link href={href}>{title}</Link>
      </div>
    );
  }

  return (
    <div className="nav-link mx-4 md:hover:text-titleColor">
      <Link href={href}>{title}</Link>
    </div>
  );
};

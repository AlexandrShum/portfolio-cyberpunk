import React, { FC } from "react";
import Link from "next/link";

import { LinkDataInterface } from "./linksData";

export const NavLink: FC<LinkDataInterface> = ({ title, href }) => (
  <div className="nav-link px-4">
    <Link href={href}>
      {title}
    </Link>
  </div>
);

import React, { FC, PropsWithChildren } from "react";
import Image from "next/image";

import { AnimatedText } from "../Animation/AnimatedText"
import { getImageUrl } from "../../../utils";
import { PixelRain } from "../PixelRain/PixelRain";

export const BlockWithBorderLeft: FC<PropsWithChildren> = ({ children }) => (
  <div className=" hidden xl:block w-[20%] rounded-l-2xl gradient-border-left">
    <div className="w-full h-full rounded-l-2xl bg-[#101720] relative">
      <div
        className="absolute left-[-400px] top-[-100px] bg-contain bg-no-repeat w-[800px] h-[800px] opacity-60"
        style={{ backgroundImage: `url(${getImageUrl("/elipse-left.png")})`}}
      >
      </div>
      <div className="absolute left-[24px] top-[720px]">
        <Image src={getImageUrl("/chip.png")} alt="chip" width={200} height={200}/>
      </div>
      <AnimatedText/>
      {children}
    </div>
  </div>
);

export const BlockWithBorderRight: FC<PropsWithChildren> = ({ children }) => (
  <div className="hidden xl:block gradient-border-right w-[57%] rounded-r-2xl">
    <div className=" bg-[#101720] rounded-r-2xl w-full h-full relative">
      <Image src={getImageUrl("/scheme.png")} alt="scheme" width={600} height={1100} className="absolute"/>
      <PixelRain />
    <div
      className="absolute right-[-300px] top-[200px] bg-contain bg-no-repeat w-[1000px] h-[1000px] opacity-60"
      style={{ backgroundImage: `url(${getImageUrl("/elipse-right.png")})`}}
    >
    </div>
      { children }
    </div>
  </div>
);

import React, { FC, PropsWithChildren } from "react";
import Image from "next/image";

export const BlockWithBorderLeft: FC<PropsWithChildren> = ({ children }) => (
  <div className="w-[20%] rounded-l-2xl gradient-border-left">
    <div className="w-full h-full rounded-l-2xl bg-[#101720] relative">
      <div className="absolute left-[-400px] top-[-100px] bg-[url('/elipse-left.png')] bg-contain bg-no-repeat w-[800px] h-[800px]"></div>
      <div className="absolute left-[24px] top-[720px]">
        <Image src="/chip.png" alt="chip" width={200} height={200}/>
      </div>
      {children}
    </div>
  </div>
);

export const BlockWithBorderRight: FC<PropsWithChildren> = ({ children }) => (
  <div className="gradient-border-right w-[57%] rounded-r-2xl">
    <div className=" bg-[#101720] rounded-r-2xl w-full h-full relative">
    <Image src="/scheme.png" alt="scheme" width={600} height={1100} className="absolute"/>
    <div className="absolute right-[-300px] top-[200px] bg-[url('/elipse-right.png')] bg-contain bg-no-repeat w-[1000px] h-[1000px]"></div>
      { children }
    </div>
  </div>
);
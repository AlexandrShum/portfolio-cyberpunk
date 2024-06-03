import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { getImageUrl } from "../../utils";


export const DownloadCVButton: FC = () => {

  return (
    <Link href="/Shumakov_Aleksandr_full_stack_developer.pdf">
      <div className="cuted-button">
        <div className="absolute right-0 top-[6px] w-[1px] h-[28px] md:h-[44px] border-[#08CAD4] border-[1px]"></div>
        <div className="w-full px-7 font-bold text-[10px] md:text-base leading-[10px] md:leading-4 tracking-widest md:tracking-[0.2rem] text-[#101720] flex justify-between items-center">
          { "download my cv".toUpperCase() }
          <div className="w-[12px] h-[12px] md:w-[16px] md:h-[16px]">
            <Image src={getImageUrl("/arrow-right.png")} alt="arrow" width={16} height={16} style={{ width: "100%", height: "100%" }}/>
          </div>
        </div>
      </div>
    </Link>
  );
}

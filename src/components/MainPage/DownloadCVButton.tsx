import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

export const DownloadCVButton: FC = () => {

  return (
    <Link href="/Shumakov_Aleksandr_full_stack_developer.pdf">
      <div className="cuted-button">
        <div className="absolute right-0 top-[6px] w-[1px] h-[44px] border-[#08CAD4] border-[1px]"></div>
        <div className="w-full px-7 font-bold text-base leading-4 tracking-[0.2rem] text-[#101720] flex justify-between">
          { "download my cv".toUpperCase() }
          <Image src="/arrow-right.png" alt="arrow" width={16} height={16}/>
        </div>
      </div>
    </Link>
  );
}

import React, { FC } from "react";
import Image from "next/image";
import { getImageUrl } from "../../utils";

export const MainPageContent: FC = () => {

  return (
    <div className=" text-center pt-4 md:pt-0 md:text-left">
      <div className=" text-titleColor font-semibold text-base md:text-2xl tracking-widest md:tracking-title md:text-justify">
        {"HI, I`M ALEXANDR SHUMAKOV"}
      </div>
      <div className=" text-description pb-4 md:pb-7 italic">
        {"Full-Stack developer from Ukraine"}
      </div>
      <div className="md:hidden pb-4 w-full  relative">
        <Image src={getImageUrl("/main_page_mobile.png")} alt="main_mobile" width={360} height={200} style={{ height: '100%', width: '100%' }}/>
      </div>
      <div className=" text-description font-normal px-2">
        {"As a full stack software developer, I thrive on crafting innovative solutions that seamlessly integrate front-end and back-end technologies. With a passion for creating user-centric applications and a keen eye for detail, I specialize in bringing ideas to life through clean, efficient code. With experience in database design, version control, and deployment, I leverage a comprehensive skill set to tackle challenges head-on and drive results. I believe in continuous learning and stay up-to-date with the latest technologies and best practices to ensure my work is always cutting-edge."}
      </div>
    </div>
  );
};

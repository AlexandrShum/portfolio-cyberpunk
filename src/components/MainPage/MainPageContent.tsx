import React, { FC } from "react";

export const MainPageContent: FC = () => {
  return (
    <div className=" text-left">
      <div className=" text-titleColor font-semibold text-2xl tracking-title text-justify">
        {"HI, I`M ALEXANDR SHUMAKOV"}
      </div>
      <div className=" text-description pb-7 italic">
        {"Full-Stack developer from Ukraine"}
      </div>
      <div className=" text-description font-normal ">
        {"As a full stack software developer, I thrive on crafting innovative solutions that seamlessly integrate front-end and back-end technologies. With a passion for creating user-centric applications and a keen eye for detail, I specialize in bringing ideas to life through clean, efficient code. With experience in database design, version control, and deployment, I leverage a comprehensive skill set to tackle challenges head-on and drive results. I believe in continuous learning and stay up-to-date with the latest technologies and best practices to ensure my work is always cutting-edge."}
      </div>
    </div>
  );
};

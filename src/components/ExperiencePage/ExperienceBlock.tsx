import React, { FC } from "react";
import { ExperienceDataInterface } from "./data";
import { getImageUrl } from "../../utils";

export const ExperienceBlock: FC<
  ExperienceDataInterface & { count: number }
> = (props) => {
  const { position, companyAndDate, description, picture, count } = props;
  const side = count % 2 ? "left" : "right";

  return (
    <div className="w-full pb-10">
      <div
        className="w-full h-fit bg-no-repeat md:hidden bg-100 px-3 py-1 mb-2"
        style={{
          backgroundImage: `url(${getImageUrl(picture)})`,
          textAlign: side
        }}
      >
        <div className=" text-titleColor text-lg font-semibold leading-6">{position}</div>
        <div className=" text-description italic text-base">
          {companyAndDate}
        </div>
      </div>
      <div className="hidden md:block">
        <div className=" text-titleColor text-xl font-semibold">
          {position}
        </div>
        <div className=" text-description italic text-lg py-2">
          {companyAndDate}
        </div>
      </div>
      <div className=" text-description italic text-base md:text-lg px-3">{description}</div>
    </div>
  );
};

import React, { FC } from "react";
import { ExperienceDataInterface } from "./data";

export const ExperienceBlock: FC<ExperienceDataInterface> = (props) => {
  const { position, companyAndDate, description} = props;
  
  return (
    <div className="w-full pb-10">
      <div className=" text-titleColor text-2xl font-semibold">
        { position }
      </div>
      <div className=" text-mainTextColor italic text-lg py-2">
        { companyAndDate }
      </div>
      <div className=" text-mainTextColor italic text-lg">
        { description }
      </div>
    </div>
  );
};

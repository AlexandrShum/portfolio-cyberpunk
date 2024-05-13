import React, { FC } from "react";

export const AnimatedText: FC = () => {

  return (
    <div className="pl-[200px]  rotate-90 relative">
      
      <div className="absolute top-[-100px] w-fit animated-text-block-2">
        <Text whitePart="DEV" otherPart="ELOPER"/>
      </div>
      <div className="absolute rotate-180 w-fit animated-text-block-1">
        <Text whitePart="FULL" otherPart="STACK"/>
      </div>
    </div>
  )
}

const Text: FC<{whitePart: string, otherPart: string}> = ({ whitePart, otherPart }) => (
  <div className="flex justify-evenly text-[96px] leading-[80px] relative z-30">
    <div className="text-mainTextColor animated-text-shadow">
      {whitePart}
    </div>
    <div className="text-titleColor animated-text-shadow">
      {otherPart}
    </div>
  </div>
)

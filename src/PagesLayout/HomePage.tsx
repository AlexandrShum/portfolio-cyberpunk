import React, { FC } from "react";
import { Header } from "../components";
import Image from "next/image"

export const HomePage: FC = () => {

  return (
    <div className="flex w-full justify-evenly h-full">
      <div className="h-[100%] bg-[url('/main_page_picture.png')] w-full">

      </div>
      <div className="w-full">
        <Header />
        <div className=" text-left">

          <div className="text-[#08CAD4] font-semibold text-2xl leading-8">
            {"Hi, i`M Alexander sHUMAKOV".toUpperCase()}
          </div>
        </div>
      </div>
    </div>

  )
}

// font-family: Chakra Petch;
// font-size: 24px;
// font-weight: 600;
// line-height: 31.2px;
// letter-spacing: 0.2em;
// text-align: left;  
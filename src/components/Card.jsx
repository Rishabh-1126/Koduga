"use client";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

const style = {
  wrapper: `flex flex-col p-3 gap-4 w-full bg-[#211A75] min-w-[284px] rounded-xl`,
  head: `flex justify-between w-full `,
};
function Card({ tag, description, clr, imgLink, barLink, tilt }) {
  return (
    <div
      className={`${style.wrapper} ${
        tag == "BUGS FIXING" &&
        tilt &&
        "translate-x-10 -translate-y-2 origin-top-left rotate-12"
      }`}
    >
      <div className={style.head}>
        <p className={`flex items-center text-sm gap-2 `}>
          <i className={`text-xl`} style={{ color: `${clr}` }}>
            <BsDot />
          </i>
          <span style={{ color: `${clr}` }}>{tag}</span>
        </p>
        <Image
          src="/plainDot.svg"
          alt="dot"
          className="w-7 h-7"
          width={300}
          height={300}
        />
      </div>
      <p className=" text-sm">{description}</p>
      <Image
        src={barLink}
        alt="circles"
        className="w-full "
        width={300}
        height={300}
      />
      <div className="flex items-center w-full justify-between">
        <Image
          src={imgLink}
          alt="circles"
          className="w-10 h-10"
          width={300}
          height={300}
        />
        <p className="text-xs flex items-center gap-2 md:gap-1 md:text-xs text-[#778da9] font-semibold">
          <i className="text-lg">
            <AiOutlineClockCircle />
          </i>
          Due in 4 days
        </p>
      </div>
    </div>
  );
}

export default Card;

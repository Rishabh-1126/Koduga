"use client";

import { AiOutlineCaretDown } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
const style = {
  wrapper: `flex items-center w-full bg-[#15132B] p-2 justify-between lg:justify-around rounded-lg  `,
  search: `bg-[#211A75]  flex items-center gap-3 max-w-[300px] py-1 pl-4 w-full rounded-full hidden lg:flex`,
  input: `text-lg lg:text-base text-[white] placeholder-[white]-500 tracking-wide  border-0 bg-transparent focus:outline-none py-1 px-2  lg:px-1`,

  profile: `   p-1 flex items-center gap-2 `,
  dp: `w-10 h-10 bg-[#edede9] rounded-lg`,
  icon: ``,
};

function Navbar({ open, setOpen }) {
  return (
    <div className={style.wrapper}>
      <div
        className={`flex gap-2 items-center lg:hidden text-sm font-semibold 
        }`}
      >
        <i
          className="text-[
    #7879F1] "
          onClick={() => setOpen((prev) => !prev)}
        >
          <GiHamburgerMenu />
        </i>
        WeFrameTech
      </div>
      <div className={style.search}>
        <i className="text-[#6418C3]">
          <BsSearch />
        </i>

        <input type="text" placeholder="Search here" className={style.input} />
      </div>
      <div className="hidden lg:flex">
        <a
          href="#"
          className="underline text-[#6418C3] text-base lg:text-xs font-bold"
        >
          Other Menu
        </a>
      </div>

      <Image
        src="/icons.svg"
        alt="icons"
        className="w-[184px] h-[75px] hidden lg:flex"
        width={300}
        height={300}
      />

      <Image
        src="/group.svg"
        alt="options"
        className="w-[8rem] h-[3rem] hidden lg:flex"
        width={300}
        height={300}
      />

      <div className={style.profile}>
        <div className={style.dp}></div>
        <div className="flex flex-col">
          <p className=" md:text-sm text-xs font-semibold">Instructor Day</p>
          <p className="text-[9px] text-[#7978F1]">super Admin</p>
        </div>
        <i className="text-[#6418C3]">
          <AiOutlineCaretDown />
        </i>
      </div>
    </div>
  );
}

export default Navbar;

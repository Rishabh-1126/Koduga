"use client";

import { useState } from "react";
import { Options } from "@/components/Menus";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineRight } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
const style = {
  wrapper: `flex fixed max-w-[350px] min-w-[300px] w-full flex-col rounded-xl  h-full p-4 bg-[#15132B] transition-transform duration-300 ease-in-out lg:transition-none lg:flex mr-2 `,
  title: `flex my-1 text-xl justify-around text-lg font-semibold`,
  mid: `flex my-2 pt-2 flex-col  w-full h-full justify-between  `,
  menu: `flex flex-col  p-2 `,
  head: `text-base tracking-wider font-bold mb-6 text-white text-start `,
  options: `flex w-full gap-5 justify-between capitalize text-lg font-semibold items-center tracking-wider`,
  tags: `flex gap-4`,
  icon: `ml-2 w-[30px] h-[30px]`,
  banner: `justify-center w-full  flex `,
  //   bannerImg: `w-50 h-50`,
  inactive: `text-[#7879F1]`,
  active: `text-[#6418C3]`,
  disable: `text-[#464366]`,
  new: `w-[1.7rem] h-[1.7rem]`,
};

const phn = {};
function Sidebar({ open, setOpen }) {
  return (
    <div
      className={`${style.wrapper}  ${
        open
          ? ` absolute z-[100]   translate-x-0 `
          : `-translate-x-full absolute lg:translate-x-0 lg:fixed  z-[100]`
      } `}
    >
      <div className={style.title}>
        WeFrameTech
        <i
          className="text-[
    #7879F1] hidden lg:block"
        >
          <GiHamburgerMenu />
        </i>
        <span onClick={() => setOpen((prev) => !prev)} className="lg:hidden">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            color="white"
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
            // style={{ color: white }}
          >
            <path d="M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"></path>
          </svg>
        </span>
      </div>
      <div
        className={`bg-[#211A75]  my-6 items-center gap-3 max-w-[300px] py-1 pl-4 w-full rounded-full ${
          open ? "flex" : "hidden"
        }  border-2 border-[#3079c6]`}
      >
        <i className="text-[#6418C3]">
          <BsSearch />
        </i>

        <input
          type="text"
          placeholder="Search here"
          className={`text-lg lg:text-base text-[white] placeholder-[white]-500 tracking-wide  border-0 bg-transparent focus:outline-none py-1 px-2`}
        />
      </div>
      <div className="w-full flex justify-center">
        <Image
          src="/icons.svg"
          alt="icons"
          className={`w-[250px] h-[75px]  ${open ? "flex" : "hidden"}`}
          width={300}
          height={300}
        />
      </div>
      <div className={style.mid}>
        <div className={style.menu}>
          <div className={style.head}>MAIN MENU</div>
          <div className="flex flex-col gap-3">
            {Options &&
              Options.map((ele, i) => (
                <div
                  className={`${style.options} ${
                    ele.status == "active"
                      ? style.active
                      : ele.status == "inactive"
                      ? style.inactive
                      : style.disable
                  }`}
                  key={i}
                >
                  <div className={style.tags}>
                    <Image
                      src={ele.icon}
                      alt="icon"
                      className={style.icon}
                      width={300}
                      height={300}
                    />
                    <p className="text-base">{ele.name}</p>
                  </div>
                  <div className="flex gap-1">
                    {ele.img && (
                      <Image
                        src={ele.img}
                        alt="img"
                        className={style.new}
                        // className="w-10 h-10"
                        width={300}
                        height={300}
                      />
                    )}
                    {ele.name == "Email" && (
                      <Image
                        src="/downarrow.svg"
                        alt="img"
                        className={style.new}
                        // className="w-10 h-10"
                        width={300}
                        height={300}
                      />
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className={style.banner}>
          <Image
            src="/banner.png"
            alt="banner"
            className="w-[12rem] h-[12rem]"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

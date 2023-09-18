"use client";
import Sidebar from "@/sections/Sidebar";
import Navbar from "@/sections/Navbar";
import Board from "@/sections/Board";
import { useState } from "react";

const style = {
  wrapper: `flex max-w-[1800px] w-full bg-[#0D0B21]   p-2  text-[#edf2f4]`,
  right: `flex flex-col flex-1 w-full px-4 lg:ml-[350px]`,
};
export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={style.wrapper}>
      <Sidebar open={isOpen} setOpen={setOpen} />
      <div className={style.right} style={{ overflowY: "scroll" }}>
        <Navbar open={isOpen} setOpen={setOpen} />
        <Board />
      </div>
    </div>
  );
}

import Card from "@/components/Card";
import { GoCommentDiscussion } from "react-icons/go";
import { TodoListInfo, ProgressInfo, Done } from "@/components/Menus";
import Image from "next/image";
import "@/components/style.css";
const style = {
  wrapper: `flex w-full h-full bg-[#0D0B21] flex-col  mt-5   w-full`,
  info: `bg-[#15132B] rounded-lg  justify-between gap-6 flex flex-col py-6 px-4 w-full `,
  leftInfo: `flex flex-col w-full gap-3  h-full justify-between`,

  rightInfo: `flex flex-col gap-3 justify-between items-end w-full h-full hidden lg:flex`,
  progress: `flex gap-2`,
  tables: `flex flex-1 gap-10 mt-2 w-full pb-[30px]`,
  columns: `flex flex-col gap-3 max-w-[284px] min-w-[284px] w-full  `,
  head: `flex items-center py-2 px-3 justify-between`,
};

function Board() {
  return (
    <div className={style.wrapper}>
      <div className={style.info}>
        <div className="flex gap-2 w-full ">
          <Image
            src="/btnback.svg"
            alt="back"
            className="w-8 h-8"
            width={300}
            height={300}
          />
          <div className={style.leftInfo}>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-lg">School November Tasks</p>
              <p className="text-xs">
                Created by Instructor Day on November 31, 2022
              </p>
            </div>
          </div>
          <div className={style.rightInfo}>
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-sm">Centered Martial Arts</p>
                <p className="text-xs">Sunnyvale,Ca</p>
              </div>
              <span className="p-1 rounded-xl bg-[white]">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  className="w-9 h-9  "
                  width={300}
                  height={300}
                />
              </span>
            </div>
          </div>
          <Image
            src="/threedot.svg"
            alt="dot"
            className="w-6 h-6 "
            width={300}
            height={300}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 30px",
          }}
        >
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <Image
              src="/peopleCircle.svg"
              alt="circle"
              className="w-[8rem] hidden lg:flex"
              width={300}
              height={300}
            />
            <button className="py-2 px-3 rounded-xl focus:border-white-500 focus:border-2  bg-[#8338ec] text-white flex items-center gap-2">
              <Image
                src="/add-friend.svg"
                alt="friend"
                className="w-5 h-5 "
                width={300}
                height={300}
              />
              <p className="text-base md:text-xs">Invite People</p>
            </button>
            <button className="py-2 px-4 rounded-xl   bg-[black] border-[#8338ec] border-2 text-sm md:text-xs">
              Private
            </button>
            <button className="py-2 px-4  rounded-xl   bg-[#7879f1]   text-sm md:text-xs">
              Edit
            </button>
            <button className="py-2 px-3 rounded-xl flex gap-2 items-center bg-[black] border-2 border-[#8338ec] focus:border-2 ">
              <i className="text-lg md:text-sm">
                <GoCommentDiscussion />
              </i>
              <p className="text-sm md:text-xs">45 Comments</p>
            </button>
          </div>
          <div
            className="flex
          items-center "
          >
            <p className="mr-[15px] text-xs font-semibold">
              Total Progress 60%
            </p>
            <div
              style={{
                height: "10px",
                background: "#edf2f7",
                width: "300px",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  width: "60%",
                  background: "#805ad5",
                  height: "100%",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* table section */}
      <div
        className={style.tables}
        style={{ overflowX: "scroll", overflowY: "clip" }}
      >
        <div className={`${style.columns} `}>
          <div className={style.head}>
            <p className="text-base ">To-Do-List(24)</p>
            <span className="flex items-center justify-center">
              <Image
                src="/btnAdd.svg"
                alt="ad"
                className="w-[36px] h-[36px] "
                width={300}
                height={300}
              />
            </span>
          </div>
          {TodoListInfo &&
            TodoListInfo.map((ele, i) => (
              <Card
                tag={ele.tag}
                clr={ele.color}
                description={ele.description}
                imgLink={ele.img}
                barLink={ele.bar}
              />
            ))}
        </div>

        <div className={`${style.columns} `}>
          <div className={style.head}>
            <p className="text-base">In Progress(2)</p>
            <Image
              src="/btnAdd2.svg"
              alt="ad"
              className="w-[36px] h-[36px]"
              width={300}
              height={300}
            />
          </div>
          {ProgressInfo &&
            ProgressInfo.map((ele, i) => (
              <div className="bg-[black] rounded-xl relative">
                <Card
                  // key={i}
                  tag={ele.tag}
                  clr={ele.color}
                  description={ele.description}
                  imgLink={ele.img}
                  barLink={ele.bar}
                  tilt
                />
              </div>
            ))}
        </div>
        <div className={`${style.columns} `}>
          <div className={style.head}>
            <p className="text-base">Done(3)</p>
            <Image
              src="/btnAdd2.svg"
              alt="ad"
              className="w-[36px] h-[36px]"
              width={300}
              height={300}
            />
          </div>
          {Done &&
            Done.map((ele, i) => (
              <Card
                // key={i}
                tag={ele.tag}
                clr={ele.color}
                description={ele.description}
                imgLink={ele.img}
                barLink={ele.bar}
              />
            ))}
        </div>
        <div className={`${style.columns} `}>
          <div className={style.head}>
            <p className="text-base">Revised(0)</p>
            <Image
              src="/btnAdd2.svg"
              alt="ad"
              className="w-[36px] h-[36px]"
              width={300}
              height={300}
            />
          </div>
          <div className="flex flex-col p-4 gap-4 w-full bg-[#211A75] rounded-xl">
            <div className="py-3 px-4 bg-[#15132B] capitalize border-2 border-[#7879F1] text-[#7879F1] border-dotted rounded-lg">
              Move card here
            </div>
          </div>
        </div>
        <div className={`${style.columns} `}>
          <div className={style.head}>
            <p className="text-base ">Contant(2)</p>
            <Image
              src="/btnAdd2.svg"
              alt="ad"
              className="w-[36px] h-[36px]"
              width={300}
              height={300}
            />
          </div>
          {TodoListInfo &&
            TodoListInfo.map((ele, i) => (
              <Card
                // key={i}
                tag={ele.tag}
                clr={ele.color}
                description={ele.description}
                imgLink={ele.img}
                barLink={ele.bar}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Board;

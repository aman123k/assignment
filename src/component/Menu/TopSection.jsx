import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

function TopSection() {
  return (
    <>
      <nav className=" border rounded-lg my-16 select-none">
        <ul>
          <li
            className=" cursor-pointer mx-3 my-4  flex justify-between items-center hover:bg-[#b1b4b6] px-3
          rounded-lg py-2.5"
          >
            <span>Design team</span>
            <span
              className=" border px-2.5 py-1
             rounded-lg text-[13px] text-[#b1b4b6] bg-white font-semibold"
            >
              X +1
            </span>
          </li>
          <li
            className=" cursor-pointer mx-3 my-4  flex justify-between items-center hover:bg-[#b1b4b6] px-3
          rounded-lg py-2.5"
          >
            <span>Marketing team</span>
            <span
              className=" border px-2.5 py-1
             rounded-lg text-[13px] text-[#b1b4b6] bg-white font-semibold"
            >
              X +2
            </span>
          </li>
          <li
            className=" cursor-pointer mx-3 my-4  flex justify-between items-center hover:bg-[#b1b4b6] px-3
          rounded-lg py-2.5"
          >
            <span>Development team</span>
            <span
              className=" border px-2.5 py-1
             rounded-lg text-[13px] text-[#b1b4b6] bg-white font-semibold"
            >
              X +3
            </span>
          </li>
          <li
            className=" cursor-pointer text-[#C8C9CA] font-bold flex gap-2 items-center border-t px-6
 py-4"
          >
            <AiOutlinePlus className=" text-xl" />
            Create a team
          </li>
        </ul>
      </nav>
    </>
  );
}

export default TopSection;

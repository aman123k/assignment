import React from "react";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";

function Footer() {
  return (
    <>
      <nav className=" mt-16 max-[1050px]:mt-60  max-[850px]:mt-16 ">
        <ul className=" flex flex-col gap-3">
          <li
            className=" flex items-center gap-2  max-[650px]:py-2.5 py-2.5 max-[1050px]:py-4 rounded-lg px-3 
          hover:bg-[#F4F5F6] cursor-pointer"
          >
            <IoPersonAddOutline className=" text-lg font-semibold" /> Invite
            teammates
          </li>
          <li
            className=" flex items-center justify-between  max-[650px]:py-2.5 py-2.5 max-[1050px]:py-4 rounded-lg px-3
          hover:bg-[#F4F5F6] cursor-pointer"
          >
            <span className=" flex items-center gap-2">
              <IoMdHelpCircleOutline className=" text-lg font-semibold" /> Help
              and first steps{" "}
            </span>
            <span className=" border rounded-lg px-2.5 py-1 drop-shadow-sm bg-white text-sm">
              06
            </span>
          </li>
          <li className=" flex items-center justify-between  max-[650px]:py-2.5 max-[1050px]:py-4 bg-[#F4F5F6] py-2.5 rounded-lg px-3">
            <span className="flex items-center gap-2 ">
              <span className="text-sm bg-white rounded-lg px-2.5 py-1 drop-shadow-sm">
                7
              </span>{" "}
              days left on trial
            </span>

            <button className=" text-white bg-[#1F2125]  max-[650px]:py-2.5 px-2.5 py-1.5 rounded-lg text-sm">
              Adding billing
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Footer;

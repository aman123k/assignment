import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import { FaRegFolder } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";

function Folder() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <header className=" flex justify-between items-center  max-[1050px]:mt-28 max-[660px]:mt-16 px-3">
        <h1 className=" text-[#C8C9CA] font-semibold tracking-wide">FOLDERS</h1>
        <GoPlus className=" text-2xl font-bold cursor-pointer text-[#C8C9CA]" />
      </header>
      <nav className=" my-3 select-none max-[1050px]:my-6 mx-3">
        <ul className=" max-[1050px]:gap-2 flex flex-col max-[650px]:gap-2">
          <li>
            <Link
              to="/product"
              className={` hover:bg-[#F4F5F6] max-[1050px]:py-4 max-[650px]:py-2.5 flex items-center justify-between px-3 py-2.5 rounded-lg ${
                isOpenMenu ? "bg-[#F4F5F6]" : ""
              }`}
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              <span className=" flex items-center gap-2">
                {" "}
                <FaRegFolder /> Products
              </span>
              <FaCaretDown
                className={`${
                  isOpenMenu
                    ? "rotate-180 duration-500 ease-in-out"
                    : "duration-500 ease-in-out"
                }`}
              />
            </Link>
            {isOpenMenu && (
              <ul
                className=" my-4 mx-8 flex flex-col duration-500 ease-in-out
              "
              >
                <li className=" px-3.5 max-[1050px]:p-4 py-2 hover:bg-[#F4F5F6] text-sm tracking-wide rounded-lg cursor-pointer">
                  Roadmap
                </li>
                <li className=" px-3.5 max-[1050px]:p-4 py-2 hover:bg-[#F4F5F6] text-sm tracking-wide rounded-lg cursor-pointer">
                  Feedback
                </li>
                <li className=" px-3.5 max-[1050px]:p-4 py-2 hover:bg-[#F4F5F6] text-sm tracking-wide rounded-lg cursor-pointer">
                  Performance
                </li>
                <li className=" px-3.5 max-[1050px]:p-4 py-2 hover:bg-[#F4F5F6] text-sm tracking-wide rounded-lg cursor-pointer">
                  Team
                </li>
                <li className=" px-3.5 max-[1050px]:p-4 py-2 hover:bg-[#F4F5F6] text-sm tracking-wide rounded-lg cursor-pointer">
                  Analyics
                </li>
                <li
                  className=" text-[#B1B4B6] px-3.5 py-2 flex items-center
              font-semibold gap-2 cursor-pointer text-sm tracking-wide rcursor-pointer"
                >
                  <CiCirclePlus className=" text-xl" />
                  Add new sub
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              to="/"
              className=" hover:bg-[#F4F5F6]  max-[650px]:py-2.5 max-[1050px]:py-4 flex items-center justify-between px-3 py-2.5 rounded-lg"
              onClick={() => setIsOpenMenu(false)}
            >
              <span className=" flex items-center gap-2">
                {" "}
                <FaRegFolder /> Sales
              </span>
              <FaCaretDown />
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className=" hover:bg-[#F4F5F6]  max-[650px]:py-2.5 max-[1050px]:py-4 flex items-center justify-between px-3 py-2.5 rounded-lg"
              onClick={() => setIsOpenMenu(false)}
            >
              <span className=" flex items-center gap-2">
                {" "}
                <FaRegFolder /> Design
              </span>
              <FaCaretDown />
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className=" hover:bg-[#F4F5F6]  max-[650px]:py-2.5 max-[1050px]:py-4 flex items-center gap-2 px-3 py-2.5 rounded-lg"
              onClick={() => setIsOpenMenu(false)}
            >
              <FaRegFolder /> Office
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className=" hover:bg-[#F4F5F6]  max-[650px]:py-2.5 max-[1050px]:py-4 flex items-center gap-2 px-3 py-2.5 rounded-lg"
              onClick={() => setIsOpenMenu(false)}
            >
              <FaRegFolder /> Legal
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Folder;

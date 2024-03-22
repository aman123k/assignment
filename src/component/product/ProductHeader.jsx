import React from "react";
import { FaRegCopy } from "react-icons/fa";
import { IoArrowBack, IoSettingsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { TbBrandFigma } from "react-icons/tb";
import { FaCaretDown } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import { PiSortAscendingBold } from "react-icons/pi";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { MdOutlineImportExport } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function ProducHeader() {
  const navigator = useNavigate();
  return (
    <>
      <header className=" flex  items-center gap-3 max-[650px]:gap-2.5 max-[650px]:gap-2 max-[650px]:pb-3 max-[650px]:pt-0 justify-between border-b py-3 px-6 max-[650px]:px-3">
        <IoArrowBack
          className=" max-[650px]:block hidden"
          onClick={() => navigator("/")}
        />
        <h1 className=" font-semibold text-lg max-[650px]:text-base">
          Products
        </h1>
        <div className=" flex items-center gap-2.5 max-[650px]:gap-3">
          <form
            action="#"
            className=" border rounded-lg flex items-center gap-px px-3 py-2 max-[650px]:w-44"
          >
            <CiSearch className=" flex-shrink-0" />
            <input
              type="text"
              className=" outline-none px-2"
              placeholder="Search for"
            />
          </form>
          <FaRegCopy />
          <IoSettingsOutline />
        </div>
      </header>
      <section
        className=" flex justify-between items-center gap-3 max-[650px]:items-start
      px-3 border-b py-3 flex-wrap"
      >
        <div className=" flex gap-2 flex-wrap ">
          <span
            className=" text-sm border rounded-lg w-max px-2 py-1.5 flex items-center
            gap-2 font-semibold cursor-pointer"
          >
            <TbBrandFigma /> All brands <FaCaretDown />
          </span>
          <span className=" text-sm border rounded-lg w-max px-3 py-1.5 flex items-center gap-2 font-semibold cursor-pointer">
            Desk <FaCaretDown />
          </span>
          <span className=" text-sm border rounded-lg w-max px-3 py-1.5 flex items-center gap-2 font-semibold cursor-pointer">
            Tages <FaCaretDown />
          </span>
          <span className=" text-sm border rounded-lg w-max px-3 py-1.5 flex items-center gap-2 text-[#b9baba] cursor-pointer font-semibold">
            <PiSortAscendingBold /> Sort
          </span>
          <span className=" text-sm border rounded-lg w-max px-3 py-1.5 flex items-center gap-2 text-[#c8c9ca] cursor-pointer font-semibold">
            <IoFilterOutline /> Filter
          </span>
        </div>
        <div className=" flex items-center max-[650px]:items-start gap-2">
          <span className=" text-sm border rounded-lg w-max px-3 py-1.5 flex items-center gap-2 cursor-pointer font-semibold">
            <AiOutlinePlusSquare /> Meeting
          </span>
          <span className=" text-sm border rounded-lg w-max px-3 py-1.5 flex items-center gap-2 cursor-pointer font-semibold">
            <MdOutlineImportExport /> Import/Export
          </span>
        </div>
      </section>
    </>
  );
}

export default ProducHeader;

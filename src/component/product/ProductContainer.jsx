import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import data from "../../data/data";
import { RxCross2 } from "react-icons/rx";
import { FaArchive } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { VscCommentDiscussion } from "react-icons/vsc";

function ProductContainer() {
  const [selectBrand, setSelectBrand] = useState([]);

  return (
    <>
      <section className="grid grid-cols-10 max-[650px]:mx-4 border-l border-t select-none max-[1050px]:grid-cols-7 capitalize max-[650px]:grid-cols-2">
        <div className=" border-r col-span-2 max-[650px]:col-span-1 text-sm truncate">
          <div className="flex border-b p-3 items-center justify-between">
            <div className=" flex items-center gap-2">
              <input type="checkbox" id="brand" className=" cursor-pointer" />
              <label
                htmlFor="brand"
                className="text-[#C8C9CA] cursor-pointer font-semibold "
              >
                Brand
              </label>
            </div>
            <span className=" float-right text-[#C8C9CA] font-semibold cursor-pointer">
              +
            </span>
          </div>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex border-b p-3 items-center justify-between"
              >
                <div className=" flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={item.name}
                    className=" cursor-pointer"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectBrand((pre) => [...pre, item.name]);
                      } else {
                        setSelectBrand(
                          selectBrand.filter((e) => item.name !== e)
                        );
                      }
                    }}
                  />
                  <img
                    className=" w-4 rounded-sm drop-shadow-md"
                    src={item.Image}
                    alt={item.name}
                  />
                  <label
                    htmlFor={item.name}
                    className=" cursor-pointer font-semibold "
                  >
                    {item.name}
                  </label>
                </div>
                <div
                  className={`flex items-center gap-1 ${
                    item.name.includes("Google")
                      ? "block"
                      : item.name.includes("invison")
                      ? "block"
                      : item.name.includes("shopsy")
                      ? "block"
                      : "hidden"
                  }`}
                >
                  <VscCommentDiscussion />{" "}
                  <span className=" text-[10px]">{index + 1}+</span>
                </div>
              </div>
            );
          })}
          <div className=" border-b py-3 flex justify-end px-4 font-semibold text-[#C8C9CA]">
            {data.length} count
          </div>
        </div>
        <div className="border-r col-span-2 max-[650px]:col-span-1 text-sm truncate">
          <h2 className=" border-b p-3">Description</h2>
          {data.map((item, index) => {
            return (
              <p key={index} className=" border-b p-3 truncate">
                {item.discription}
              </p>
            );
          })}
          <div className=" border-b flex items-center gap-2 py-3 justify-end px-4 font-semibold text-[#C8C9CA]">
            <FaPlus /> Add calculations
          </div>
        </div>
        <div className="border-r text-sm ">
          <h2 className="border-b p-3 ">Members</h2>

          {data.map((item, index) => {
            return (
              <div
                key={index}
                className=" flex items-center relative py-[22px] px-4 border-b gap-2"
              >
                {item.member.map((person, index) => {
                  return (
                    <img
                      key={index}
                      src={person}
                      alt={item.name}
                      className={`object-cover w-8 h-8 ml-2 rounded-full absolute left-${index} -top-${
                        index * 2
                      }`}
                    />
                  );
                })}
              </div>
            );
          })}
          <div className=" border-b py-3 flex text-[12px] justify-end px-4 font-semibold text-[#C8C9CA]">
            calculations
          </div>
        </div>
        <div className="border-b border-r text-sm truncate ">
          <h2 className="border-b p-3">Categories</h2>
          {data.map((Categorie, index) => {
            return (
              <div
                key={index}
                className=" items-center overflow-y-scroll  flex gap-2 py-[5px] px-2 border-b "
              >
                {Categorie.category.map((category, index) => {
                  return (
                    <div
                      key={index}
                      className={`border p-1.5 w-max text-[11px] rounded-lg ${
                        category.includes("B2B")
                          ? "border-[#b8a7f7] bg-[#F6F1FF] text-[#9474D9]"
                          : category.includes("Automation")
                          ? "border-[#C4B17A] bg-[#FEF8CB] text-[#C4B17A]"
                          : category.includes("E-")
                          ? "border-[#629BAD] bg-[#DCF4FC] text-[#629BAD]"
                          : category.includes("B2C")
                          ? "border-[#BD81AB] bg-[#F7E4EB] text-[#BD81AB]"
                          : category.includes("SAAS")
                          ? "border-[#69A187] bg-[#DBF8E2] text-[#69A187]"
                          : "border-[#8B68D5] bg-[#d5c4f9] text-[#8B68D5]"
                      }`}
                    >
                      {category}
                    </div>
                  );
                })}
              </div>
            );
          })}

          <div className="py-3 flex text-[12px] justify-end px-4 font-semibold text-[#C8C9CA]">
            calculations
          </div>
        </div>
        <div className="border-b border-r text-sm truncate ">
          <h2 className="border-b p-3">Tags</h2>
          {data.map((Categorie, index) => {
            return (
              <div
                key={index}
                className=" items-center overflow-y-scroll  flex gap-2 py-[5px] px-2 border-b "
              >
                {Categorie.tages.map((tag, index) => {
                  return (
                    <div
                      key={index}
                      className="border p-1.5 w-max text-[11px] rounded-lg  "
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
            );
          })}

          <div className="py-3 flex text-[12px] justify-end px-4 font-semibold text-[#C8C9CA]">
            calculations
          </div>
        </div>
        <div className="border-b border-r col-span-2 max-[650px]:col-span-1  text-sm truncate ">
          <h2 className="border-b p-3">Next meeting</h2>
          {data.map((Categorie, index) => {
            return (
              <div
                key={index}
                className={`items-center flex gap-2 py-[7px] px-2 border-b`}
              >
                <div
                  key={index}
                  className={`border p-1 w-max text-[11px] rounded-lg ${
                    Categorie.nextMeeting.includes("contact")
                      ? "border-[#b8a7f7] bg-[#F6F1FF] text-[#9474D9]"
                      : Categorie.nextMeeting.includes("tomorrow")
                      ? "border-[#C4B17A] bg-[#FEF8CB] text-[#C4B17A]"
                      : Categorie.nextMeeting.includes("month")
                      ? "border-[#629BAD] bg-[#DCF4FC] text-[#629BAD]"
                      : "border-[#69A187] bg-[#DBF8E2] text-[#69A187]"
                  }`}
                >
                  {Categorie.nextMeeting}
                </div>
              </div>
            );
          })}

          <div className=" flex items-center gap-2 py-3 justify-end px-4 font-semibold text-[#C8C9CA]">
            <FaPlus /> Add calculations
          </div>
        </div>

        <div className="border-b border-r text-sm min-w-min">
          <h2 className=" border-b p-3">
            <FaPlus className=" text-xl text-[#C8C9CA]" />
          </h2>
          {data.map((i, index) => {
            return <div key={index} className=" border-b py-[22px]"></div>;
          })}
        </div>
      </section>
      {/* delete contant */}
      {selectBrand.length !== 0 && (
        <section
          className=" max-[650px]:w-[80%] justify-center text-sm  border capitalize mt-56 max-[850px]:mt-14  max-[1050px]:mt-16 bg-white drop-shadow-md w-max items-center
       flex flex-wrap  gap-3 ml-[50%] translate-x-[-50%] px-6 py-3.5 rounded-lg"
        >
          <div className=" max-[650px]:text-sm flex gap-2 items-center">
            <span className=" bg-black text-white px-2 rounded-full">
              {selectBrand.length}
            </span>
            <span>selected</span>
          </div>
          <div className=" max-[650px]:text-sm flex gap-2 items-center border px-3 py-1.5 rounded-lg">
            <span className="px-2 rounded-full">
              <FaArchive />
            </span>
            <span>archive</span>
          </div>
          <div className=" max-[650px]:text-sm flex text-red-600 border-red-600 gap-2 items-center border px-3 py-1.5 rounded-lg">
            <span className="px-2 rounded-full">
              <MdDelete />
            </span>
            <span>delete</span>
          </div>
          <div className=" max-[650px]:text-sm flex gap-px items-center border px-3 py-1.5 rounded-lg">
            <span>more</span>
            <span className="px-2 rounded-full">
              <FaCaretDown />
            </span>
          </div>

          <div className=" cursor-pointer" onClick={() => setSelectBrand([])}>
            <RxCross2 />
          </div>
        </section>
      )}
    </>
  );
}
export default ProductContainer;

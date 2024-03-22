import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import data from "../../data/data";
import { RxCross2 } from "react-icons/rx";
import { FaArchive } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";

function ProductContainer() {
  const [selectBrand, setSelectBrand] = useState([]);

  return (
    <>
      <section className="grid grid-cols-10 max-[650px]:mx-4 max-[650px]:border select-none max-[1050px]:grid-cols-7 capitalize max-[650px]:grid-cols-2">
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
                    className=" w-4 rounded-lg drop-shadow-md"
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
                className=" flex items-center py-1.5 px-2 border-b gap-2"
              >
                {item.member.map((person, index) => {
                  return (
                    <img
                      key={index}
                      src={person}
                      alt=""
                      className=" w-8 h-8 rounded-full"
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
                className=" items-center  flex gap-2 py-[5px] px-2 border-b "
              >
                {Categorie.category.map((category, index) => {
                  return (
                    <div
                      key={index}
                      className="border p-1.5 w-max text-[11px] rounded-lg  "
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
          {data.map((item, index) => {
            return (
              <p key={index} className=" border-b p-3 truncate">
                {item.discription}
              </p>
            );
          })}
          <div className="py-3 flex text-[12px] justify-end px-4 font-semibold text-[#C8C9CA]">
            calculations
          </div>
        </div>
        <div className="border-b border-r max-[650px]:col-span-1 text-sm truncate col-span-2">
          <h2 className="p-3 border-b">Next Meeting</h2>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={` border-b p-3 truncate ${
                  item.nextMeeting.includes("tomorrow")
                    ? "text-[#94BFC9] "
                    : item.nextMeeting.includes("contact")
                    ? "text-red-600"
                    : item.nextMeeting.includes("month")
                    ? "text-gray-500"
                    : "text-green-600 "
                }`}
              >
                <span
                  className={`
                   px-4 py-1.5 rounded-lg tracking-wide ${
                     item.nextMeeting.includes("tomorrow")
                       ? "border-[#94BFC9] border "
                       : item.nextMeeting.includes("contact")
                       ? "border-red-600 border "
                       : item.nextMeeting.includes("month")
                       ? "border-gray-500 border "
                       : "border-green-600 border "
                   }}`}
                >
                  {item.nextMeeting}
                </span>
              </div>
            );
          })}
          <div className="py-3 items-center gap-2 flex justify-end px-4 font-semibold text-[#C8C9CA]">
            <FaPlus /> add calculations
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
          className=" max-[650px]:w-[80%] justify-center  capitalize mt-56 max-[850px]:mt-14  max-[1050px]:mt-16 bg-white drop-shadow-md w-max items-center
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

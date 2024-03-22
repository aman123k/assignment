import React from "react";

function ProductContainer() {
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 select-none">
        <div className=" border-r">
          <div className="flex border-b py-4 px-3 items-center gap-2">
            <input type="checkbox" id="brand" className=" cursor-pointer" />
            <label
              htmlFor="brand"
              className="text-[#C8C9CA] cursor-pointer font-semibold text-sm"
            >
              Brand
            </label>
          </div>
        </div>
        <div className="border-b border-r py-3 px-3">
          <h2>Description</h2>
        </div>
        <div className="border-b border-r py-3 px-3">
          <h2>Members</h2>
        </div>
        <div className="border-b border-r py-3 px-3">
          <h2>Categories</h2>
        </div>
        <div className="border-b border-r py-3 px-3">
          <h2>Tags</h2>
        </div>
        <div className="border-b border-r py-3 px-3">
          <h2>Next Meeting</h2>
        </div>
        <div className="border-b border-r py-3 px-3 min-w-min">
          <h2>+</h2>
        </div>
      </section>
    </>
  );
}
export default ProductContainer;

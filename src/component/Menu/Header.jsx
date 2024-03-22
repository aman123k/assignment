import React from "react";
import logo from "../../images/logo.png";
import user from "../../images/man.avif";

function Header() {
  return (
    <>
      <header className="  flex justify-between items-center">
        <div className=" flex gap-3 items-center">
          <img src={logo} className=" w-12 h-12 rounded-lg" alt="logo" />
          <div>
            <span className=" text-sm text-[#989797] font-semibold">INC</span>
            <h1 className=" font-semibold">InnovationHub</h1>
          </div>
        </div>
        <img
          src={user}
          className=" w-12 tracking-wide h-12 rounded-full"
          alt="user"
        />
      </header>
    </>
  );
}

export default Header;

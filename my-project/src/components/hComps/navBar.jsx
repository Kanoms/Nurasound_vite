import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import NavList from "../lists";

const Navbar = () => {
  return (
    <nav className="px-3 md:px-16 py-6 kflex text-white text-2xl font-spaceGrotesk">
      <div className="lg:hidden relative">
        <button className="dropdown-button onClick={toggleBtn}">
          <AiOutlineMenu />
        </button>

        <NavList className="dropdown-menu hidden flex-col gap-5 absolute bg-nGrey rounded-2xl px-3 py-2" />
      </div>
      <div className="kflex gap-4 lg:gap-[39.8px]">
        <img
          className="h-[22.203px]"
          src="https://res.cloudinary.com/duxfzk6uy/image/upload/v1688476859/Kanoms/nuraheaderlogo_dlutbc.png"
          alt="NuraSound"
        />

        <NavList className="hidden lg:kflex gap-[39.8px]" />
      </div>

      <div className="flex gap-2">
        <span>Cart</span>
        <span className="font-inter text-base align-top">(0)</span>
      </div>
    </nav>
  );
};

document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.querySelector(".dropdown-button");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  dropdownButton.addEventListener("click", function () {
    dropdownMenu.style.display =
      dropdownMenu.style.display === "flex" ? "none" : "flex";
  });
});

export default Navbar;

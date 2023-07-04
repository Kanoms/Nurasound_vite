import React from "react";
import Navbar from "./navBar";
import Button from "../buttons";

const Header = () => {
  return (
    <header className="hdbgimg bg-cover bg-centerbg-cover bg-center h-[100vh] w-[100vw]">
      <Navbar />

      <div className="kflex2 flex-col bottom-0 mt-[50vh] text-white gap-8 text-center">
        <h2 className="font-baiJamjuree text-xl md:text-[34px]">
          OUR BIGGEST SALE NOW LIVE
        </h2>

        <h1 className="font-spaceGrotesk text-5xl md:text-8xl font-medium">
          Black Friday Starts Now!
        </h1>

        <Button
          text="SHOP SALE NOW"
          className="wbtn font-baiJamjuree text-xl"
        />
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import Button from "../buttons";

const Main = () => {
  return (
    <main>
      <section>
        <div className="px-16 py-[100px]">
          <div className="kflex gap-5 items-center lg:items-baseline mb-14 flex-col lg:flex-row">
            <h2 className="text-white font-spaceGrotesk text-[65px] leading-[65px] text-center lg:text-left">
              Featured discounts
            </h2>

            <Button
              text="View all discounts"
              className="kflex2 text-nGreen uppercase gap-1"
            />
          </div>

          <div className="grid grid-rows-4 grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-[20px] xl:grid-cols-4 xl:grid-rows-1 [&>div]:bg-white [&>div]:h-[494.656px] [&>div]:rounded-[20px] justify-center items-center">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </main>
  );
};

export default Main;

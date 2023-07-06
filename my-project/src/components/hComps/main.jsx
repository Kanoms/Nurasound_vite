import React from "react";
import Button from "../buttons";
import Discount from "../discount";

const Main = () => {
  const nuraPhone =
    "https://res.cloudinary.com/duxfzk6uy/image/upload/v1688476860/Kanoms/Nuraphone_jke71u.png";
  const nuraTrue =
    "https://res.cloudinary.com/duxfzk6uy/image/upload/v1688476861/Kanoms/NuraTrue_upst6g.png";
  const nuraBuds =
    "https://res.cloudinary.com/duxfzk6uy/image/upload/v1688476859/Kanoms/NuraBuds_s0jhqc.png";
  const nuraBluetooth =
    "https://res.cloudinary.com/duxfzk6uy/image/upload/v1688476859/Kanoms/NuraBluetooth_hakche.png";
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

          <div className="grid grid-rows-4 grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-[20px] xl:grid-cols-4 xl:grid-rows-1 justify-center items-center">
            <div>
              <Discount
                percentOff="25"
                image={nuraPhone}
                imageDesc={"NuraPhone"}
                product="Nuraphone"
                oldPrice="399"
                newPrice="299.25"
              />
            </div>
            <div>
              <Discount
                percentOff="30"
                image={nuraTrue}
                imageDesc={"NuraTrue"}
                product="NuraTrue"
                oldPrice="199.99"
                newPrice="139.99"
              />
            </div>
            <div>
              <Discount
                percentOff="25"
                image={nuraBuds}
                imageDesc={"NuraBuds 2"}
                product="NuraBuds 2"
                oldPrice="119"
                newPrice="89.25"
              />
            </div>
            <div>
              <Discount
                percentOff="25"
                image={nuraBluetooth}
                imageDesc={"Nura Bluetooth 5.3 Audio Transmitter"}
                product="Nura Bluetooth® 5.3 Audio Transmitter"
                className="text-[28px] tracking-[-0.84px] leading-[28px] mt-[18px] mb-[2px] text-center"
                oldPrice="59"
                newPrice="44.25"
              />
            </div>
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

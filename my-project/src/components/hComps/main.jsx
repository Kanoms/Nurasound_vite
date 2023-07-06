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

          <div className="grid grid-rows-n4 grid-cols-n1 md:grid-cols-n2 md:grid-rows-2 gap-[20px] xl:grid-cols-n4 xl:grid-rows-1 justify-center items-center">
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
      <section>
        <div className="bg-gradient-to-r from-[#3633F5] via-[#3381F5] to-[#3381F5] relative flex flex-col items-center lg:flex-row">
          <div className="lg:absolute top-0">
            <img
              className="lg:h-[120vh] xl:h-auto"
              src="https://res.cloudinary.com/duxfzk6uy/image/upload/v1688476862/Kanoms/phone_nhrwe0.png"
              alt=""
            />
          </div>
          <div className="font-spaceGrotesk text-white py-16 lg:py-[200px] px-3 text-center lg:text-left md:px-10 lg:px-16 lg:ml-[50vw] flex flex-col items-center lg:items-start gap-[20px]">
            <h2 className="text-6xl lg:text-6xl md:text-[94px] md:leading-[94px] xl:text-[94px] xl:leading-[94px]">
              For your ears only.
            </h2>

            <p className="text-2xl lg:text-2xl md:text-[33px] md:leading-[37.95px] xl:text-[33px] xl:leading-[37.95px]">
              Normal hearing varies significantly from person to person, and
              these variations make a big difference to how you experience
              music.
            </p>

            <p className="text-2xl lg:text-2xl md:text-[33px] md:leading-[37.95px] xl:text-[33px] xl:leading-[37.95px]">
              The first time you use Nura earbuds, they measure your hearing to
              create your personalised hearing profile.
            </p>

            <Button text="LEARN MORE" className="tpbtn" />
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </main>
  );
};

export default Main;

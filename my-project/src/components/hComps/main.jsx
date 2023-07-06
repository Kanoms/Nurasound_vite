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
          <div className="lg:absolute top-0 z-[999] pt-16 lg:pt-0">
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
              these variations make a{" "}
              <span className="text-nGreen">big difference</span> to how you
              experience music.
            </p>

            <p className="text-2xl lg:text-2xl md:text-[33px] md:leading-[37.95px] xl:text-[33px] xl:leading-[37.95px]">
              The first time you use Nura earbuds, they{" "}
              <span className="text-nGreen">measure your hearing</span> to
              create your personalised hearing profile.
            </p>

            <Button text="LEARN MORE" className="tpbtn" />
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="chickenbg relative">
            <div className="flex flex-col text-center md:text-left pt-[187px] md:pt-0 md:absolute md:w-[50%] left-[50vw] top-[187px] text-white px-3 lg:px-16 gap-5 md:gap-8 xl:gap-5 font-spaceGrotesk">
              <h2 className="text-6xl md:text-6xl xl:text-[94px] xl:leading-[94px]">
                Play from any device.
              </h2>

              <p className="text-2xl md:text-2xl xl:text-[33px] xl:leading-[37.95px]">
                Your hearing profile is{" "}
                <span className="text-nGreen">stored on the earbuds</span>, and
                is applied to whatever you listen to,{" "}
                <span className="text-nGreen">on any device</span>.
              </p>

              <p className="text-2xl md:text-2xl xl:text-[33px] xl:leading-[37.95px]">
                Use the Nura app to create a hearing profile, configure touch
                buttons, adjust immersion mode and more.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="guybg py-[200px] text-white font-spaceGrotesk kflex2 flex-col">
            <h2 className="text-5xl md:text-7xl mb-5 text-center">
              A sound subscription
            </h2>

            <p className="text-2xl md:text-[33px] md:leading-[42.9px] text-center px-3 lg:w-[900px] lg:px-0">
              Experience personalised sound across our devices on a low monthly
              fee with NuraNow. Cancel anytime.
            </p>

            <Button
              text="Discover NuraNow"
              className="uppercase blbtn2 mt-10 text-base md:text-2xl"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="kflex2 px-3 pt-16 py-16 lg:pb-36 md:px-16">
          <div className="bg-lGrey bg-contain xl:max-w-[1312px] max-h-72 md:max-h-96 lg:max-h-[738px] w-full h-[50vw] m-auto relative kflex2">
            <svg
              width="240"
              height="176"
              viewBox="0 0 240 176"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-24 h-16 md:w-40 md:h-32 lg:w-52 lg:h-36 xl:w-60 xl:h-44"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M96.5713 120.073V49.7874L159.828 84.9303L96.5713 120.073ZM213.364 5.62349C194.729 0.58741 120 0.587402 120 0.587402C120 0.587402 45.2711 0.58741 26.6354 5.62349C16.3542 8.39457 8.25628 16.5595 5.5081 26.9282C0.514145 45.7203 0.51416 84.9303 0.51416 84.9303C0.51416 84.9303 0.514145 124.139 5.5081 142.932C8.25628 153.301 16.3542 161.466 26.6354 164.238C45.2711 169.273 120 169.273 120 169.273C120 169.273 194.729 169.273 213.364 164.238C223.646 161.466 231.743 153.301 234.492 142.932C239.486 124.139 239.486 84.9303 239.486 84.9303C239.486 84.9303 239.486 45.7203 234.492 26.9282C231.743 16.5595 223.646 8.39457 213.364 5.62349Z"
                fill="#C2C2C2"
              />
            </svg>
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
};

export default Main;

import React from "react";
import Footlist from "../footlist";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black pt-[90px] pb-[30px] px-3 lg:px-16">
        <div className="text-[#EBEBEB] font-spaceGrotesk text-xl flex flex-col gap-10 md:grid md:grid-cols-ft1 md:gap-3 lg:gap-10 ">
          <div className="text-center flex flex-col items-center md:block md:text-left">
            <img
              src="https://res.cloudinary.com/duxfzk6uy/image/upload/v1688476860/Kanoms/nurafooterlogo_yleggd.png"
              alt="NuraSound logo"
            />

            <p className="pt-[30px]">
              Nura designs headphones tuned to you. Bringing you closer to music
              with personalised sound.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <Footlist
                item1="Shop"
                item2="NuraTrue Pro"
                item3="Audio Transmitter"
                item4="NuraTrue"
                item5="NuraBuds"
                item6="Nuraphone"
                item7="NuraLoop"
                item8="Accessories"
                item9="Subscription"
              />
            </div>
            <div>
              <Footlist
                item1="Info"
                item2="Why Nura?"
                item3="Shipping"
                item4="Returns"
                item5="Warranty"
                item6="Patents"
              />
            </div>
            <div>
              <Footlist
                item1="SUPPORT"
                item2="Help Centre"
                item3="Contact Us"
              />
            </div>
            <div>
              <Footlist
                item1="SOCIALS"
                item2="Instagram"
                item3="Facebook"
                item4="YouTube"
                item5="Tidal"
                item6="Twitter"
                item7="Discord"
              />
            </div>
          </div>
        </div>
        <div className="kflex flex-col md:flex-row text-[#737373] text-sm mt-[50px] font-inter">
          <span className="text-center">
            Copyright © 2022 Nura Operations Pty Ltd. All rights reserved.
          </span>

          <ul className="kflex gap-[9.8px]">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Legal</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

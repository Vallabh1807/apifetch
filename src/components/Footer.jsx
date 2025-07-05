import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaBagShopping } from "react-icons/fa6";
import { TiSocialFacebookCircular, TiSocialGithubCircular, TiSocialInstagramCircular, TiSocialTwitterCircular } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full h-full bg-zinc-100 py-20 ">
        <div className="mx-20 bg-white rounded-4xl p-10 border-1">
          <h1 className="text-5xl font-semibold text-center leading-15">
            Join our 👗 fashion circle for exclusive <br />
            updates, trends, and offers. 📰 Subscribe <br /> now for a style
            upgrade!
          </h1>
          <div className="mt-10 flex items-center justify-center gap-5">
            <form>
              <input
                className="mx-10 border-1 rounded-full w-70 px-5 py-2"
                type="text"
                placeholder="Enter your email"
              />
              <button className="bg-yellow-200/80 px-5 py-2 rounded-full border-1 font-medium">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
        <div className="mx-20 bg-purple-300 rounded-4xl mt-10 ">
          <div className=" bg-purple-200 rounded-4xl flex justify-between gap-20 items-center px-4 py-5">
            <NavLink to="/">
              <h1 className="text-2xl font-bold text-fuchsia-950 font-serif">
                ZARE
              </h1>
            </NavLink>

            <nav className="flex gap-15 ">
              <button>New Arrivals</button>
              <button>Best Sellers</button>
              <button>Collections</button>
              <button>30% Off</button>
              <button>Low Price</button>
              <button>Black Friday</button>
            </nav>
            <div className="flex gap-5">
            <FaBagShopping size={20} />
            <CgProfile size={20}/>
            </div>
          </div>
            <div className="px-4 flex justify-between py-5">
                <h1>Terms & Conditions</h1>
                <h1>Copyright 2025. Design by Vallabh</h1>
                <div className="flex gap-2">
                    <TiSocialFacebookCircular size={30}/>
                    <TiSocialInstagramCircular size={30}/>
                    <TiSocialTwitterCircular size={30} />
                    <TiSocialGithubCircular size={30}/>

                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

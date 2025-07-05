import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/products");
  };

  return (
    <>
      <div>
        <div className="h-screen w-full bg-fuchsia-200 pt-10 flex">
          <div className="h-[450px] w-[320px] rounded-2xl overflow-hidden mx-40 relative">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=420&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="model"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-between px-4">
              {/* Left Arrow */}
              <button className="bg-yellow-100 text-black p-2 rounded-full hover:bg-fuchsia-200 shadow cursor-pointer">
                <IoIosArrowBack size={24} />
              </button>
              <button className="bg-yellow-100 text-black p-2 rounded-full hover:bg-fuchsia-200 shadow cursor-pointer">
                <IoIosArrowForward size={24} />
              </button>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
              <button className="bg-yellow-100/70 text-black px-2 py-2 rounded-full hover:hover:bg-yellow-100 cursor-pointer shadow-lg">
                <IoEyeOutline />
              </button>
            </div>
          </div>

          <div className="">
            <h1 className="text-5xl  font-bold leading-snug mb-4">
              We're unveiling Chic,
              <br />
              your ultimate fashion <br />
              destination
            </h1>
            <p className="text-lg  text-gray-700 max-w-md mt-10">
              Explore an extensive collection, curated to redefine your
              wardrobe. Elevate your fashion quotient effortlessly.
            </p>
            <button
              onClick={handleClick}
              className=" flex items-center justify-center mt-20 bg-yellow-200 text-black px-4 py-2 rounded-full hover:hover:bg-fuchsia-300 cursor-pointer shadow-lg active:scale-95"
            >
              View Products
              <span>
                <IoIosArrowForward size={20} />
              </span>
            </button>
          </div>
        </div>
        <div>
          <h1 className="mt-20 font-semibold text-5xl text-center">
            Style by Occation:Explore Our Collection
          </h1>
          <div className="mt-10 flex justify-center items-center gap-10 mb-10 r">
            <button className="bg-fuchsia-200 px-4 py-1 rounded-full active:bg-fuchsia-200 cursor-pointer border-1">
              Man
            </button>
            <button className="bg-yellow-200 px-4 py-1 rounded-full active:bg-fuchsia-200 cursor-pointer border-1">
              Women
            </button>
            <button className="bg-yellow-200 px-4 py-1 rounded-full active:bg-fuchsia-200 cursor-pointer border-1">
              Kids
            </button>
            <button className="bg-yellow-200 px-4 py-1 rounded-full active:bg-fuchsia-200 cursor-pointer border-1">
              30% Off
            </button>
            <button className="bg-yellow-200 px-4 py-1 rounded-full active:bg-fuchsia-200 cursor-pointer border-1">
              Collections
            </button>
            <button className="bg-yellow-200 px-4 py-1 rounded-full active:bg-fuchsia-200 cursor-pointer border-1">
              Best Sellers
            </button>
          </div>

          <div className=" m-10 flex justify-between items-center flex-wrap">
            <button className="bg-fuchsia-200 px-4 relative py-1 h-50 w-70 rounded-3xl active:bg-fuchsia-200 mt-5 font-semibold text-xl">
              Comfort Casuals
              <span className="absolute bottom-4 left-4 bg-yellow-200/80 p-2 rounded-full border-1">
                <MdArrowOutward size={30} />
              </span>
            </button>
            <button className="bg-zinc-200/80 relative px-4 py-1 h-50 w-70 rounded-3xl active:bg-fuchsia-200 mt-5 font-semibold text-xl">
              Evening Elegance
              <span className="absolute bottom-4 left-4 bg-white/70 p-2 rounded-full border-1">
                <MdArrowOutward size={30} />
              </span>
            </button>
            <button className="bg-zinc-200/80 relative px-4 py-1 h-50 w-70 rounded-3xl active:bg-fuchsia-200 mt-5 font-semibold text-xl">
              Lounge & Relax
              <span className="absolute bottom-4 left-4 bg-white/70 p-2 rounded-full border-1">
                <MdArrowOutward size={30} />
              </span>
            </button>
            <button className="bg-zinc-200/80 px-4 relative py-1 h-50 w-70 rounded-3xl active:bg-fuchsia-200 mt-5 font-semibold text-xl">
              Weekend Vibes
              <span className="absolute bottom-4 left-4 bg-white/70 p-2 rounded-full border-1">
                <MdArrowOutward size={30} />
              </span>
            </button>
            <button className="bg-zinc-200/80 px-4 py-1 h-50 w-70 relative rounded-3xl active:bg-fuchsia-200 mt-5 font-semibold text-xl">
              Active Wear 
              <span className="absolute bottom-4 left-4 bg-white/70 p-2 rounded-full border-1">
                <MdArrowOutward size={30} />
              </span>
            </button>
            <button className="bg-zinc-200/80 px-4 py-1 h-50 w-70 relative rounded-3xl active:bg-fuchsia-200 mt-5 font-semibold text-xl">
              Work Essentials
              <span className="absolute bottom-4 left-4 bg-white/70 p-2 rounded-full border-1">
                <MdArrowOutward size={30} />
              </span>
            </button>
            <button className="bg-zinc-200/80 px-4 py-1 h-50 w-70 relative rounded-3xl active:bg-fuchsia-200 mt-5 font-semibold text-xl">
              Formal Attire
              <span className="absolute bottom-4 left-4 bg-white/70 p-2 rounded-full border-1">
                <MdArrowOutward size={30} />
              </span>
            </button>
            <button className="bg-zinc-200/80 px-4 py-1 h-50 w-70 relative rounded-3xl active:bg-fuchsia-200 mt-5 font-semibold text-xl">
              Seasonal Trends
              <span className="absolute bottom-4 left-4 bg-white/70 p-2 rounded-full border-1 ">
                <MdArrowOutward size={30} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

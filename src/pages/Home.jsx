import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate("/products")
  }

  return (
    <>
      <div className="h-screen w-full bg-fuchsia-200 pt-10 flex">
        <div className="h-[450px] w-[320px] rounded-2xl overflow-hidden mx-30 relative">
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
            <button className="bg-yellow-100 text-black px-4 py-2 rounded-full hover:hover:bg-fuchsia-200 cursor-pointer shadow-lg">
              Order Now
            </button>
          </div>
        </div>

        <div className="">
          <h1 className="text-5xl  font-bold leading-snug mb-4">
            We're unveiling Chic,<br />
            your ultimate fashion <br />
            destination
          </h1>
          <p className="text-lg  text-gray-700 max-w-md mt-10">
            Explore an extensive collection, curated to redefine your wardrobe.
            Elevate your fashion quotient effortlessly.
          </p>
          <button onClick={handleClick} className=" flex items-center justify-center mt-20 bg-yellow-100 text-black px-4 py-2 rounded-full hover:hover:bg-fuchsia-200 cursor-pointer shadow-lg active:scale-95">
              View Products <span><IoIosArrowForward size={20}/></span> 
            </button>
        </div>
      </div>
    </>
  );
};

export default Home;

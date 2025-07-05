import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [product, setproduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => setproduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1) % product.length);
  };
  const goToNext = () => {
    setCurrentIndex((prev) => (prev - 1 + product.length) % product.length);
  };
  const navigate2 = useNavigate();
  const goToProduct = () => {
    const currentProduct = product[currentIndex];
    navigate2(`/products/${currentProduct.id}`);
  };

  return (
    <>
      <div>
        <div className="h-screen w-full bg-fuchsia-200 pt-10 flex">
          <div className="h-[450px] w-[320px] rounded-2xl overflow-hidden mx-40 relative bg-white shadow-lg">
            {product.length > 0 && product[currentIndex] ? (
              <img
                className="h-full w-full object-contain"
                src={product[currentIndex].image}
                alt={product[currentIndex].title}
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-gray-100 text-gray-500">
                Loading...
              </div>
            )}
            <div className="absolute inset-0 z-10 flex items-center justify-between px-4">
              {/* Left Arrow */}
              <button
                onClick={goToPrev}
                className="bg-yellow-100 text-black p-2 rounded-full hover:bg-fuchsia-200 shadow cursor-pointer"
              >
                <IoIosArrowBack size={24} />
              </button>
              <button
                onClick={goToNext}
                className="bg-yellow-100 text-black p-2 rounded-full hover:bg-fuchsia-200 shadow cursor-pointer"
              >
                <IoIosArrowForward size={24} />
              </button>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
              <button
                onClick={goToProduct}
                className="bg-yellow-100/70 text-black px-2 py-2 rounded-full hover:hover:bg-yellow-100 cursor-pointer shadow-lg"
              >
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

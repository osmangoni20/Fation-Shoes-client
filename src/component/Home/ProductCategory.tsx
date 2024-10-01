import React from "react";

import fationImage from '../../assets/fation3.png'
const ProductCategory = () => {
  return (
    <div className="h-[1000px]">
      <div>
        <div className="my-2 px-6">
          <h3 className="md:text-5xl text-3xl py-2 md:text-left text-center">
            <span className="font-bold text-[#514F4D]">Meet</span>
            <span className="font-normal"> Categories</span>
          </h3>
        </div>
        <div className="relative">
          <div className="md:flex block justify-around gap-5 px-8">
            <div className="p-8 bg-[#514F4D] text-white z-20 sm:w-full md:w-[45%] rounded-md">
              <p className="border-2 border-white rounded-full py-1 px-4 inline-block uppercase">
                Featured
              </p>
              <div className="py-3">
                <h3 className="text-2xl font-bold uppercase">Originals</h3>
                <p>Casual Shoe</p>
              </div>
              <p className="text-justify text-medium">
                Allow Me To Introduce An Outstanding Pair Of Shoes That Truly
                Surpasses Expectations. These Shoes Are A Testament To
                Exceptional Craftsmanship And Unparalleled Style
              </p>
              <button className="bg-[#514F4D]  hover:bg-white hover:text-[#514F4D] hover:border-[#514F4D] border-2 text-xl border-white px-4 rounded-2xl p-2 my-2 shadow-4xl">
                Find Products
              </button>
            </div>
            <div className="p-8 bg-[#207F99] mt-5 md:mt-0 text-white sm:w-full md:w-[45%] rounded-md z-20">
              <p className="border-2 border-white rounded-full py-1 px-4 inline-block uppercase">
                Featured
              </p>
              <div className="py-3">
                <h3 className="text-2xl font-bold uppercase">BESTSELLERS</h3>
                <p>2023 BEST SALES</p>
              </div>
              <p className="text-justify text-medium">
                From The Moment You Slip Them On, You'll Feel The Difference In
                Quality And Comfort. The Attention To Detail Is Remarkable, With
                Each Stitch And Contour Flawlessly Executed.
              </p>
              <button className="bg-[#207F99] hover:bg-white hover:text-[#514F4D] hover:border-[#514F4D] border-2 text-xl border-white px-4 rounded-2xl p-2 my-2 shadow-4xl">
                Find Products
              </button>
            </div>
          </div>

          <div className="h-[600px] hidden md:flex justify-between items-center z-10 absolute top-[80%] text-white w-full bg-[#000000]">
            <div className="w-[30%] space-y-3 p-16">
              <h5 className="font-bold text-md uppercase">All Products</h5>
              <h3 className="text-4xl ">Our Shoes</h3>
              <h3 className="text-2xl font-bold">During Testing</h3>

              <p className="text-justify py-4">
                Step into the world of unparalleled comfort and style with these
                exceptional shoes that are bound to leave a lasting impression
                wherever you go.
              </p>
              <button className="text-xl hover:bg-white hover:text-[#181818] 
              flex justify-between gap-2 items-center px-4 py-2 rounded-full
               border-2 border-[#207E98]">
               <span> Show More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 mt-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
            <div>
                <img src={fationImage} alt="" className="max-h-[600px] w-[600px]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;

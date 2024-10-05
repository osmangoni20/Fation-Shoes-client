import React from "react";
import { Link } from "react-router-dom";

  const Banner = () => {
    return (
      <>
        <div
        className={`lg:h-[600px] h-[400px] w-full py-5 pb-10 banner bg-[url('../../assets/image/top-Shoe-Banners-1.jpg')]`} >
        
          <div className="flex h-full flex-col justify-end lg:pl-36 ">
            <div className="text-white hidden lg:block">
              <div className="flex gap-5 ">
              <Link to={"/login"}>
              <button className="btn bg-secondary text-white px-10 text-xl hover:bg-secondary">Explore Now</button>
              </Link>
              <Link to={"/about"}>
              <button className="btn bg-primary  text-white px-10 text-xl hover:bg-primary">About Us</button>
              </Link>
              </div>
            </div>
          </div>
          
          {/* <div className="col-span-1 lg:order-2 lg:col-span-3">
            <figure>
              <img  src="https://img.freepik.com/premium-photo/isolated-footwear-display-white-background_431161-45297.jpg?w=740" className="w-full"/>
            </figure>
          </div> */}
        </div>
      </>
    );
  };

  export default Banner;

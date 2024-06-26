import { Link } from "react-router-dom";

  const Banner = () => {
    return (
      <>
        <div
        className="h-[600px] w-full py-5 pb-10 banner" >
        
          <div className="flex h-full flex-col justify-end pl-36 ">
            <div className="text-white ">
              <div className="flex gap-5">
              <Link to={"/login"}>
              <button className="btn bg-secondary text-white px-10 text-xl hover:bg-secondary">Explore Now</button>
              </Link>
              <Link to={"/about"}>
              <button className="btn bg-primary text-white px-10 text-xl hover:bg-primary">About Us</button>
              </Link>
              </div>
            </div>
          </div>
          
          {/* <div className="col-span-1 lg:order-2 md:col-span-3">
            <figure>
              <img  src="https://img.freepik.com/premium-photo/isolated-footwear-display-white-background_431161-45297.jpg?w=740" className="w-full"/>
            </figure>
          </div> */}
        </div>
      </>
    );
  };

  export default Banner;

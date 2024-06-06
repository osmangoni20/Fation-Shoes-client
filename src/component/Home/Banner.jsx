import { Link } from "react-router-dom";

  const Banner = () => {
    return (
      <>
        <div
        className="h-[400px] w-full py-5 grid  grid-cols-1 md:grid-cols-5" >
         

          <div className="col-span-1 order-2 lg:order-1 md:order-1 md:col-span-2 mx-auto h-full flex items-center">
            <div className="text-white">
              <h1 className="text-5xl font-serif font-bold">Welcome </h1>
              <h1 className="mb-5 text-5xl font-serif font-bold">Fation Shoes</h1>
              <div className="flex gap-5  py-8">
              <Link to={"/login"}>
              <button className="btn bg-secondary text-white px-10 text-xl hover:bg-secondary">Explore Now</button>
              </Link>
              <Link to={"/about"}>
              <button className="btn bg-primary text-white px-10 text-xl hover:bg-primary">About Us</button>
              </Link>
              </div>
            </div>
          </div>
          
          <div className="col-span-1 lg:order-2 md:col-span-3">
            <figure>
              <img  src="https://img.freepik.com/premium-photo/isolated-footwear-display-white-background_431161-45297.jpg?w=740" className="w-full"/>
            </figure>
          </div>
        </div>
      </>
    );
  };

  export default Banner;

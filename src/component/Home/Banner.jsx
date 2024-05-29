  const Banner = () => {
    return (
      <>
        <div
        className="h-[400px] grid grid-cols-5" >
         

          <div className="col-span-2 mx-auto h-full flex items-center">
            <div className="text-white">
              <h1 className="text-5xl font-serif font-bold">Welcome </h1>
              <h1 className="mb-5 text-5xl font-serif font-bold">Fation Shoes</h1>
              <div className="flex gap-5  py-8">
              <button className="btn bg-secondary text-white px-10 text-xl hover:bg-secondary">Get Started</button>
              <button className="btn bg-primary text-white px-10 text-xl hover:bg-primary">About Us</button>
              </div>
            </div>
          </div>
          
          <div className="col-span-3">
            <figure>
              <img  src="https://img.freepik.com/premium-photo/isolated-footwear-display-white-background_431161-45297.jpg?w=740" className="w-full"/>
            </figure>
          </div>
        </div>
      </>
    );
  };

  export default Banner;

  const Banner = () => {
    return (
      <>
        <div
        className="h-[400px] bannerBg" >
         

          <div className="mx-auto h-full flex items-center p-10">
            <div className="text-white">
              <h1 className="text-5xl font-serif font-bold">Welcome </h1>
              <h1 className="mb-5 text-5xl font-serif font-bold">Fation Shoes</h1>
              <div className="flex gap-5  py-8">
              <button className="btn bg-secondary text-white px-10 text-xl hover:bg-secondary">Get Started</button>
              <button className="btn bg-primary text-white px-10 text-xl hover:bg-primary">About Us</button>
              </div>
            </div>
       

          <div>
            {/* <figure>
              <img  src="https://img.freepik.com/premium-photo/training-light-shoes-with-shock-absorption-sneakers-blue-background_124507-41738.jpg?w=740" className="max-w-md "/>
            </figure> */}
          </div>
          </div>
          
         
        </div>
      </>
    );
  };

  export default Banner;

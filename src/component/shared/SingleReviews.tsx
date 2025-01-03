import React from 'react';
import { useAppSelector } from '../../redux/hooks';

const SingleReviews = ({review}) => {
  const {isAdmin}=useAppSelector(state=>state.userR)

  // const handleRemove=(id)=>{


  //   fetch(`https://fationshoe-server.vercel.app/review/${id}`,{
  //       method:"DELETE",
  //       headers:{
  //           "Content-type":"application/json"
  //       }
  //   }).then(data=>{
  //    console.log(data)
  //   })
  // }
  return (
        <div>
            
              <div
                className={`rounded-md font-montserrat shadow-xl p-4 ${ isAdmin?"bg-[#171A3B] text-white":"bg-[#514F4D] text-white"}  min-h-[250px] overflow-hidden text-black`}
              >
                <div className=" flex justify-between">
                  <div className=" flex gap-2 items-start">
                    <img
                      className=" h-[60px] w-[60px] rounded-full "
                      src={review?.img}
                    ></img>
                    <span>
                      <h3 className="font-serif  text-xl">
                        {review?.user_name}
                      </h3>
                      <p>{review?.date}</p>
                    </span>
                  </div>
                  {/* <div>
                       {
                        isAdmin&& <button
                        onClick={() => handleRemove(review?._id)}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded"
                      >
                        Remove
                      </button>
                       } 
                  </div> */}
                </div>
                <div>
                  <div className="flex items-center">
                    {[...Array(Number(review?.rating) || 0)].map(
                      (rating) => {
                        return (
                          <svg
                          key={"rating"}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#FCC522"
                            className="size-6"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        );
                      }
                    )}
                    {[...Array(5 - Number(review?.rating) || 0)].map(
                      (rating) => {
                        return (
                          <svg
                            key={rating}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                            />
                          </svg>
                        );
                      }
                    )}
                  </div>
                  <p className="text-justify font-lato py-2">
                    {review?.review.slice(0,350)}...
                  </p>
                </div>
              </div>
        </div>
    );
};

export default SingleReviews;
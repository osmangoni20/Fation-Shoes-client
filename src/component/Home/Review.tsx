import React, { useEffect, useState } from "react";
// import quoteImg from '../../assets/quote.png'
// const UserReview=[
//     {
//         id:"1",
//         user_name:"Mohamad Abdul Kader",
//         user_review_time:"6/25/2024",
//         user_image:"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         user_review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, laborum modi numquam laboriosam a porro quas repellendus, placeat cum error saepe consectetur explicabo unde. Minima, aperiam. Quisquam dolores adipisci distinctio"

//     },
//     {
//         id:"2",
//         user_name:"Abdur Rahman Rahat",
//         user_review_time:"6/25/2024",
//         user_image:"https://img.freepik.com/premium-photo/concept-people-with-young-man-yellow-background_185193-81811.jpg?size=626&ext=jpg&ga=GA1.1.291005766.1716642525&semt=sph",
//         user_review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, laborum modi numquam laboriosam a porro quas repellendus, placeat cum error saepe consectetur explicabo unde. Minima, aperiam. Quisquam dolores adipisci distinctio"
//     },
//     {
//         id:"3",
//         user_name:"Tabassum Khatun",
//         user_review_time:"6/25/2024",
//         user_image:"https://media.istockphoto.com/id/1309696402/photo/headshot-of-mid-adult-british-asian-woman-wearing-hijab.jpg?s=1024x1024&w=is&k=20&c=R0lcO4kkLSwKyyHmAncQ7BWD-tf29YCpmCFTnuWk6ho=",
//         user_review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, laborum modi numquam laboriosam a porro quas repellendus, placeat cum error saepe consectetur explicabo unde. Minima, aperiam. Quisquam dolores adipisci distinctio"
//     },
// ]
export type TReview = {
  _id: string;
  user_name: string;
  pd_category: string;
  pd_name: string;
  review: string;
  pd_rating: number;
  date: string;
  email: string;
  img: string;
};

const Review = () => {
  const [review, setReview] = useState<TReview[] | any>();
  useEffect(() => {
    fetch("https://fation-shoes.onrender.com/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  console.log(review);
  return (
    <div className="py-10">
      {review?.length > 0 && (
        <div>
          <h1 className="text-4xl text-center font-serif py-10 ">
            Clint's Testimonial
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 p-5">
            {review?.map((review) => (
              <div
                key={review._id}
                className=" p-4 rounded-md font-montserrat  text-black"
              >
                <div className=" flex justify-between">
                  <div className=" flex gap-2 items-start">
                    <img
                      className=" h-[60px] w-[60px] rounded-full "
                      src={review?.img}
                    ></img>
                    <span>
                      <h3 className="font-serif text_ghost text-xl">
                        {review?.user_name}
                      </h3>
                      <p>{review?.date}</p>
                    </span>
                  </div>
                  {/* <div>
                        <span className="flex justify-between items-center">
                        <img className='h-[50px] w-[50px]' src={quoteImg}/>
                        </span>
                        </div> */}
                </div>
                <div>
                  <div className="flex items-center">
                    {[...Array(Number(review?.pd_rating) || 0)].map(
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
                    {[...Array(5 - Number(review?.pd_rating) || 0)].map(
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
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;

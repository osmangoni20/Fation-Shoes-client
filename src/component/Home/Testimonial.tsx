import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleReviews from "../shared/SingleReviews";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Autoplay ,FreeMode} from 'swiper/modules';
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
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
  rating: number;
  date: string;
  email: string;
  img: string;
};

const Testimonial = ({title}) => {
  const [review, setReview] = useState<TReview[] | any>();
  useEffect(() => {
    fetch("https://fationshoe-server.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  console.log(review);
  return (
    <div className="py-10">
      {review?.data?.length > 0 && (
        <div>
          <h1 className="lg:text-5xl text-4xl text-center font-serif py-10 ">
           {title}
          </h1>
          <Swiper
style={{paddingTop:"20px"}}
breakpoints={
  {
    340:{
      slidesPerView:1,
      spaceBetween:15
    },
    425:{
      slidesPerView:1,
      spaceBetween:15
    },
    768:{
      slidesPerView:2,
      spaceBetween:20
    },
    1024:{
      slidesPerView:2,
      spaceBetween:20
    }
  }
}
      // install Swiper modules
      modules={[Pagination, Autoplay, FreeMode]}    
      slidesPerView={3}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      freeMode={true}
     
      className="max-w-[90%] h-[400px] lg:max-w-[90%]"
    >
      {review?.data?.map((review)=>{
        return(
          <SwiperSlide key={review?._id} >
              
              <SingleReviews key={review?._id} review={review}/>
        </SwiperSlide>
        )
      })}

    </Swiper>
  
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 p-5">

          </div> */}
          <div className="flex justify-end">
          <Link to={"/reviewList"}>
                  <button className="border-2 p-3 rounded flex gap-2 items-center">
                    See More
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </span>
                  </button>
                </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonial;

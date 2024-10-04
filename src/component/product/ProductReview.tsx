import React, { useEffect, useState } from "react";
import Loader from "../shared/Loader";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import RatingStar from "../shared/RatingStar";
import { useAppSelector } from "../../redux/hooks";
import { TReview } from "../Home/Testimonial";
import { Link } from "react-router-dom";
import SingleReviews from "../shared/SingleReviews";

const ProductReview = ({ pd_info }) => {
  const { register, handleSubmit } = useForm();
  const [isOpen, setModel] = useState(false);
  const [isSubmitData, setSubmitData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isReviewWrite, setReviewWrite]=useState(false)
  const url = "https://fation-shoes.onrender.com/add_review";
  const { user }: any = useAuth();
const {name,img}=useAppSelector(state=>state.userR)
  const onSubmit = async (data) => {
    console.log(pd_info,user,name,img,data)
    setIsLoading(true);
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        ...pd_info,
        user_name:name|| user?.name || user?.displayName||"User",
        img: img||user?.photoURL,
        date: new Date().toLocaleDateString(),
        email: user?.email,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        setIsLoading(false);
        setModel(false);
        toast.success("Your Review Successfully Done. Thanks!!");
      });
  };
  const [review, setReview] = useState<TReview[] | any>();
  useEffect(() => {
    fetch(`http://localhost:3000/pd_review/${pd_info?.pd_id}`)
      .then((res) => res.json())
      .then((data) => setReview(data.reverse()));
  }, [isLoading]);
  console.log(review);

  const HandleWriteReview=()=>{
    setReviewWrite(!isReviewWrite)
  }
  return (
    <div className="">
      <h1 className="font-serif font-extralight text-sm md:text-md ">Reviews and Ratings</h1>
      <p onClick={HandleWriteReview} className="text-sm rounded-md cursor-pointer font-semibold inline-block p-2 border-2 border-[#207F99]">
        {user?.email?"Write Your Review":"Write Your Review after login"}</p>
      {
        isReviewWrite&&<div className="flex justify-center">
        <form
          className=" p-5 shadow  rounded-md min-w-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-wrap gap-5">
            <div className="w-full my-2">
              <label className="font-semibold" htmlFor="pd_rating">
                Rating
              </label>

              <select
                itemType="number"
                id="pd_rating"
                {...register("pd_rating")}
              >
                <option value={1}>
                 One Star
                </option>
                <option value={2}>
                 Two Star
                </option>
                <option value={3}>
                  Three Star
                </option>
                <option value={4}>
                  Four Star
                </option>
                <option value={5}>
                 Five Star
                </option>
              </select>
            </div>
            <div className="w-full my-2">
              <label className="font-semibold " htmlFor="review">
                Your Review
              </label>
              <textarea className="" id="review" {...register("review")} />
            </div>

            <div className="flex justify-center">
              <input
                type="submit"
                value={"Review"}
                className="cursor-pointer h-[40px] font-bold text-lg bg-primary text-white px-4 rounded"
              ></input>
            </div>
          </div>

          {isLoading && <Loader />}
        </form>
      </div>
      }

      <div className="py-10">
      {review?.length > 0 && (
        <div>
         
          <div className="grid grid-cols-1 md:grid-cols-3  gap-10">
            {review?.map((review: { _id: React.Key | null | undefined; })=><SingleReviews key={review?._id} review={review}/>)}
          </div>
          {/* <div className="flex justify-end">
          <Link to={"/client_reviews"}>
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
          </div> */}
        </div>
      )}
    </div>
    </div>
  );
};

export default ProductReview;

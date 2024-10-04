import React, { useState } from "react";
import Loader from "../shared/Loader";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../redux/hooks";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const { user }: any = useAuth();
    const {name,img}=useAppSelector(state=>state.userR)
    const [isLoading, setIsLoading]=useState(false)
    const baseurl = "https://fation-shoes.onrender.com/";

    const onSubmit = async (data) => {
        console.log(user,name,img,data)
        setIsLoading(true);
        await fetch(`${baseurl}/message`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            ...data,
            user_name:name|| user?.name || user?.displayName||"User",
            img: img||user?.photoURL,
            date: new Date().toLocaleDateString(),
            email: user?.email,
          }),
        })
          .then((res) => res.json())
          .then(async (data) => {
            setIsLoading(false);
            toast.success("Your Review Successfully Done. Thanks!!");
          });
      };
  return (
    <div>
      <div className="text-center flex flex-col justify-center">
        <div className="">
          <p className="text-sm font-medium pl-36">Fation Shoe</p>
          <h1 className="text-6xl font-lato font-semibold">Contact</h1>
        </div>
        <p>
          Reach out to our dedicated team any inquires, assistance, or
          information you need.
        </p>
      </div>
      <div className="md:flex md:flex-row md:justify-around flex flex-col-reverse gap-5 items-center">
      <div>
      <form
          className=" p-5  rounded-md w-full md:max-w-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-wrap gap-5">
          <div className="w-full my-2">
                    <label className="text-bold block" htmlFor="user_name">Your Name</label>
                    <input  type="text" id="user_name" {...register("user_name")}/>
                </div>
                <div className="w-full my-2">
                    <label className="text-bold block" htmlFor="contact_subject">Subject</label>
                    <input  type="text" id="contact_subject" {...register("contact_subject")}/>
                </div>
            <div className="w-full my-2">
              <label className="font-semibold " htmlFor="user_message">
                Your Message
              </label>
              <textarea className="" id="user_message" {...register("user_message")} />
            </div>

            <div className="flex justify-center w-full">
              <input
                type="submit"
                value={"Send"}
                className="cursor-pointer h-[40px] font-bold text-lg bg-primary text-white px-4 rounded"
              ></input>
            </div>
          </div>

          {isLoading && <Loader />}
        </form>
      </div>
      <div className="w-[300px]">
        <ul className="space-y-8 px-2 pb-12">
        <li className="border-b-2  py-2 gap-1 
          border-b-gray-200 flex justify-end text-md font-medium items-center">
        <p >fationShoe@gmail.com</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-6"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
    </li>
    <li className="border-b-2 py-2 gap-1  border-b-gray-200 flex justify-end  font-medium items-center">
    <p>123 Anywhere St. Any City</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>
            <li className="border-b-2 py-2 gap-1  border-b-gray-200 flex justify-end  font-medium items-center">
            <p>www.fationshoe.com</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
              </svg>
            </li>
        
            <li className="border-b-2 py-2 gap-1  border-b-gray-200 flex justify-end  font-medium items-center">
            <p>+880198743874</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Contact;

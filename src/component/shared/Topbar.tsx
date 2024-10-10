import React from 'react';
import { Link } from 'react-router-dom';
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import whatsapp from "../../assets/whatsapp.png";
import facebook from "../../assets/facebook.png";
const Topbar = () => {
    return (
        <div className=''>
          <div className="flex h-[40px] w-full bg-[#EBEBEB] text-xl px-10 justify-center md:justify-between lg:justify-between items-center  py-2 text-black">
        <div className=' items-center gap-3 hidden md:flex lg:flex'>
          <span className='flex items-center gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
  <path fill-rule="evenodd" d="m3.855 7.286 1.067-.534a1 1 0 0 0 .542-1.046l-.44-2.858A1 1 0 0 0 4.036 2H3a1 1 0 0 0-1 1v2c0 .709.082 1.4.238 2.062a9.012 9.012 0 0 0 6.7 6.7A9.024 9.024 0 0 0 11 14h2a1 1 0 0 0 1-1v-1.036a1 1 0 0 0-.848-.988l-2.858-.44a1 1 0 0 0-1.046.542l-.534 1.067a7.52 7.52 0 0 1-4.86-4.859Z" clip-rule="evenodd" />
</svg>

          <p className=' block text-sm'>+8801878403884</p>
          </span>
          <span className='flex items-center gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
  <path fill-rule="evenodd" d="M1.756 4.568A1.5 1.5 0 0 0 1 5.871V12.5A1.5 1.5 0 0 0 2.5 14h11a1.5 1.5 0 0 0 1.5-1.5V5.87a1.5 1.5 0 0 0-.756-1.302l-5.5-3.143a1.5 1.5 0 0 0-1.488 0l-5.5 3.143Zm1.82 2.963a.75.75 0 0 0-.653 1.35l4.1 1.98a2.25 2.25 0 0 0 1.955 0l4.1-1.98a.75.75 0 1 0-.653-1.35L8.326 9.51a.75.75 0 0 1-.652 0L3.575 7.53Z" clip-rule="evenodd" />
</svg>

          <p className='text-sm'>fationshoe@gamil.com</p>
          </span>
        </div>
        <ul className="flex items-center gap-3 lg:left-0  justify-between">
          <li className="border-2   h-[30px]  w-[30px]  bg-white  border-[#F0F0F0] rounded-full p-1">
            <Link target="_blank" to={"https://wa.link/nas487"}>
              <img src={whatsapp} />
            </Link>
          </li>
          <li className="border-2   h-[30px]  w-[30px]   bg-white  border-[#F0F0F0] rounded-full p-1">
            <Link target="_blank" to={"https://youtube.com"}>
              <img  src={youtube} />
            </Link>
          </li>
          <li className="border-2   h-[30px]  w-[30px]   bg-white  border-[#F0F0F0] rounded-full p-1">

            <Link target="_blank" to={"/"}>
              <img src={facebook} />
            </Link>
          </li>
          <li className="border-2   h-[30px]  w-[30px]  bg-white border-[#F0F0F0] rounded-full p-1">
            <Link target="_blank" to={"https://x.com/osmangoni0827"}>
              <img src={twitter} />
            </Link>
          </li>
          <li className="border-2  h-[30px]  w-[30px]   bg-white border-[#F0F0F0] rounded-full p-1">
            <Link target="_blank" to={"https://www.instagram.com/"}>
              <img src={instagram} />
            </Link>
          </li>
        </ul>
      </div>
        </div>
    );
};

export default Topbar;
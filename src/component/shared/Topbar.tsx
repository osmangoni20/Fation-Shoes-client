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
          <div className="flex w-full bg-[#EDF2FA] text-xl px-2 justify-center lg:justify-between items-center  py-2 text-black">
        <h6 className='hidden lg:block'>+8801878403884</h6>
        <ul className="flex items-center gap-3 lg:left-0  justify-between">
          <li className="border-2   h-[40px] mt-2 w-[40px]  bg-white  border-[#F57F03] rounded-full p-2">
            <Link target="_blank" to={"https://wa.link/nas487"}>
              <img src={whatsapp} />
            </Link>
          </li>
          <li className="border-2   h-[40px] mt-2 w-[40px]  bg-white  border-[#F57F03] rounded-full p-2">
            <Link target="_blank" to={"https://youtube.com"}>
              <img src={youtube} />
            </Link>
          </li>
          <li
            className="border-2   h-[40px] mt-2 w-[40px] 
                                bg-white border-[#F57F03]
                                rounded-full p-2"
          >
            <Link target="_blank" to={"/"}>
              <img src={facebook} />
            </Link>
          </li>
          <li className="border-2   h-[40px] mt-2 w-[40px]  bg-white border-[#F57F03] rounded-full p-2">
            <Link target="_blank" to={"https://x.com/osmangoni0827"}>
              <img src={twitter} />
            </Link>
          </li>
          <li className="border-2   h-[40px] mt-2 w-[40px]  bg-white border-[#F57F03] rounded-full p-2">
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
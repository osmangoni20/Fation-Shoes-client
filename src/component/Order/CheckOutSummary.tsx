import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";


// eslint-disable-next-line react/prop-types
const CheckOutSummary = () => {
  const {total,subTotal,shippingCost}=useAppSelector(state=>state.cartR)

    return (
        <div>
             <div className="p-5 bg-white rounded-b-lg">
            <h4 className="text-2xl font-bold font-sans text-center">
              Checkout Summary
            </h4>

            <ul className="py-2">
              <li className="border-b-2 py-3 font-medium  flex justify-between border-dashed border-gray-400 text-lg">
                Subtotal:<span>{subTotal} Tk.</span>
              </li>
              <li className="border-b-2 py-3 font-medium  flex justify-between  border-dashed border-gray-400 text-lg">
                Shipping:<span>{shippingCost} Tk.</span>
              </li>
              <li className="border-b-2 py-3 border-dashed font-medium  flex justify-between  border-gray-400 text-lg">
                Total:<span>{total} Tk.</span>
              </li>
              <li className="text-md py-3 text-xl flex justify-between font-semibold font-sense">
                Payable Total:<span>{total} Tk.</span>
              </li>
            </ul>
            <div className="flex justify-center ">
              {subTotal> 0 && (
               <div>
                 <button className=" text-white btn_secondary text-xl w-full h-[60px]">
                  <Link to={"/order"}>Proceed Checkout</Link>
                </button>
               </div>
                
              )}
            </div>
          </div>
        </div>
    );
};

export default CheckOutSummary;
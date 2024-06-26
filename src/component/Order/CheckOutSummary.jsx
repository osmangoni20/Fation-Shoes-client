

// eslint-disable-next-line react/prop-types
const CheckOutSummary = ({subTotal}) => {
    return (
        <div>
             <div className="p-5 bg-white">
            <h4 className="text-2xl font-bold font-sans text-center">
              Checkout Summary
            </h4>

            <ul className="py-2">
              <li className="border-b-2 py-3 font-medium  flex justify-between border-dashed border-gray-400 text-lg">
                Subtotal:<span>{subTotal} Tk.</span>
              </li>
              <li className="border-b-2 py-3 font-medium  flex justify-between  border-dashed border-gray-400 text-lg">
                Shipping:<span>50 Tk.</span>
              </li>
              <li className="border-b-2 py-3 border-dashed font-medium  flex justify-between  border-gray-400 text-lg">
                Total:<span>{subTotal+50} Tk.</span>
              </li>
              <li className="text-md py-3 text-xl flex justify-between font-semibold font-sense">
                Payable Total:<span>{subTotal+50} Tk.</span>
              </li>
            </ul>
          </div>
        </div>
    );
};

export default CheckOutSummary;
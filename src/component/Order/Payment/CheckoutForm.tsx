import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import toast from "react-hot-toast";
import { clearCart } from "../../../redux/features/CartSlice";
import { useNavigate } from "react-router-dom";
import Modal from "../../shared/Modal";
import { orderPostApi } from "./orderApi";
import "./CheckoutForm.css";
import useAuth from "../../../hooks/useAuth";
import { paymentInfoUpdate } from "../../../redux/features/OrderSlice";
import Loader from "../../shared/Loader";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { shippingInfo, email, order_product, payment_info, price, status } =
    useAppSelector((state) => state.orderR);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [isModel, setModel] = useState(false);
  const [cardError, setError] = useState<string | undefined>();
  const [clientSecret, setClientSecret] = useState("");
  const { total } = useAppSelector((state) => state.cartR);
  const [transactionID, setTransactionID] = useState("");
  const { user }: any = useAuth();

  useEffect(() => {
    if (total < 0) {
      setError(
        " The amount must be greater than or equal to the minimum charge amount"
      );
    } else {
      fetch("https://fationshoe-server.vercel.app/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price: 500 }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.clientSecret);
          setClientSecret(data.clientSecret);
        });
    }
  }, [total]);
  const isClose = () => {
    setModel(false);
  };
  const isConfirmFromModel = async () => {
    setModel(false);
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    console.log(error, paymentMethod);
    if (!error && clientSecret && paymentMethod) {
      setError("");
      console.log(paymentMethod);
      // orderPostApi body from CheckoutSummary
    } else {
      setError(error?.message || "");
      console.log(error);
    }
    console.log(clientSecret);
    stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: "User",
          },
        },
      })
      .then(function (result) {
        console.log(result);
        // Handle result.error or result.paymentIntent
        const { paymentIntent, error } = result;
        if (paymentIntent?.status === "succeeded") {
          setLoading(false);
          const paymentInfo = {
            payment_method: paymentIntent.payment_method_types[0],
            transactionId: paymentIntent.id,
          };
          dispatch(paymentInfoUpdate(paymentInfo));
          setTransactionID(paymentIntent.id);
          const newOrder = {
            shippingInfo,
            email,
            date: new Date().toLocaleString(),
            price,
            status,
            order_product,
            paymentInfo,
            isDeleted:false
          };

          orderPostApi(newOrder)
            .then((res) => res.json())
            .then(async (data: any) => {
              toast.success("You Order Success");
              dispatch(clearCart());
              navigate("/");
            })
            .catch((error) => console.log(error));
        } else {
          console.log(error);
          setError(`Try Again`);
        }
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setModel(true);
    // payment code working after conformation model submit
  };
  return (
    <div className="h-screen w-[50%] flex justify-center items-center m-auto">
      <div className="w-full text-center">
        <Modal isClose={isClose} isOpen={isModel} isSubmit={isConfirmFromModel}>
          <Modal.Header>Are You Confirm Order</Modal.Header>
          <div className="flex justify-center">
            <Modal.Submit>Yes</Modal.Submit>
          </div>
        </Modal>
        <h2 className="text-7xl text-center py-1 font-sans font-semibold">
          Payment
        </h2>
        <p className="text-xl font-medium">Submit Your Cart</p>
        <form onSubmit={handleSubmit} className="my-12 payment-form">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />

          <div
            className={`${transactionID && "hidden"} flex justify-center mt-6`}
          >
            {!isLoading && (
              <button
                type="submit"
                disabled={!stripe || !clientSecret}
                className={` ${
                  !stripe || !clientSecret
                    ? "disabled"
                    : "text-white cursor-pointer py-2 btn_secondary"
                }`}
              >
                Confirm Order
              </button>
            )}
          </div>
          <div>
            <p className="text-red-600 text-medium pb-5 text-center">
              {cardError}
            </p>
            {isLoading && <Loader />}
            {transactionID && (
              <div className="text-blue-600 text-center text-medium pb-5-">
                <p className="text-2xl font-semibold ">Congratulations !!</p>
                <p>Your Payment Transaction ID-{transactionID}</p>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;

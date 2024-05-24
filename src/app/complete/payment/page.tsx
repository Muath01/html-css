"use client";
import React, { Suspense, useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import LoadingScreen from "react-loading-screen";
import Checkout from "./checkout";
import { useRouter, useSearchParams } from "next/navigation";
import { personHasPaid } from "../../../../prisma";
import BellCurve from "../chart/[id]/page";
import { getUserId } from "@/lib/getUserId";

type PaymentStatusType = false | { paid: boolean; score: number };

function PaymentPage() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <PaymentComponent />
    </Suspense>
  );
}

function PaymentComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showItem, setShowItem] = useState(false);
  const [hasPaid, setHasPaid] = useState<boolean>();
  const [score, setScore] = useState<number>();
  const [status, setStatus] = useState({
    showItem: false,
    amount: 1000,
    productId: "",
  });

  const [loading, setLoading] = useState(true);

  const timerId = setTimeout(() => {
    console.log("Aciton exectured after 5 seconds");
    setLoading(() => false);
  }, 5000);

  const query: string = searchParams.get("userid") || "default-id";

  console.log("query:=> ", query);

  useEffect(() => {
    const UserHasPaid = async () => {
      const hasPaid: PaymentStatusType = await personHasPaid(query);
      console.log("query: ", hasPaid);

      if (!hasPaid) {
        return;
      } else if (!hasPaid.paid) {
        setHasPaid(false);
      } else {
        setHasPaid(hasPaid.paid);
        setScore(hasPaid.score);
        router.push(`/complete/chart/${await getUserId()}`);
      }
    };

    UserHasPaid();
  }, []);

  // useEffect(() => {
  //   ReactGA.send({
  //     hitType: "pageview",
  //     page: "/payment",
  //     title: "on payment",
  //   });
  // }, []);

  return (
    <>
      {loading ? (
        <div className="">
          <LoadingScreen
            loading={true}
            bgColor="rgba(255,255,255,1)"
            spinnerColor="#9ee5f8"
            textColor="#676767"
            logoSrc=""
            text="Setting Up"
            className="bg-black border-2 border-black"
          >
            {" "}
          </LoadingScreen>
        </div>
      ) : status.showItem ? (
        <div>
          <h1>hello</h1>
          <Checkout amount={status.productId} />
          {/* <StripeContainer amount={status.amount} /> */}
        </div>
      ) : hasPaid ? (
        () => {
          console.log("haspaid: ", hasPaid);
          // router.push("/complete/chart");
        }
      ) : (
        <div className=" flex flex-col h-screen ">
          {/* <!-- Heading   --> */}
          <div className="mx-auto max-w-7xl bg-white px-4 pt-24 sm:px-6 lg:px-8 select-none  w-full bg-black  ">
            <h2 className="text-3xl font-extrabold text-black sm:text-5xl sm:leading-t igh sm:tracking-tight  ">
              Pricing plans
            </h2>

            <p className="mt-3 max-w-3xl text-lg text-slate-500 ">
              Choose a plan that meets your requirements
            </p>
          </div>

          {/* <!-- Pricing Plans   --> */}
          <div className="relative select-none bg-bl  ">
            <div className="   max-w-7xl mx-auto py-24 px-4 sm:px-6  flex flex-col sm:flex-row  sm:gap-0 sm:space-y-0 sm:space-x-10 space-y-10  justify-center items-center sm:items-stretch">
              {/* plan 1 */}
              <div className="flex flex-col relative border border-slate-200 shadow-lg p-8 bg-white rounded-2xl w-[22rem] sm:w-[25rem]">
                <h3 className="text-xl font-semibold leading-5 ">Basic</h3>
                <p className="mt-4 text-slate-700 leading-6 ">
                  Our most basic plan
                </p>
                <div className="mt-4 bg-slate-50 p-6 rounded-lg -mx-6">
                  <p className="flex items-center text-sm font-semibold  text-slate-500">
                    <span>USD</span>
                    <span className="ml-3 text-4xl text-slate-900 ">$10</span>
                    <span className="ml-1.5 mt-1">One time Payment</span>
                  </p>
                </div>
                <ul className="flex-1 mt-6 space-y-4">
                  <li className="flex text-sm text-slate-700 leading-0 ">
                    <div className="text-orange-500 text-[24px] relative bottom-0">
                      <AiOutlineArrowRight />
                    </div>
                    <span className="ml-3">IQ score</span>
                  </li>
                  <li className="flex text-sm text-slate-700 leading-0 ">
                    <div className="text-orange-500 text-[24px] relative bottom-0">
                      <AiOutlineArrowRight />
                    </div>
                    <span className="ml-3">Visual Chart</span>
                  </li>
                </ul>
                <a
                  href="#"
                  onClick={() =>
                    setStatus((prevStatus) => ({
                      ...prevStatus,
                      showItem: true,
                      amount: 1000,
                      // productId: "price_1Oni9IGFwRQBDdF4vKE7ZJxm", //production
                      productId: "price_1OQUllGFwRQBDdF4f54pbnCb", //test
                    }))
                  }
                  className="block  bg-orange-500  rounded-[5px] hover:bg-red-600 text-white-300  mt-8 px-6 py-4 text-sm font-semibold leading-4  text-center  shadow-md no-underline "
                >
                  Select Plan
                </a>
              </div>

              {/* plan 2 */}

              <div className="flex flex-col relative border border-slate-200 shadow-lg p-8 bg-white rounded-2xl w-[22rem] sm:w-[25rem]">
                <h3 className="text-xl font-semibold leading-5 ">
                  Professional
                </h3>
                <p className="absolute top-0 -translate-y-1/2  bg-orange-500 text-white-300 px-3 py-0.5 text-sm  text-semibold tracking-wide rounded-full shadow-md">
                  Most Popular
                </p>
                <p className="mt-4 text-slate-700 leading-6 ">
                  Our most popular plan with lots of features
                </p>
                <div className="mt-4 bg-slate-50 p-6 rounded-lg -mx-6">
                  <p className="flex items-center text-sm font-semibold text-slate-500">
                    <span>USD</span>
                    <span className="ml-3 text-4xl text-slate-900">$15</span>
                    <span className="ml-1.5 mt-1">One time Payment</span>
                  </p>
                </div>
                <ul className="flex-1 mt-6 space-y-4">
                  <li className="flex text-sm text-slate-700 leading-0 ">
                    <div className="text-orange-500 text-[24px] relative bottom-0">
                      <AiOutlineArrowRight />
                    </div>
                    <span className="ml-3">IQ score</span>
                  </li>
                  <li className="flex text-sm text-slate-700 leading-0 ">
                    <div className="text-orange-500 text-[24px] relative bottom-0">
                      <AiOutlineArrowRight />
                    </div>
                    <span className="ml-3">Visual Chart</span>
                  </li>
                  <li className="flex text-sm text-slate-700 leading-0 ">
                    <div className="text-orange-500 text-[24px] relative bottom-0">
                      <AiOutlineArrowRight />
                    </div>
                    <span className="ml-3">Printable</span>
                  </li>
                  <li className="flex text-sm text-slate-700 leading-0 ">
                    <div className="text-orange-500 text-[24px] relative bottom-0">
                      <AiOutlineArrowRight />
                    </div>
                    <span className="ml-3">JPEG & PNG version of chart</span>
                  </li>
                  <li className="flex text-sm text-slate-700 leading-0 ">
                    <div className="text-orange-500 text-[24px] relative bottom-0">
                      <AiOutlineArrowRight />
                    </div>
                    <span className="ml-3">PDF Document of chart</span>
                  </li>
                </ul>
                <a
                  href="#"
                  onClick={() =>
                    setStatus((prevStatus) => ({
                      ...prevStatus,
                      showItem: true,
                      amount: 1500,
                      // productId: "price_1OniAbGFwRQBDdF49iRGP97Z", //production
                      productId: "price_1OQUl2GFwRQBDdF4N9lSVUcR", //test
                    }))
                  }
                  className="block text-white bg-orange-500 hover:bg-red-600 mt-8 px-6 py-4 text-sm text-white-300 font-semibold leading-4  text-center rounded-[5px] shadow-md no-underline"
                >
                  Select Plan
                </a>
              </div>

              {/* enterprise */}
              {/* <div className="flex flex-col relative border border-slate-200 shadow-lg p-8 bg-white rounded-2xl">
                <h3 className="text-xl font-semibold leading-5 ">Enterprise</h3>
                <p className="mt-4 text-slate-700 leading-6 ">
                  Built for job applications
                </p>
                <div className="mt-4 bg-slate-50 p-6 rounded-lg -mx-6">
                  <p className="flex items-center text-sm font-semibold text-slate-500">
                    <span>USD</span>
                    <span className="ml-3 text-4xl text-slate-900">$30</span>
                    <span className="ml-1.5 mt-1">One time Payment</span>
                  </p>
                </div>
                <ul className="flex-1 mt-6 space-y-4">
                  <li className="flex text-sm text-slate-700 leading-0 ">
                    <div className="text-cyan-500 text-[24px] relative bottom-0">
                      <AiOutlineArrowRight />
                    </div>
                    <span className="ml-3">Qtink Certificate</span>
                  </li>
                  <li className="flex text-sm text-slate-700 leading-0 ">
                    <div className="text-cyan-500 text-[24px] relative bottom-0">
                      <AiOutlineArrowRight />
                    </div>
                    <span className="ml-3">
                      All the features listed in the Basic and Professional
                      tiers
                    </span>
                  </li>
                </ul>
                <a
                  href="#"
                  onClick={() =>
                    setStatus((prevStatus) => ({
                      ...prevStatus,
                      showItem: true,
                      amount: 3000,
                      // productId: "price_1OniBVGFwRQBDdF4011zDU9Z", //production
                      productId: "price_1OQUl2GFwRQBDdF4N9lSVUcR", //test
                    }))
                  }
                  className="block text-cyan-700 bg-cyan-50 hover:bg-cyan-100 mt-8 px-6 py-4 text-sm font-semibold leading-4  text-center rounded-lg shadow-md no-underline"
                >
                  Select Plan
                </a>
              </div> */}
            </div>
            {/* <!-- /Plans     --> */}
          </div>
        </div>
      )}
    </>
  );
}

export default PaymentPage;

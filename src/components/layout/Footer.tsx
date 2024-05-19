import React from "react";
import LogoVPN from "../../../public/assets/Logo.svg";
import Facebook from "../../../public/assets/Logo.svg";
import Twitter from "../../../public/assets/Logo.svg";
import Instagram from "../../../public/assets/Logo.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Footer = () => {
  const router = useRouter();
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <h1 className="text-[50px] text-orange-500 cursor-pointer">Qtink</h1>
          <p className="mb-4">
            <strong className="font-medium">Qtink</strong> is an interactive IQ
            test, Please note that the QTINK IQ Test is an online assessment and
            should be taken as a serious measure of intelligence.
          </p>

          <p className="text-gray-400">©{new Date().getFullYear()} - Qtink</p>
        </div>

        {/* product */}
        {/* <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Product</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Download{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Pricing{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Locations{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Server{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Countries{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Blog{" "}
            </li>
          </ul>
        </div> */}

        {/* engage */}
        {/* <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              LaslesVPN ?{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              FAQ{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Tutorials{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              About Us{" "}
            </li>
            <a
              href="www"
              className="my-2 hover:text-orange-500 cursor-pointer transition-all"
            >
              Privacy Policy{" "}
            </a>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div> */}

        {/* Earn */}
        <div className="row-span-2 sm:col-span-2 sm:col-start-6 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Contact</p>
          <ul className="text-black-500">
            <li
              onClick={() => {
                router.push("/contactus");
              }}
              className="my-2 hover:text-orange-500 cursor-pointer transition-all"
            >
              Contact Us
            </li>
            <li
              onClick={() => {
                router.push("/terms");
              }}
              className="my-2 hover:text-orange-500 cursor-pointer transition-all"
            >
              Terms of Service
            </li>
            <li
              onClick={() => {
                router.push("/terms/privacy");
              }}
              className="my-2 hover:text-orange-500 cursor-pointer transition-all"
            >
              Privacy
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

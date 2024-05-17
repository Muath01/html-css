"use client";
import React from "react";
import { dateFormat } from "highcharts";
import logo from "../images/logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import "../../../globals.css";
import sendEmail from "@/app/actions/sendEmail";
type ParseFullNameType = {
  firstName: String;
  secondName: String;
};
function Certificate() {
  console.log("in certficate");
  const currentDate = new Date();

  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear().toString();

  const formattedDate = `${day}-${month}-${year}`;

  const getFullName = localStorage.getItem("qtinkName")!;
  const parseFullName: ParseFullNameType = JSON.parse(getFullName);

  const fullName = parseFullName.firstName + " " + parseFullName.secondName;
  console.log("parseD: ", parseFullName);
  console.log("fullName", fullName);

  const iqScore = localStorage.getItem("iqScoreFinal");
  function handlePrint() {
    window.print();
  }

  // async function sendEmail() {
  //   try {
  //     const response = await fetch("/api/email", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         // this
  //       }),
  //     });

  //     const data = await response.json();
  //     if (response.ok) {
  //       alert("Email sent successfully!");
  //     } else {
  //       throw new Error(data.error || "Something went wrong");
  //     }
  //   } catch (error) {
  //     console.error("Failed to send email:", error);
  //     alert("Failed to send email: " + error);
  //   }
  // }

  return (
    <>
      <div className="border-2 h-screen w-full relative flex justify-center items-center ">
        <div className="cert-container relative p-[20px] flex items-center sm:p-[45px] border-[5px] sm:bottom-0 bottom-8   border-[#6f6f6f]  w-[1200px] h-[600px] bg-cover m-auto">
          <div className=" border-[3px] p-[5px] border-[#58595B] bg-white w-[100%]">
            <div className="border-red border-[3px] border-double border-[#CE202F] w-[100%] ">
              <div className="content p-[20px] h-[500px]  text-center">
                {/* <img
                id="mt-logo"
                className="absolute w-[50px] right-[910px] top-[70px]"
                src={logo}
                alt="Logo Goes Here"
              /> */}
                <h1 className="absolute md:left-[15%] sm:left-[10%] text-orange-900 ">
                  Qtink
                </h1>
                <Image
                  width={250}
                  height={250}
                  id="mt-stamp"
                  className="absolute w-[120px] right-20 md:w-[204px] md:right-[130px] md:top-[300px]"
                  src={"/assets/stamp.png"}
                  alt="Certified Stamp"
                />

                <div className="copytext-container absolute md:left-[15%] top-[205px] text-[2px] text-left leading-1 font-serif">
                  <div className="congrats-copytext mb-[50px] text-[2px]">
                    <h1 className="sm:text-[28px] text-[20px]">
                      Certificate of Completion
                    </h1>
                    <br />
                    <h2 className="sm:text-[28px] text-[20px]  pr-10 relative w-[85%] sm:w-full ">
                      Congratulations{" "}
                      {parseFullName.firstName && parseFullName.secondName ? (
                        <span>: {fullName}</span>
                      ) : parseFullName.firstName &&
                        !parseFullName.secondName ? (
                        <span>: {parseFullName.firstName}</span>
                      ) : !parseFullName.firstName &&
                        parseFullName.secondName ? (
                        <span>: {parseFullName.secondName}</span>
                      ) : null}
                      <span> {}</span>
                    </h2>
                    <br />
                    <h2 className="sm:text-[28px] text-[20px]  pr-10 relative w-[85%] sm:w-full   ">
                      IQ Score: <span className="">{iqScore}</span>
                      <span> {}</span>
                    </h2>
                  </div>

                  <div className="course-copytext mb-[35px]">
                    <h1>
                      <span>{}</span>
                    </h1>
                    <br />
                    <h2 className="sm:text-[28px] text-[14px]  ">
                      Certificate awarded on:{" "}
                      <span className="">{formattedDate}</span>
                    </h2>
                    <br />
                  </div>
                  <div className="address-copytext leading-[110%]">
                    <address className=" font-bold text-[14px] leading-4 ">
                      Company Name: Qtink <br />
                      Company Address: United Kingdom <br />
                      City: London
                    </address>
                    <a
                      href="#"
                      id="mt-site"
                      className="text-black text-[14px] relative top-2"
                    >
                      <em>www.qtink.com</em>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-20   md:bottom-10  px-16 flex gap-5">
          <Button
            id="printButton"
            onClick={handlePrint}
            className=" bg-gray-600 text-white rounded-2xl px-10 sm:px-16 py-3 sm:py-4 font-bold hover:bg-gray-700 text-white-300 "
            size="lg"
          >
            Print
          </Button>
          <Button
            onClick={() => sendEmail()}
            className="  text-white rounded-2xl px-10 sm:px-16 py-3 sm:py-4 font-bold bg-orange-500 hover:bg-red-500 text-white-300 "
            size="lg"
          >
            email it to me
          </Button>
          {/* <button className=" bg-blue-400 rounded-2xl px-10 py-3 font-bold ">
            Email
          </button> */}
        </div>
      </div>
    </>
  );
}

export default Certificate;

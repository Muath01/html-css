import Image from "next/image";
import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  secondName: string;
  score: number;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  secondName,
  score,
}) => (
  <div className="bg-red-400">
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
            {/* <Image
              width={250}
              height={250}
              id="mt-stamp"
              className="absolute w-[120px] right-20 md:w-[204px] md:right-[130px] md:top-[300px]"
              src={"/assets/stamp.png"}
              alt="Certified Stamp"
            /> */}

            <div className="copytext-container absolute md:left-[15%] top-[205px] text-[2px] text-left leading-1 font-serif">
              <div className="congrats-copytext mb-[50px] text-[2px]">
                <h1 className="sm:text-[28px] text-[20px]">
                  Certificate of Completion
                </h1>
                <br />
                <h2 className="sm:text-[28px] text-[20px]  pr-10 relative w-[85%] sm:w-full ">
                  Congratulations <span>: {firstName + secondName}</span>
                </h2>
                <br />
                <h2 className="sm:text-[28px] text-[20px]  pr-10 relative w-[85%] sm:w-full   ">
                  IQ Score: <span className="">{score}</span>
                  <span> {}</span>
                </h2>
              </div>

              <div className="course-copytext mb-[35px]">
                <h1>
                  <span>{}</span>
                </h1>
                <br />
                <h2 className="sm:text-[28px] text-[14px]  ">
                  Certificate awarded on: <span className="">28-10-20</span>
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
  </div>
);

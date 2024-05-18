import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "../app/misc/ButtonPrimary";
import ButtonOutline from "../app/misc/ButtonOutline";
import Maps from "../../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../lib/getScrollAnimation";
import ScrollAnimationWrapper from "./layout/ScrollAnimationWrapper";

const reviews = [
  {
    id: 1,
    src: "https://randomuser.me/api/portraits/women/31.jpg",
    name: "Sophie Starr",
    description: `I recently took the Qtink IQ Test, and I must say it was an insightful experience. The questions were challenging yet engaging, providing a thorough evaluation of cognitive abilities. The test interface was user-friendly, making the entire process seamless. I appreciate the detailed results, which gave me a comprehensive understanding of my strengths. Highly recommended for those looking to gain insights into their intellectual capabilities!`,
  },
  {
    id: 2,
    src: "https://randomuser.me/api/portraits/women/89.jpg",
    name: "Rachel ",
    description: `The Qtink IQ Test exceeded my expectations. The variety of question types ensured a comprehensive evaluation, and the time constraints added an element of challenge. I found the results to be accurate and detailed, providing valuable insights into different cognitive aspects. The test is suitable for anyone seeking a reliable and informative assessment of their intellectual abilities.`,
  },
  {
    id: 3,
    src: "https://randomuser.me/api/portraits/women/41.jpg",
    name: "Hana Slim",
    description: `Taking the Qtink IQ Test was a worthwhile experience. The questions were thought-provoking and covered a wide range of cognitive abilities. The test structure was well-designed, and the time management aspect added a sense of urgency. The results were presented in a clear and understandable format, providing valuable insights into my cognitive strengths. I recommend this test for anyone interested in understanding their intellectual potential.`,
  },
  {
    id: 4,
    src: "https://randomuser.me/api/portraits/men/61.jpg",
    name: "Alex Rodriguez",
    description: `I'm impressed with the thoroughness of the assessment. The questions were diverse and challenging.`,
  },
  {
    id: 5,
    src: "https://randomuser.me/api/portraits/men/91.jpg",
    name: "Michael Johnson",
    description: `I recommend the Qtink IQ Test for anyone looking for a comprehensive and reliable assessment of their cognitive abilities.`,
  },

  {
    id: 10,
    src: "https://randomuser.me/api/portraits/men/92.jpg",
    name: "Chris Lee",
    description: `I've always thought that Online IQ questions were unreliable, but because of Qtink percentile method of figuring out the IQ, I decided to try it and didn't regret it`,
  },
];

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">{/* data */}</div>
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto"
            >
              Data From All Over the World!
            </motion.h3>
            <motion.p
              className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
              variants={scrollAnimation}
            >
              Available Everywhere!
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div
              className="py-12 w-full px-8 mt-16"
              variants={scrollAnimation}
            >
              <Image src={Maps} alt="Logo" className="w-full h-auto" />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              Trusted by Thousands of Happy Customer{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have joined us with
              great pleasure
            </motion.p>

            <motion.div className="" variants={scrollAnimation}>
              <div className="bg-white">
                {/* <h2 className="text-center text-4xl  tracking-tight text-gray-900 sm:text-3xl">
          Read trusted reviews from our customers
        </h2> */}
                <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8 ">
                  {reviews.map((review) => (
                    <div className="mb-8 sm:break-inside-avoid">
                      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">
                          <img
                            alt=""
                            src={review.src}
                            className="size-4 w-14 h-14 rounded-full object-cover"
                          />
                          <div>
                            <div className="flex justify-center gap-0.5 text-red-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>

                            <p className="mt-0.5 text-lg font-medium text-gray-900">
                              {review.name}
                            </p>
                          </div>
                        </div>
                        <p className="mt-4 text-gray-700">
                          {review.description}
                        </p>
                      </blockquote>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Start Now!
                  </h5>
                </div>
                <button className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:bg-red-600 hover:shadow-orange-md transition-all outline-none">
                  start
                </button>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

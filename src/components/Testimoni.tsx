import React from "react";

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

function Testmonial() {
  return (
    <section className="bg-white">
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
              <p className="mt-4 text-gray-700">{review.description}</p>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testmonial;

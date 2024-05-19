import React from "react";

const privacy = [
  {
    id: 1,
    rule: "Introduction",
    description: `This Privacy Policy is designed to help you understand how
    we collect, use, and safeguard your personal information.
    Your privacy is important to us, and we are committed to
    protecting your data.`,
  },
  {
    id: 2,
    rule: "Information Collection",
    description: ` When you take the IQ test, we collect various pieces of
    information to improve the test quality and provide you with
    relevant content and services. This information includes
    your username, first name, last name, gender, location,
    email address, and salary range.`,

    userInformation: [
      {
        title: "Improving IQ test",
        description: `We use the data
          collected to enhance the quality and accuracy of the IQ
          test and provide you with more relevant results.`,
      },
      {
        title: "User Communication",
        description: `We use the data
          collected to enhance the quality and accuracy of the IQ
          test and provide you with more relevant results.`,
      },
      {
        title: "Marketing and Advertising",
        description: `With your
          consent, we may use your data to send you personalized ads
          and promotional offers. You can opt out of this service at
          any time.`,
      },
    ],
  },

  {
    id: 3,
    rule: "Security Measures:",
    description: ` We take data security seriously and have implemented
    industry-standard security measures to protect your
    information from unauthorized access, disclosure,
    alteration, or destruction.`,
  },
  {
    id: 4,
    rule: "User Rights:",
    description: ` You have the right to access, correct, or delete your
      personal information. You can also request a copy of your
      data or withdraw your consent for marketing communications
      at any time.`,
  },
  {
    id: 5,
    rule: "Updates to Privacy Policy:",
    description: `  We may update this Privacy Policy from time to time to
    reflect changes in our practices.`,
  },
];
function Privacy() {
  return (
    <div
      className="min-h-screen py-20 select-none w-full "
      // style="background-image: linear-gradient(115deg, #9F7AEA, #FEE2FE)"
    >
      <div className=" text-gray-700 w-full">
        <div className="flex flex-col lg:flex-col w-full lg:w-full   rounded-xl mx-auto overflow-hidden   ">
          <h1 className="ml-10 mt-4  text-center">Privacy Policy</h1>
          <div
            className="w-full lg:w-2/2 mt-5  flex flex-col items-center justify-center px-12 "
            //   style={{"background-image: url('images/Register-Background.png');}"}}
          >
            <div className="flex flex-col gap-2 xl:w-1/2  ">
              {privacy.map((privacy) => (
                <>
                  <h1 key={privacy.id} className="text-[28px] text-black">
                    {privacy.id}.{privacy.rule}
                  </h1>
                  <p className="text-gray-600 text-[20px]">
                    {privacy.description}
                  </p>
                  {privacy.userInformation &&
                    privacy.userInformation.map((info, index) => (
                      <p key={index} className="">
                        <strong key={index}>{info.title}: </strong>
                        {info.description}
                      </p>
                    ))}
                </>
              ))}

              <p className="underline">
                By proceeding with the IQ test, you acknowledge that you have
                read, understood, and agreed to these terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;

import React from "react";

const termsAndCondition = [
  {
    id: 1,
    rule: "Introduction",
    description: `Welcome to the Qtink IQ test,. By engaging with and utilizing our comprehensive IQ testing services, you hereby express your consent and understanding of the ensuing terms and conditions. Your agreement to comply with these terms establishes a legal relationship between you and [Your Company Name], and your continued usage of our services implies an ongoing acceptance of these terms and any subsequent modifications that may occur.`,
  },
  {
    id: 2,
    rule: "Acceptance of Terms",
    description: `In accessing or utilizing our site, you acknowledge that you have conscientiously perused, comprehended, and assent to being bound by the terms articulated herein. Should any aspect of these terms be disagreeable to you, it is incumbent upon you to abstain from using our services. It's important to note that your usage of our services is additionally contingent upon compliance with our Privacy Policy, a comprehensive document elucidating the nuances of how your personal information is handled, accessible on our official website.`,
  },
  {
    id: 3,
    rule: "Intellectual Property",
    description: `Every iota of content presented on this site, inclusive of but not confined to text, images, graphics, and software, is the exclusive property. These assets are safeguarded by copyright and a plethora of other intellectual property laws. It is incumbent upon you to refrain from reproducing, distributing, or utilizing any content from our site without our unequivocal consent.`,
  },
  {
    id: 4,
    rule: "IQ Test and Results",
    description: `Our meticulously crafted IQ test endeavors to provide a nuanced estimate of cognitive abilities and should not be misconstrued as an absolute measure of intelligence. Additionally, you must affirm that you are a minimum of 18 years old to partake in this IQ test. This attestation is crucial, and by utilizing this test, you unequivocally confirm that you fulfill this eligibility criterion. Furthermore, the results emanating from the IQ test are stringently confidential, accessible only to you, thereby ensuring the utmost privacy and fortification of your personal data.`,
  },
  {
    id: 5,
    rule: "Payment and Refund Policy",
    description: `5.1 The onus is upon users to furnish precise and comprehensive payment information, with payment being exigible upon the culmination of the IQ test. 5.2 Refunds will only be sanctioned in instances where technical anomalies have transpired during the test or payment process. Requests for refunds must be tendered within 7 days of the issue surfacing. It is essential to recognize that the processing times for refunds may exhibit variations.`,
  },
  {
    id: 6,
    rule: "Liability",
    description: `We hereby disclaim any responsibility for consequences that may arise from the utilization of this IQ test. The test is dispensed "as is," bereft of warranties or guarantees of any kind. Whilst assiduously striving to uphold the accuracy and reliability of our services, we cannot warrant seamless, error-free operation at all junctures.`,
  },
  {
    id: 7,
    rule: "Use of Information",
    description:
      "Information gleaned from the user form may be leveraged for commercial purposes by [Your Company Name]. This ambit encompasses but is not confined to research, marketing initiatives, and statistical analyses. Your privacy remains paramount, and detailed insights into our data handling practices are expounded upon in our Privacy Policy, accessible for your perusal.",
  },
  {
    id: 8,
    rule: "Prohibited Conduct",
    description: `You are categorically forbidden from disseminating test questions or answers, attempting to manipulate results, or engaging in any form of fraudulent activity during the test. Any transgression of these stipulations may culminate in the termination of your access to our services. We further reserve the right to institute legal proceedings if deemed necessary.`,
  },
  {
    id: 9,
    rule: "Privacy and Data Security",
    description:
      "Our steadfast commitment is directed towards safeguarding user privacy. Thorough insights into our data collection, usage, and security protocols can be gleaned from our Privacy Policy. Our security measures are designed to ensure the confidentiality and integrity of your data, assuaging any concerns you may harbor.",
  },
  {
    id: 10,
    rule: "Termination of Services",
    description:
      "We retain the prerogative to terminate or suspend services to any user sans prior notification, should we discern any violation of these terms or discern engagement in fraudulent activities. Such actions are undertaken to preserve the integrity of our testing services and foster an environment of trust among our user community.",
  },
  {
    id: 11,
    rule: "Changes to Terms",
    description:
      "We expressly reserve the right to effect updates, modifications, or replacements to any facet of these terms at our sole discretion. It is incumbent upon the user to periodically peruse this page for any alterations. Reasonable efforts will be undertaken to apprise users of substantial modifications via email or conspicuous notices on our website.",
  },
];

function Terms() {
  return (
    <div
      className="min-h-screen py-20 select-none w-full "
      // style="background-image: linear-gradient(115deg, #9F7AEA, #FEE2FE)"
    >
      <div className=" text-gray-700 w-full">
        <div className="flex flex-col lg:flex-col w-full lg:w-full   rounded-xl mx-auto overflow-hidden   ">
          <h1 className="ml-10 mt-4  text-center">Terms of Use</h1>
          <div
            className="w-full lg:w-2/2 mt-5  flex flex-col items-center justify-center px-12 "
            //   style={{"background-image: url('images/Register-Background.png');}"}}
          >
            <div className="flex flex-col gap-2 xl:w-1/2  ">
              {termsAndCondition.map((term) => (
                <>
                  <h1 key={term.id} className="text-[28px] text-black">
                    {term.id}.{term.rule}
                  </h1>
                  <p className="text-gray-600 text-[20px]">
                    {term.description}
                  </p>
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

export default Terms;

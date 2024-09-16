"use client";
import React, { useState } from "react";
import sendEmail from "../actions/sendEmail";

function ContactUs() {
  const [fullName, setFullName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [loading, setLoading] = useState(false);

  console.log("email: ", fullName);

  async function handleSendEmail() {
    setLoading(true);
    try {
      console.log("email: ", email);
      const response = await sendEmail({
        from: email,
        fullName: fullName,
        email: email,
        to: ["muath.khalifa@yahoo.com"],
        message,
        type: "contact",
        subject: "Support",
      });

      console.log("response = ", response);
    } catch (error) {
      console.log("error not working");
      console.error(error);
    }

    setLoading(false);
  }

  async function sendContactUsEmail() {
    setLoading(true);

    const data = {
      from: email,
      fullName: fullName,
      email: email,
      to: ["muath.khalifa@yahoo.com"],
      message,
      type: "contact",
      subject: "Support",
    };

    try {
      const response = await fetch("/api/contactus", {
        method: "POST",
        body: JSON.stringify(data),
      });

      console.log("response: ", response);
      setMessage("");
      setEmail("");
      setFullName("");
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="body-font relative bg-white-100  h-screen">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center mt-10">
          <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">
            Contact Us
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3 text-black-600">
            Feel free to reach out to us! Whether you have a question, feedback,
            we&apos;d love to hear from you.
          </p>
        </div>

        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <div className="-m-2 flex flex-wrap">
            <div className="w-1/2 p-2">
              <div className="relative">
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                  id="name"
                  name="name"
                  className="peer w-full rounded border border-gray-700  bg-opacity-40 py-1 px-3 text-base leading-8 text-black-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out   focus:ring-2 "
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-black-100 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-black-100 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-black-100"
                >
                  Full Name
                </label>
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="relative">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="emailAddress"
                  name="emailAddress"
                  className="peer w-full rounded border border-gray-700  bg-opacity-40 py-1 px-3 text-base leading-8 text-black-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out   focus:ring-2 "
                  placeholder="emailAddress"
                />
                <label
                  htmlFor="emailAddress"
                  className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-black-100 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-black-100 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-black-100"
                >
                  Email Address
                </label>
              </div>
            </div>
            <div className="mt-4 w-full p-2">
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  className="peer h-32 w-full resize-none rounded border border-gray-700  bg-opacity-40 py-1 px-3 text-base leading-6 text-black-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out "
                  placeholder="Message"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-black-100 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-black-100 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-black-100"
                >
                  Message
                </label>
              </div>
            </div>
            <div className="w-full p-2">
              <button
                disabled={loading}
                onClick={sendContactUsEmail}
                className="mx-auto flex rounded border-0 bg-orange-500 py-2 px-8 text-lg text-white hover:bg-red-600 text-white-100 focus:outline-none disabled:bg-gray-400 w-32 items-center justify-center text-center"
              >
                {loading ? "sending..." : "send"}
              </button>
            </div>

            {/* <!-- footer --> */}
            {/* <div className="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
              <a className="text-indigo-400">example@email.com</a>
              <p className="my-5 leading-normal">
                49 Smith St. <br />
                Saint Cloud, MN 56301
              </p>
              <span className="inline-flex">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-4 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-4 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-4 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;

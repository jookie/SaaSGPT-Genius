import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import { HiOutlineClipboardDocument } from "react-icons/hi2";

export default function HeroSection() {
  const [buttonText, setButtonText] = useState("Copy");

  const copyToClipboard = (caption: string) => {
    navigator.clipboard.writeText(caption!);

    setButtonText("Copied!"); // set the button text to "Copied!" when text is copied
    setTimeout(() => {
      setButtonText("Copy"); // set the button text back to "Copy" after 2 seconds
    }, 2000);
  };
  return (
    <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-2 mt-20">
      {/* <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-7xl text-white">
        Easily add captions to your images
        <span className="relative whitespace-nowrap text-[#757fdf]">
          <span className="relative"> using AI.</span>
        </span>
      </h1> */}
      {/* <p className="mx-auto mt-4 md:mt-12 max-w-xl text-lg text-stone-400 leading-7">
        Take your images to the next level with custom captions.
      </p> */}
      <div className="flex justify-center space-x-4">
        {/* <a
          className="bg-white rounded-xl text-black font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-gray-100 border"
          href="https://youtu.be/9TZsh_-y9DA"
          target="_blank"
          rel="noreferrer"
        >
          Learn how it's built
        </a> */}
        <Link
          className="bg-[#4b4cb7] rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-4 hover:bg-[#4b4cb7]/80"
          href="/caption"
        >
          Scan media for hate content
        </Link>
        {/* <Link
          className="bg-[#4b4cb7] rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-4 hover:bg-[#4b4cb7]/80"
          // href={"https://thankfulthoughts.io/"}    
          href={"https://thank-beta.vercel.app"}
        >
           Thankful Email
        </Link> */}
      </div>
      <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6 text-white">
        <div className="flex flex-col space-y-10 mt-4 mb-16">
          <div className="flex sm:space-x-10 sm:flex-row flex-col">
            <div className="w-full md:w-1/2">
              <h2 className="mb-1 font-medium text-lg">Original Photo</h2>
              <Image
                alt="Soldiers and a building"
                src= "/drone.png"
                className="w-96 h-full rounded-2xl"
                width  = {400}
                height = {600}
              />
            </div>
            <div className="sm:mt-0 mt-8 w-full md:w-1/2">
              <h2 className="mb-1 font-medium text-lg">Generated Caption</h2>
              <textarea
                className="w-full h-full p-2 text-gray-700 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring"
                placeholder="Enter text here..."
                value=  "Israeli Soldiers sending drone from a window without a frame"
              />

              <button
                className="px-4 py-2 text-white bg-[#5a5cd1] rounded-md hover:bg-[#3f4194] focus:outline-none focus:ring"
                onClick={() =>
                  copyToClipboard(
                    "Israeli Soldiers sending drone from a window with missing window's frame frame"
                  )
                }
              >
                <div className="flex flex-row items-center justify-center">
                  <HiOutlineClipboardDocument className="w-5 h-5 mr-1" />
                  {buttonText}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

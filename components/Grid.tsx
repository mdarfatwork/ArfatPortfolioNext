"use client"
import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

import Lottie from "react-lottie";
import { BackgroundGradientAnimation } from "./ui/GradientBg";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { motion } from "framer-motion";


const Grid = () => {
  const leftLists = ["TailwindCSS", "NextJS", "Typescript"];
  const rightLists = ["MongoDB", "JavaScript", "ReactJS"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "arfat19118@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <motion.section id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full h-full mx-auto py-20 relative z-10 flex flex-col lg:flex-row lg:justify-between gap-5">
        {/* First */}
        <div
          className="row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 lg:col-span-3 md:col-span-6 md:row-span-2 lg:min-h-[40vh] w-full"
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <div className="h-full">
            <div className="w-full h-full absolute">
              <img
                src="/b5.svg"
                alt="Test"
                className="absolute right-0 bottom-0 md:w-96 w-60 object-cover object-center "
              />
            </div>
            <div
              className="absolute right-0 -bottom-5"
            >
              <img
                src="/grid.svg"
                alt="Test"
                className="object-cover object-center w-full h-full"
              />
            </div>

            <div
              className="group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 justify-center md:justify-start lg:justify-center"
            >
              <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                Daily Routine
              </div>
              <div
                className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
              >
                Currently building projects in Next.js
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-between gap-5">
          {/* Second */}
          <div
            className="row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 lg:col-span-2 md:col-span-3 md:row-span-2 h-full"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div className="h-full">
              <div className="w-full h-full absolute">
              </div>
              <div
                className='absolute right-0 -bottom-5'
              >
              </div>

              <div
                className="group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 justify-center"
              >
                <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                  I constantly try to improve
                </div>
                <div
                  className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
                >
                  My tech stack
                </div>

                <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                  {/* tech stack lists */}
                  <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                    {leftLists.map((item, i) => (
                      <span
                        key={i}
                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                              lg:opacity-100 rounded-xl text-center bg-[#10132E]"
                      >
                        {item}
                      </span>
                    ))}
                    <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                  </div>
                  <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                    <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                    {rightLists.map((item, i) => (
                      <span
                        key={i}
                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                              lg:opacity-100 rounded-xl text-center bg-[#10132E]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Third */}
          <div
            className="row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 lg:col-span-2 md:col-span-3 md:row-span-1 h-full"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div className="flex justify-center h-full">
              <BackgroundGradientAnimation>
                <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
              </BackgroundGradientAnimation>

              <div
                className="group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 justify-center md:max-w-full max-w-60 text-center"
              >
                <div
                  className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
                >
                  Do you want to start a project together?
                </div>

                {/* Email Copy */}
                <div className="mt-5 relative">
                  <div
                    className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                      }`}
                  >
                    <Lottie options={defaultOptions} height={200} width={400} />
                  </div>

                  <MagicButton
                    title={copied ? "Email is Copied!" : "Copy my email address"}
                    icon={<IoCopyOutline />}
                    position="left"
                    handleClick={handleCopy}
                    otherClasses="!bg-[#161A31]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Grid;
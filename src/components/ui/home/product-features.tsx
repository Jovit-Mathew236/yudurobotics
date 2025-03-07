"use client";
import React, { useEffect, useState } from "react";
import JumpingButtons from "../common/jumping-buttons";
import renderImg from "@/imgImport";
import { Squircle } from "corner-smoothing";
import Image from "next/image";
import { Check } from "lucide-react";
import { TypingAnimation } from "@/components/magicui/typing-animation";

function ProductFeatures() {
  const [cornerRadius, setCornerRadius] = useState(40);

  useEffect(() => {
    const updateCornerRadius = () => {
      setCornerRadius(window.innerWidth >= 1024 ? 120 : 40);
    };
    updateCornerRadius();
    window.addEventListener("resize", updateCornerRadius);
    return () => window.removeEventListener("resize", updateCornerRadius);
  }, []);

  const features = [
    { id: 1, text: "17 Degrees of Freedom" },
    { id: 2, text: "Full Aluminium Body" },
    { id: 3, text: "Programmable using Plode App" },
  ];
  return (
    <>
      <Squircle
        cornerRadius={cornerRadius}
        className="bg-primary text-primary-foreground px-8 lg:px-16 pt-12 sm:pt-20 tracking-wide pb-6"
      >
        {/* <div className="bg-primary rounded-xxl text-primary-foreground px-8  lg:px-16 pt-12 sm:pt-20 tracking-wide pb-6"> */}
        <div className="flex flex-col justify-between space-y-16 lg:flex-row lg:space-y-0">
          <div className="w-[100%] lg:w-[55%]">
            <p className="font-tthoves"> Newly Launched!</p>
            <h1 className="font-cobaltRidge text-3xl lg:text-6xl tracking-wide ">
              Meet <span className="text-destructive">Zing</span>: The Fun and
              Lively Humanoid Robot
            </h1>
            <p className="py-2 lg:py-6 text-xl  font-tthoves text-[#E2D8FE]">
              A 38 cm marvel with 17 degrees of freedom, crafted for endless
              exploration and creativity.
            </p>
            <ul className="space-y-4 ">
              {features.map((feature, i) => (
                <li key={feature.id} className="flex space-x-2 ">
                  <div className="border  flex justify-center items-center">
                    <Check />
                  </div>
                  <TypingAnimation
                    delay={i * 2}
                    as={"span"}
                    className="text-xl font-tthoves opacity-50"
                  >
                    {feature.text}
                  </TypingAnimation>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative flex flex-col md:flex-col-reverse">
          <div className="relative w-full py-16 md:mt-12 lg:mt-0">
            {/* Background image */}
            <Image
              width={1000}
              height={1000}
              className="w-full hidden md:block lg:block"
              src={renderImg("productBackground")}
              alt="Background"
            />

            {/* Humanoid image - placed on top */}
            <Image
              width={1000}
              height={1000}
              className="absolute -inset-[1.825rem] xs:-inset-[2.3rem] sm:-inset-[2.125rem] md:-inset-16 w-full h-full object-contain hidden md:block lg:block"
              src={renderImg("humanoid")}
              alt="Humanoid"
            />
            <Image
              width={500}
              height={500}
              className="w-full h-full object-contain xs:block sm:block md:hidden"
              src={renderImg("humanoidSmall")}
              alt="Humanoid for small screens"
            />
          </div>
          <div className="md:absolute -top-40 right-0">
            <JumpingButtons
              ishorizontal={false}
              text1="Lemme"
              text2="Meet Zing"
              bgColor="#2CF7A4"
              textColor="#0A4029"
              link="/zing"
            />
          </div>
        </div>
        <div className="h-[10px] w-full flex justify-center gap-4">
          <div className="w-[40px] h-full bg-[#602CF7] rounded-xl" />
          {/* <div className="w-[40px] h-full bg-[#ffffff] rounded-xl"></div>
          <div className="w-[40px] h-full bg-[#ffffff] rounded-xl"></div> */}
        </div>
        {/* </div> */}
      </Squircle>
    </>
  );
}

export default ProductFeatures;

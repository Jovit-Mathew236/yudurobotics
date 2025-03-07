"use client";
import React, { useState } from "react";
import { faqData } from "@/data/faq";
import { MinusCircle, PlusCircle } from "lucide-react";

const FAQs = ({ product }: { product: string }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Filter FAQs by product name
  const filteredFAQs =
    faqData.find((item) => item.product === product)?.faqs || [];

  return (
    <div className="flex flex-col space-y-4 pt-16 ">
      <div className="flex flex-col space-y-2 justify-center items-center">
        <h1 className="w-full font-cobaltRidge text-center  text-3xl sm:text-4xl text-black sm:racking-wider">
          Got Questions? We’ve Got Answers
        </h1>
        <p className="text-secondary-foreground text-center text-lg sm:text-start sm:text-sm md:text-base lg:text-lg xl:text-xl pt-4 font-tthoves">
          Find the information you need with our frequently asked questions.
        </p>
      </div>
      {/* <div className="flex flex-col space-y-6 justify-start items-center"> */}
      <div className="max-w-4xl mx-auto px-4 py-0 lg:py-10">
        {filteredFAQs.map((item, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <div key={index} className="border-b border-[#E3E3E4] py-6">
            <button
              type="button"
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full focus:outline-none"
            >
              <p className="text-base text-start lg:text-lg xl:text-xl text-[#0A041A] font-tthoves-medium">
                {item.question}
              </p>
              {openIndex === index ? (
                <MinusCircle color="#BDBDBF" />
              ) : (
                <PlusCircle color="#BDBDBF" />
              )}
            </button>
            <div
              className={`font-tthoves mt-2 text-secondary-foreground transition-max-height duration-500 ease-in-out overflow-hidden text-sm lg:test-md xl:text-lg ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;

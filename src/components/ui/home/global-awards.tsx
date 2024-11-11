import React from "react";

function GlobalAwards() {
  const awardsImage = [
    "assets/home/company3.png",
    "assets/home/company1.png",
    "assets/home/company2.png",
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center space-y-2 lg:space-y-0">
      <div className="font-piepie text-4xl text-center lg:text-start lg:text-5xl w-full lg:w-[50%]">
        Being recognized globally
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-10 ">
        {awardsImage.map((image: string, index: number) => (
          <img key={index} src={image} className="p-8 lg:p-8 w-48 h-32" />
        ))}
      </div>
    </div>
  );
}

export default GlobalAwards;

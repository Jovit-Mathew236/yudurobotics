import Link from "next/link";
import React from "react";
interface JumpingButtonsProps {
  ishorizontal?: string;
  text1?: string;
  text2?: string;
  bgColor?: string;
  textColor?: string;
  link?: string;
}
const JumpingButtons: React.FC<JumpingButtonsProps> = ({
  ishorizontal = "false",
  text1,
  text2,
  bgColor,
  textColor,
  link = "",
}) => {
  return (
    <div
      className={`${
        ishorizontal == "true"
          ? "flex flex-row"
          : "flex flex-row lg:flex-col lg:space-y-10"
      } justify-center items-center space-x-10 px-12 font-tthover`}
    >
      <div>
        {link && link !== "#" ? (
          <Link href={link}>
            <div
              className={`rounded-full text-xs lg:text-lg h-32 w-32 lg:h-40 lg:w-40 flex flex-col justify-center items-center transform transition duration-500 hover:translate-y-4`}
              style={{
                backgroundColor: bgColor || "#F00",
                color: textColor || "#FFF",
              }}
            >
              <span className="block font-tthoves-semiBold">
                {text1 || "Lemme"}
              </span>
              <span className="block italic font-tthover-bold">
                {text2 || "Explore"}
              </span>
            </div>
          </Link>
        ) : (
          <div
            className={`rounded-full text-xs lg:text-lg h-32 w-32 lg:h-40 lg:w-40 flex flex-col justify-center items-center transform transition duration-500 hover:-translate-y-4`}
            style={{
              backgroundColor: bgColor || "#F00",
              color: textColor || "#FFF",
            }}
          >
            <span className="block font-tthoves-semiBold">
              {text1 || "Lemme"}
            </span>
            <span className="block italic font-tthover-bold  ">
              {text2 || "Explore"}
            </span>
          </div>
        )}

        <div
          className="rounded-full border-destructive -mt-24 border h-32 w-32 lg:h-40 lg:w-40 lg:-mt-32"
          style={{
            // Default text color
            border: `2px solid ${bgColor || "#000"}`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default JumpingButtons;

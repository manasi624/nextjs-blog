import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  message: string;
  person: string;
  img: StaticImageData;
  reverse: boolean;
};

export default function Notification({ message, person, img, reverse }: Props) {
  return (
    <div className="text-black dark:text-white lg:w-[380px] sm:w-[200px] flex flex-col flex-nowrap text-left relative mb-12 mx-6">
      <div
        className={`absolute ${reverse ? "top-0 left-0" : " top-0 right-0"}`}
      >
        <div
          className={`bg-light_bg_dark_gray dark:bg-dark_bg_gray text-left p-3 h-fit lg:w-[300px] sm:w-[160px] rounded-tl-lg rounded-tr-lg ${
            reverse ? "rounded-bl-lg" : "rounded-br-lg"
          }`}
        >
          <p className="text-white">
            <b> {message}</b>
          </p>
          <p className="text-gray-300">
            <b>{person}</b>{" "}
          </p>
        </div>
        <div
          className={`absolute ${
            reverse
              ? " lg:bottom-[-68px] lg:right-[-68px] sm:bottom-[-30px] sm:right-[-30px]"
              : "lg:bottom-[-68px] lg:left-[-68px] sm:bottom-[-30px] sm:left-[-30px]"
          }  `}
        >
          <Image src={img} width={80} height={80} alt="Character 1" />
        </div>
      </div>
    </div>
  );
}

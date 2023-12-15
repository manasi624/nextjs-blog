import React from "react";

type Props = {
  tagline: string;
  color: string;
};

export default function Tag({ tagline, color }: Props) {
  return (
    <div
      className="border text-sm sm:text-lg border-transparent px-3 py-5 my-3 rounded-full h-fit w-fit text-black dark:text-gray-50 bg-light_bg_skin dark:bg-dark_bg_skin"
    >
      <h2>
        <b>{tagline}</b>
      </h2>
    </div>
  );
}

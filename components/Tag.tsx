import React from "react";

type Props = {
  tagline: string;
  color: string;
};

export default function Tag({ tagline, color }: Props) {
  return (
    <div
      className="border text-sm sm:text-lg border-transparent p-3 my-3 rounded-full h-fit w-fit"
      style={{ color: "rgb(0, 0, 0)", backgroundColor: color }}
    >
      <h2>
        {" "}
        <b>{tagline}</b>
      </h2>
    </div>
  );
}

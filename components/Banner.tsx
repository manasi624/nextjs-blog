import React from "react";

function Banner() {
  return (
    <div className="text-black dark:text-white flex flex-col lg:flex-row lg:space-x-2 justify-between font-bold px-10 py-5 mt-5 border rounded-md bg-transparent ">
      <div>
        <h1 className="text-3xl md:text-6xl prathamesh" id="prathamesh">Prathamesh's Blog</h1>
        <h2 className="mt-4 md:mt-0 ">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-light_bg_button dark:decoration-dark_bg_button">
            every developer's
          </span>{" "}
          favourite blog in .dev world
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Latest product reviews | Amazing offers | Top products | And many more!
      </p>
    </div>
  );
}

export default Banner;

import React from "react";
import { motion } from "framer-motion";
import Tag from "./Tag";
import character from "../static/char4.png";
import Notification from "./Notification";
import Link from "next/link";

export default function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 140 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-black dark:text-white flex flex-col h-screen items-center justify-center text-center z-0 mb-16"
    >
      <div className="text-center w-[400px] md:w-[600px] lg:w-[800px] z-20">
        <div className="flex flex-col items-center mt-40">
          <Tag tagline="Last call! 🚀" color="rgb(254 233 203)" />
        </div>
        <h1 className="sm:text-5xl text-4xl   font-extrabold pb-6">
          Ready to start?
        </h1>
        <h2 className="text-xl mt-3">
          Here is your last chance to explain how cool your app is. Focus
        </h2>
        <h2 className="text-xl mb-2">
          on the benefits for your users, not on the features.
        </h2>
        <div className="my-4 mb-8">
          <Link
            href={"/posts"}
            className="w-fit h-fit bg-light_bg_button dark:bg-dark_bg_button p-2 m-2 rounded-lg shadow-sm"
          >
            <b>Get Started, It's free</b>
          </Link>
        </div>
        <div>
          <Notification
            message="Enhancing the Gaming Industry 1 lvl at a time by matching Talent with Opportunity"
            person="Adam, Solo founder"
            img={character}
            reverse={false}
          />
        </div>
      </div>
    </motion.div>
  );
}

"use client"
import React, { useContext } from "react";
import { motion } from "framer-motion";
import Tag from "./Tag";
import Link from "next/link";
import { ShepherdTour, ShepherdTourContext } from "react-shepherd";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import dynamic from "next/dynamic";
const Tour = dynamic(() => import("./tour"), { ssr: false });

// import { steps } from "@/steps";





export default function Hero() {

  const {user, loading, error} = useSelector((state:RootState) => state.user);
  const tour = useContext(ShepherdTourContext);



	// tour.addStep({
	// 	title: 'Get Started',
	// 	text: 'Just click on Get Started to login and start journey.',
	// 	attachTo: {
	// 		element: '.get_started',
	// 		on: 'bottom'
	// 	},
	// 	buttons: [
	// 		{
	// 			action: () => tour.back(),
	// 			classes: 'p-4 m-2 bg-slate-100 border flex items-center justify-center rounded-md font-semibold w-12 text-black hover:bg-slate-50 h-4 shepherd_btn',
	// 			text: 'Back'
	// 		},
	// 		{
	// 			action: () => tour.next(),
  //       classes: 'p-4 m-2 bg-slate-100 border  flex items-center justify-center rounded-md font-semibold w-12 text-black hover:bg-slate-50 h-4 shepherd_btn',
	// 			text: 'Next'
	// 		}
	// 	],
	// 	id: 'creating'
	// });


  return (
    

      <motion.div
        initial={{ opacity: 0, y: 140 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="hero_component text-black dark:text-white max-w-7xl flex flex-col space-y-0 items-center justify-center text-center z-0 px-8 mx-auto z-11"
      >
        <Tour />
        <div className="text-center w-[400px] md:w-[600px] lg:w-[800px] z-20 py-4">
          <div className="flex flex-col items-center">
            <Tag
              tagline="Matching talent with Opportunity"
              color="rgb(241 127 61 / 15%)"
            />
          </div>
          <div className="text-4xl sm:text-7xl font-extrabold pb-6">
            Let's Enhance <br /> Gaming <span onClick={() => tour?.start} className="hover:cursor-pointer" >🎮 </span>Industry
          </div>
          <h2
            className="text-sm sm:text-xl my-3 mx-8"
            
          >
            WE HELP PROFESSIONALS AND BUSINESSES IN THE GAMING INDUSTRY
          </h2>
          <div className="first_element" id="first_element">
            <Link
              href={"/posts"}
              id=""
              className=" w-fit h-fit bg-light_bg_button dark:bg-dark_bg_button p-2 m-2 rounded-lg shadow-sm"
            >
              <b>Get Started, It's free</b>
            </Link>
            <p className="text-sm text-stone-600 mt-2">
              Free 14 days trials,no credit card needed
            </p>
          </div>
        </div>
      </motion.div>
  );
}

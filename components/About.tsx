import React from "react";
import { motion } from "framer-motion";
import Tag from "./Tag";

export default function About() {
  

  return (
    <div>
      <div className=" flex flex-col space-y-0 items-center justify-center overflow-hidden text-center z-0">
        <div className="text-center w-[400px] md:w-[800px] lg:w-[1000px] z-20">
          <motion.div
            initial={{ opacity: 0, y: 140 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="flex flex-col items-center mt-40">
              <Tag tagline="Who we are 🦸🏼" color="#f1f2f4" />
            </div>
            <h1 className="sm:text-5xl text-4xl  font-extrabold pb-6">
              About Us
            </h1>
            <p className="m-6 px-6 text-base">
              Gaming is an escape for a lot of people. To some it's the only
              part of their day they look forward to, when they log on with
              their squad and have fun, forgetting about everything else for a
              while. For some it could mean muting the pain of reality for a
              small period of time. For some it could be the glory of Esports
              that gaming enables, moments of pure brilliance and passion. We
              understand creating such escape worthy experiences is a monumental
              challenge and that's where we come in. We are not just a platform,
              we're the opportunity to build better experiences. That's our aim,
              To help improve careers & businesses in Game Dev so that you can
              make more awesome games/game-tech products that improve lives and
              bring joy to people. We strive to bring you discoverability,
              opportunity and the network to build knowledge, skill, community &
              better products.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

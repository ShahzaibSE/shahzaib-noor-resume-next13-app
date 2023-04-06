"use client";

import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ResumeContainer from "./ResumeContainer";
import { motion } from "framer-motion";
import { variants } from "../utitlities/utils";


export default function ResumePage() {
  return (
    <div>
      <div className="h-screen w-screen opacity-95 md:p-10 md:opacity-100">
        <div className="lg:rounded-lg; md:w-auto; sm:rounded-none; w-full bg-neutral-800 sm:p-5 md:rounded-md md:p-10 lg:p-10">
          <header>
            <Header />
          </header>
        <motion.main
            variants={variants} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: "linear" }} // Set the transition to linear
            className=""
          >
            <ResumeContainer />
          </motion.main>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}

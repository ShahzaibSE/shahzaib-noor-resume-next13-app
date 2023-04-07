"use client";
import React, {
  useCallback,
  useRef,
} from "react";
// TS Particles animation.
import { particle_background_samples } from "../utitlities/utils";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ResumeContainer() {
  return (
    <div className="container">
      <div className="flex flex-wrap justify-between border-t-gray-300 border-t-2 border-b-2 bg-neutral-800 border-b-gray-300 h-1/4 p-10 my-10">
        <div className="flex">
          <h1 className="text-white font-bold text-xl md:text-2xl lg:text-3xl">Resume</h1>
        </div>
        <div className="flex">
          <h3 className="text-white font-semibold text-sm">6 Years of Experience</h3>
        </div>
      </div>
    </div>
  );
}

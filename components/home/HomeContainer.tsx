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

export default function HomeContainer() {
  return (
    <div className="container">
      <div className="flex flex-row flex-wrap items-center justify-around p-5 md:p-10 lg:p-20">
        <div className="flex">
          <Image
            className="w-full rounded-full ring-4 ring-gray-500"
            alt="Shahzaib Noor"
            src="/assets/dp-animated.jpeg"
          />
        </div>
        <div className="my-5 flex flex-col">
          <div className="flex flex-wrap items-center">
            <p className="text-base text-gray-400">
              Full-Stack Software Engineer
            </p>
          </div>
          <div className="my-5 flex flex-wrap items-center">
            <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Shahzaib Noor
            </h1>
          </div>
          <div className="flex max-w-sm flex-wrap items-center md:max-w-md">
            <p className="text-left text-white">
              As a Full-Stack Software Engineer, I
              have 5+ working years of
              frontend/backend development
              experience, experience in HTML, CSS,
              Node.js, Express.js JavaScript,
              TypeScript, Python, MongoDB, MySQL,
              PostgreSQL, Flutter, Git, Docker
              etc. Also have general programming
              experience since 2012.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row p-5 md:p-5 lg:p-10">
        <div className="flex">
          <h1 className="text-white font-semibold text-2xl decoration-blue-500 underline">What I Do</h1>
        </div>
      </div>
    </div>
  );
}

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
    <div className="container py-10 md:p-10">
      <div className="my-10 flex h-1/4 flex-wrap justify-between border-t-2 border-b-2 border-t-gray-300 border-b-gray-300 bg-neutral-800 p-10">
        <div className="flex">
          <h1 className="text-xl font-bold text-white md:text-2xl lg:text-3xl">
            Resume
          </h1>
        </div>
        <div className="flex">
          <h3 className="text-sm font-semibold text-white">
            6 Years of Experience
          </h3>
        </div>
      </div>
      <div className="grid grid-flow-row md:grid-flow-col">
        <div className="px-10 md:px-0 md:py-0">
          <div className="flex p-5 md:py-5">
            <h2 className="text-lg font-bold text-white">
              Education
            </h2>
          </div>
          <div className="flex flex-wrap">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <li className="mb-10 ml-4">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  March 2016
                </time>
                <h3 className="text-sm font-semibold text-white">
                  Sir Syed University of
                  Engineering and Technology,
                  Karachi, Pakistan
                </h3>
                <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Bachelors in Computer Science
                </p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2012 - 2016
                </time>
                <h3 className="text-sm font-semibold text-white">
                  Govt. Jinnah College, Karachi,
                  Pakistan
                </h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  P R E - E N G I N E E R I N G
                </p>
              </li>
              <li className="ml-4">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2009
                </time>
                <h3 className="text-sm font-semibold text-white">
                  Sir Syed Children Academy,
                  Karachi, Pakistan
                </h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Science
                </p>
              </li>
            </ol>
          </div>
        </div>
        <div className="p-10 md:p-0">
          <div className="flex p-5 md:py-5">
            <h2 className="text-lg font-bold text-white">
              Experience
            </h2>
          </div>
          <div className="flex flex-wrap">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <li className="mb-10 ml-4">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  September 2020
                </time>
                <h3 className="text-sm font-semibold text-white">
                  Software engineer
                </h3>
                <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Freelance
                </p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Aug 2018 - Sep 2020
                </time>
                <h3 className="text-sm font-semibold text-white">
                  Software engineer
                </h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Prismpay
                </p>
              </li>
              <li className="ml-4">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Sep 2017 - Aug 2018
                </time>
                <h3 className="text-sm font-semibold text-white">
                  Software Engineer
                </h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Get started with dozens of web
                  components and interactive
                  elements built on top of
                  Tailwind CSS.
                </p>
              </li>
              <li className="ml-4">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  May 2017 - Sep 2017
                </time>
                <h3 className="text-sm font-semibold text-white">
                  Web Developer
                </h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Get started with dozens of web
                  components and interactive
                  elements built on top of
                  Tailwind CSS.
                </p>
              </li>
              <li className="ml-4">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Jan 2017 - April 2017
                </time>
                <h3 className="text-sm font-semibold text-white">
                  Python Intern
                </h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Panacloud
                </p>
              </li>
              <li className="ml-4">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  June 2016 - Dec 2016
                </time>
                <h3 className="text-sm font-semibold text-white">
                  Software Engineer(MEAN Stack)
                </h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Rockville Technologies
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="px-10 md:px-0 md:py-5">
        <div className="flex p-5 md:pb-6 md:pt-10">
          <h2 className="text-lg font-bold text-white">
            Skills
          </h2>
        </div>
        <div className="grid grid-flow-row gap-2 md:grid-flow-col">
          <div className="relative pt-1">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <span className="inline-block rounded-full py-1 px-2 text-xs font-semibold uppercase text-white">
                  HTML/CSS
                </span>
              </div>
              <div className="text-right">
                <span className="inline-block text-xs font-semibold text-blue-600">
                  100%
                </span>
              </div>
            </div>
            <div className="mb-4 flex h-2 overflow-hidden rounded bg-blue-200 text-xs">
              <div className="flex w-full flex-col justify-center whitespace-nowrap bg-blue-500 text-center text-white shadow-none"></div>
            </div>
          </div>
          <div className="relative pt-1">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <span className="inline-block rounded-full py-1 px-2 text-xs font-semibold uppercase text-white">
                  JavaScript
                </span>
              </div>
              <div className="text-right">
                <span className="inline-block text-xs font-semibold text-blue-600">
                  90%
                </span>
              </div>
            </div>
            <div className="mb-4 flex h-2 overflow-hidden rounded bg-blue-200 text-xs">
              <div className="flex w-11/12 flex-col justify-center whitespace-nowrap bg-blue-500 text-center text-white shadow-none"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-flow-row gap-2 md:grid-flow-col">
          <div className="relative pt-1">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <span className="inline-block rounded-full py-1 px-2 text-xs font-semibold uppercase text-white">
                  TypeScript
                </span>
              </div>
              <div className="text-right">
                <span className="inline-block text-xs font-semibold text-blue-600">
                  90%
                </span>
              </div>
            </div>
            <div className="mb-4 flex h-2 overflow-hidden rounded bg-blue-200 text-xs">
              <div className="flex w-11/12 flex-col justify-center whitespace-nowrap bg-blue-500 text-center text-white shadow-none"></div>
            </div>
          </div>
          <div className="relative pt-1">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <span className="inline-block rounded-full py-1 px-2 text-xs font-semibold uppercase text-white">
                  Flutter
                </span>
              </div>
              <div className="text-right">
                <span className="inline-block text-xs font-semibold text-blue-600">
                  90%
                </span>
              </div>
            </div>
            <div className="mb-4 flex h-2 overflow-hidden rounded bg-blue-200 text-xs">
              <div className="flex w-11/12 flex-col justify-center whitespace-nowrap bg-blue-500 text-center text-white shadow-none"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-flow-row gap-2 md:grid-flow-col">
          <div className="relative pt-1">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <span className="inline-block rounded-full py-1 px-2 text-xs font-semibold uppercase text-white">
                  Node.js
                </span>
              </div>
              <div className="text-right">
                <span className="inline-block text-xs font-semibold text-blue-600">
                  90%
                </span>
              </div>
            </div>
            <div className="mb-4 flex h-2 overflow-hidden rounded bg-blue-200 text-xs">
              <div className="flex w-11/12 flex-col justify-center whitespace-nowrap bg-blue-500 text-center text-white shadow-none"></div>
            </div>
          </div>
          <div className="relative pt-1">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <span className="inline-block rounded-full py-1 px-2 text-xs font-semibold uppercase text-white">
                  Express.js
                </span>
              </div>
              <div className="text-right">
                <span className="inline-block text-xs font-semibold text-blue-600">
                  90%
                </span>
              </div>
            </div>
            <div className="mb-4 flex h-2 overflow-hidden rounded bg-blue-200 text-xs">
              <div className="flex w-11/12 flex-col justify-center whitespace-nowrap bg-blue-500 text-center text-white shadow-none"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-flow-row gap-2 md:grid-flow-col">
          <div className="relative pt-1">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <span className="inline-block rounded-full py-1 px-2 text-xs font-semibold uppercase text-white">
                  React.js
                </span>
              </div>
              <div className="text-right">
                <span className="inline-block text-xs font-semibold text-blue-600">
                  90%
                </span>
              </div>
            </div>
            <div className="mb-4 flex h-2 overflow-hidden rounded bg-blue-200 text-xs">
              <div className="flex w-11/12 flex-col justify-center whitespace-nowrap bg-blue-500 text-center text-white shadow-none"></div>
            </div>
          </div>
          <div className="relative pt-1">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <span className="inline-block rounded-full py-1 px-2 text-xs font-semibold uppercase text-white">
                  Next.js
                </span>
              </div>
              <div className="text-right">
                <span className="inline-block text-xs font-semibold text-blue-600">
                  90%
                </span>
              </div>
            </div>
            <div className="mb-4 flex h-2 overflow-hidden rounded bg-blue-200 text-xs">
              <div className="flex w-11/12 flex-col justify-center whitespace-nowrap bg-blue-500 text-center text-white shadow-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

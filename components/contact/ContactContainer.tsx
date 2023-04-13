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

export default function ContactContainer() {
  return (
    <div className="container py-10 md:p-10">
      <div className="my-10 flex h-1/4 flex-wrap justify-between border-t-2 border-b-2 border-t-gray-300 border-b-gray-300 bg-neutral-800 p-10">
        <div className="flex">
          <h1 className="text-xl font-bold text-white md:text-2xl lg:text-3xl">
            Contact
          </h1>
        </div>
        <div className="flex">
          <h3 className="text-sm font-semibold text-white">
            Get in Touch
          </h3>
        </div>
      </div>
      {/* <div className="flex">
        <div className="h-96 w-full">
          <div className="absolute top-0 left-0 h-full w-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"></iframe>
          </div>
        </div>
      </div> */}
      <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-3 lg:grid-flow-col lg:grid-cols-3">
        <div className="flex flex-col items-center justify-around">
          <div className="p-4">
            <motion.div
              whileHover={{ scale: 1.2 }}
            >
              <div className="flex justify-between">
                <div className="w-max">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="relative top-6 h-6 w-6 text-white md:h-8 md:w-8 lg:h-8 lg:w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </div>
                <div className="px-4">
                  <ul className="list-none">
                    <li>
                      <div className="flex">
                        <h1 className="text-sm font-semibold text-white md:text-sm lg:text-lg">
                          +923032057794
                        </h1>
                      </div>
                    </li>
                    <li>
                      <div className="flex max-w-sm md:max-w-md">
                        <p className="text-sm text-neutral-500">
                          You are today, you have
                          a laureet fringilla
                          quis, you have a
                          precious life.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="p-4">
            <motion.div
              whileHover={{ scale: 1.2 }}
            >
              <div className="flex justify-between">
                <div className="w-max">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="relative top-6 h-6 w-6 text-white md:h-8 md:w-8 lg:h-8 lg:w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </div>
                <div className="px-4">
                  <ul className="list-none">
                    <li>
                      <div className="flex">
                        <h1 className="text-sm font-semibold text-white md:text-sm lg:text-lg">
                          +923032057794
                        </h1>
                      </div>
                    </li>
                    <li>
                      <div className="flex max-w-sm md:max-w-md">
                        <p className="text-sm text-neutral-500">
                          You are today, you have
                          a laureet fringilla
                          quis, you have a
                          precious life.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="p-4">
            <motion.div
              whileHover={{ scale: 1.2 }}
            >
              <div className="flex justify-between">
                <div className="w-max">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="relative top-6 h-6 w-6 text-white md:h-8 md:w-8 lg:h-8 lg:w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </div>
                <div className="px-4">
                  <ul className="list-none">
                    <li>
                      <div className="flex">
                        <h1 className="text-sm font-semibold text-white md:text-sm lg:text-lg">
                          +923032057794
                        </h1>
                      </div>
                    </li>
                    <li>
                      <div className="flex max-w-sm md:max-w-md">
                        <p className="text-sm text-neutral-500">
                          You are today, you have
                          a laureet fringilla
                          quis, you have a
                          precious life.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-around">
          <div className="flex">
            <h1 className="text-2xl font-semibold text-white underline decoration-blue-500">
              What I Do
            </h1>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

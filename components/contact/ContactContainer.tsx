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
      <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-2 lg:grid-flow-col lg:grid-cols-2 md:gap-1">
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
        <div>
          <form>
            <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-2">
              <div>
                <div className="flex flex-col flex-wrap items-center justify-center md:items-start md:justify-center lg:items-start lg:justify-center">
                  <div className="py-6">
                    <h1 className="text-2xl font-semibold text-white underline decoration-blue-500">
                      How Can I Help You?
                    </h1>
                  </div>
                  <div className="my-2 flex">
                    <div>
                      <input
                        className="rounded-md bg-neutral-800 max-w-full"
                        type={"text"}
                        placeholder="Full Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="my-2 flex">
                    <div>
                      <input
                        className="w-full rounded-md bg-neutral-800"
                        type="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="my-2 flex">
                    <div>
                      <input
                        className="w-full rounded-md bg-neutral-800"
                        type="text"
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-wrap items-center justify-center md:items-start md:justify-evenly lg:items-start lg:justify-start">
                <div className="md:mt-20 lg:mt-20 xl:mt-20">
                  <textarea
                    className="bg-neutral-800"
                    rows={7}
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="my-4 flex">
                    <div className="">
                      <button
                        type="submit"
                        className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
              </div>
            </div>
          </form>
        </div>
        {/* <div className="my-6 flex flex-col items-center justify-start md:my-0">
          <div className="flex">
            <h1 className="text-2xl font-semibold text-white underline decoration-blue-500">
              How Can I Help You?
            </h1>
          </div>
          <div className="py-6">
            <form className="gird w-full max-w-sm md:grid-flow-col">
              <div className="flex flex-col items-center justify-start md:my-0 lg:my-0">
                <div>
                  <ul className="list-none">
                    <li>
                      <div className="py-2">
                        <input
                          className="min-w-full rounded-md bg-neutral-800"
                          type={"text"}
                          placeholder="Full Name"
                          required
                        />
                      </div>
                    </li>
                    <li>
                      <div className="py-2 md:w-2/5">
                        <input
                          className="rounded-md bg-neutral-800"
                          type={"text"}
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </li>
                    <li>
                      <div className="py-2 md:w-2/5">
                        <input
                          className="rounded-md bg-neutral-800"
                          type={"text"}
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div>
            <textarea
              className="bg-neutral-800"
              rows={7}
              placeholder="Message"
            ></textarea>
          </div>
          <div className="">
            <button
              type="submit"
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
             Send Message
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

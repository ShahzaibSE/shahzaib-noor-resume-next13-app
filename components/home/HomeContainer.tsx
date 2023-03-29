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
          <h1 className="text-2xl font-semibold text-white underline decoration-blue-500">
            What I Do
          </h1>
        </div>
      </div>
      <div className="flex flex-row justify-around items-center px-5 md:px-5 lg:px-10">
        <div className="flex flex-wrap items-center justify-around">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-10 w-10 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </div>
          <div className="flex px-6">
            <ul className="list-none">
              <li>
                <div className="flex">
                  <h1 className="text-sm font-semibold text-white md:text-sm lg:text-lg">
                    Copywrite
                  </h1>
                </div>
              </li>
              <li>
                <div className="flex max-w-sm md:max-w-md">
                  <p className="text-white">
                    Mauris neque libero, aliquet
                    vel mollis nec, euismod sed
                    tellus. Mauris convallis
                    dictum elit id volutpat.
                    Vivamus blandit, dolor vitae
                    lacinia maximus, risus velit
                    vehicula odio, a tincidunt
                    turpis turpis tempus ex.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-around">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-10 w-10 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </div>
          <div className="flex px-6">
            <ul className="list-none">
              <li>
                <div className="flex">
                  <h1 className="text-sm font-semibold text-white md:text-sm lg:text-lg">
                    Copywrite
                  </h1>
                </div>
              </li>
              <li>
                <div className="flex max-w-sm md:max-w-md">
                  <p className="text-white">
                    Mauris neque libero, aliquet
                    vel mollis nec, euismod sed
                    tellus. Mauris convallis
                    dictum elit id volutpat.
                    Vivamus blandit, dolor vitae
                    lacinia maximus, risus velit
                    vehicula odio, a tincidunt
                    turpis turpis tempus ex.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap flex-row justify-around items-center px-5 md:px-5 lg:px-10">
        <div className="flex flex-wrap items-center justify-around">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-10 w-10 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </div>
          <div className="flex px-6">
            <ul className="list-none">
              <li>
                <div className="flex">
                  <h1 className="text-sm font-semibold text-white md:text-sm lg:text-lg">
                    Copywrite
                  </h1>
                </div>
              </li>
              <li>
                <div className="flex max-w-sm md:max-w-md">
                  <p className="text-white">
                    Mauris neque libero, aliquet
                    vel mollis nec, euismod sed
                    tellus. Mauris convallis
                    dictum elit id volutpat.
                    Vivamus blandit, dolor vitae
                    lacinia maximus, risus velit
                    vehicula odio, a tincidunt
                    turpis turpis tempus ex.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-around py-5">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-10 w-10 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </div>
          <div className="flex px-6">
            <ul className="list-none">
              <li>
                <div className="flex">
                  <h1 className="text-sm font-semibold text-white md:text-sm lg:text-lg">
                    Copywrite
                  </h1>
                </div>
              </li>
              <li>
                <div className="flex max-w-sm md:max-w-md">
                  <p className="text-white">
                    Mauris neque libero, aliquet
                    vel mollis nec, euismod sed
                    tellus. Mauris convallis
                    dictum elit id volutpat.
                    Vivamus blandit, dolor vitae
                    lacinia maximus, risus velit
                    vehicula odio, a tincidunt
                    turpis turpis tempus ex.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

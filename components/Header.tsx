"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="border-gray-200 bg-white px-4 py-2.5 dark:bg-neutral-800 lg:px-6">
      {/* <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
        <div
          className="flex items-center"
        >
          <Image
            src="assets/letter-s.jpg"
            className="mr-3 h-6 sm:h-9"
            alt="Shahzaib Noor"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Shahzaib Noor
          </span>
        </div>
        <div className="flex items-center lg:order-2">
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">
              Open main menu
            </span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
          id="mobile-menu-2"
        >
          <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
            <li>
              <a
                href="#"
                className="bg-primary-700 lg:text-primary-700 block rounded py-2 pr-4 pl-3 text-white dark:text-white lg:bg-transparent lg:p-0"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#"
                className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="#"
                className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div> */}
      <div className="flex flex-wrap items-center">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500">
            <h1 className="font-sans text-3xl font-bold text-white">
              S
            </h1>
          </div>
          <div className="px-2">
            <h1 className="font-sans text-2xl font-bold text-white">
              Shahzaib Noor
            </h1>
          </div>
        </div>
      </div>
    </nav>
    // <nav className="flex flex-wrap items-center justify-between bg-#222222 p-6">
    //   <div className="flex flex-wrap items-center justify-between">
    //     <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500">
    //       <h3 className="text-white font-bold">S</h3>
    //     </div>
    //     <div className="px-5">
    //       <p>Shahzaib Noor</p>
    //     </div>
    //   </div>
    // </nav>
  );
}

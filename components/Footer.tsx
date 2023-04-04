"use client";

import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-wrap justify-center p-10 md:justify-between md:py-10">
      <div className="grid grid-cols-3 content-center gap-4">
        <div className="flex px-5 md:px-5">
          <Link href="https://www.facebook.com/shahzaib.noor.9/" target="_blank">
            <FaFacebook className="text-white" />
          </Link>
        </div>
        <div className="flex px-5 md:px-5">
          <Link href="https://twitter.com/ShahzaibNoor1" target="_blank">
            <FaTwitter className="text-white" />
          </Link>
        </div>
        <div className="flex px-5 md:px-5">
          <Link href="https://github.com/ShahzaibSE" target="_blank">
            <FaGithub className="text-white" />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end py-5 md:py-0">
        <h1 className="text-right text-sm font-bold text-white">
          © 2023 All rights reserved. Shahzaib
          Noor.
        </h1>
      </div>
    </div>
  );
}

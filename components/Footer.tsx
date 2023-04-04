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
    <div className="flex flex-wrap p-10 justify-center md:justify-between">
      <div className="grid grid-cols-3 gap-4 content-center">
        <div className="flex px-5 md:px-5">
          <FaFacebook className="text-white" />
        </div>
        <div className="flex px-5 md:px-5">
          <FaTwitter className="text-white" />
        </div>
        <div className="flex px-5 md:px-5">
          <FaGithub className="text-white" />
        </div>
      </div>
      <div className="flex items-center justify-end py-5 md:py-0">
        <h1 className="text-right text-sm text-white">
          © 2023 All rights reserved. Shahzaib
          Noor.
        </h1>
      </div>
    </div>
  );
}

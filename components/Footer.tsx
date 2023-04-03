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
    <div className="flex flex-wrap p-10 justify-between">
      <div className="flex items-center justify-around sm:justify-center">
        <div className="flex px-5">
          <FaFacebook className="text-white" />
        </div>
        <div className="flex px-5">
          <FaTwitter className="text-white" />
        </div>
        <div className="flex px-5">
          <FaGithub className="text-white" />
        </div>
      </div>
      <div className="flex items-center justify-end">
        <h1 className="text-right text-sm text-white">
          © 2023 All rights reserved. Shahzaib
          Noor.
        </h1>
      </div>
    </div>
  );
}

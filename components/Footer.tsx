'use client';

import React from 'react';
import {
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex flex-wrap p-10">
      <div className="flex justify-start items-center">
        <div className="flex justify-start items-center">
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
      </div>
      <div className="flex justify-end items-center">
        <div className="flex justify-end">
          <h1 className="text-white text-right text-sm">© 2023 All rights reserved. Shahzaib Noor.</h1>
        </div>
      </div>
    </div>
  )
}

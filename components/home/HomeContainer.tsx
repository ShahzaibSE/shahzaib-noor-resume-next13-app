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
    <div className="flex flex-wrap items-center justify-around p-5 md:p-10 lg:p-20">
      <div className="flex">
        <Image
          className="rounded-full ring-4 ring-gray-500"
          alt="Shahzaib Noor"
          src="/assets/dp-animated.jpeg"
        />
      </div>
      <div className="flex my-5">
        {/* <div className="flex">
          <p className="text-base text-gray-400">
            Full-Stack Software Engineer
          </p>
        </div> */}
        <div className="flex flex-wrap items-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Shahzaib Noor
          </h1>
        </div>
        {/* <div className="flex">
          <p>
            Fusce tempor magna mi, non egestas
            velit ultricies nec. Aenean convallis,
            risus non condimentum gravida, odio
            mauris ullamcorper felis, ut venenatis
            purus ex eu mi. Quisque imperdiet
            lacinia urna, a placerat sapien
            pretium eu.
          </p>
        </div> */}
      </div>
    </div>
  );
}

import React, {
  useCallback,
  useRef,
} from "react";
// TS Particles animation.
import particles_config from "./utitlities/particles.json";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
//
import Link from "next/link";
import Image from "next/image";
//
import Header from "./Header";

export default function HomePage() {
  const ref = useRef(null);
  const particlesInit = useCallback(
    async (engine: any) => {
      console.log(engine);
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
    },
    []
  );
  //
  const particlesLoaded = useCallback(
    async (container: any) => {
      await console.log(container);
    },
    []
  );
  //
  return (
    <div>
      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        ref={ref}
        options={{particles_config}}
      />
      <div className="h-screen w-screen p-10">
        <div className="md:rounded-md; md:w-auto; w-full rounded-lg bg-neutral-800 p-10">
          <header>
            <Header />
          </header>
          <main></main>
          <footer>{/* Footer */}</footer>
        </div>
      </div>
    </div>
  );
}

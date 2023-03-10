import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
//
import Header from "./Header";

export default function HomePage() {
  return (
    <div className="p-10 w-screen h-screen">
      <div className="rounded-lg md:rounded-md; md:w-auto; w-full bg-neutral-800 p-10">
        <header>
          <Header />
        </header>
        <main></main>
        <footer>
          {/* Footer */}
        </footer>
      </div>
    </div>
  );
}

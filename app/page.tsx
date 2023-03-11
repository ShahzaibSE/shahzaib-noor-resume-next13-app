'use client';
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import HomePage from "@/components/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <HomePage />;
}

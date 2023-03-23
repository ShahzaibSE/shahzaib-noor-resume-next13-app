'use client';
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import HomePage from "@/components/home/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <HomePage />;
}

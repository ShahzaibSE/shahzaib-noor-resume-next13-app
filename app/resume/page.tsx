'use client';
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import ResumePage from "@/components/resume/Resume";
ResumePage

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <ResumePage />;
}

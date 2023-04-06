'use client';
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import ResumePage from "@/components/resume/Resume";

const inter = Inter({ subsets: ["latin"] });

export default function Resume() {
  return <ResumePage />;
}

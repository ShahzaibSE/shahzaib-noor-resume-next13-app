'use client';
import React from 'react';
import { Project, ProjectCard } from '../utitlities/utils';
import { motion } from "framer-motion";

export default function PortfolioContainer() {
  const projects: Array<Project> = [
    {
      name: "Panaverse DAO with Chakra-UI",
      imageUrl: "/assets/panaverse-dao.png",
      sourceCodeUrl: "https://github.com/ShahzaibSE/panaverse-dao-syllabus-nextjs-website.git"
    },
    {
      name: "Rive Rocket Animation",
      imageUrl: "/assets/rive-rocket.png",
      sourceCodeUrl: "https://github.com/ShahzaibSE/rocket-rive-animation-next-app.git"
    }
  ];
  return (
    <div className="container flex flex-wrap justify-evenly items-center p-10">
      {
        projects.map((project: Project, index: number) =>  <motion.div key={index} whileHover={{ scale: 1.2 }}><ProjectCard key={index} name={project.name} imageUrl={project.imageUrl} sourceCodeUrl={project.sourceCodeUrl} /></motion.div>)
      }
    </div>
  )
}

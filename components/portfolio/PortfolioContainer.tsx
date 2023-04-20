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
    },
    {
      name: "Pricing UI with Chakra-UI",
      imageUrl: "/assets/pricing-ui.png",
      sourceCodeUrl: "https://github.com/ShahzaibSE/pricing-ui-next-chakra-app.git"
    },
    {
      name: "Rive Rocket Animation",
      imageUrl: "/assets/todo-next-app.png",
      sourceCodeUrl: "https://github.com/ShahzaibSE/todo-next-app.git"
    },
  ];
  return (
    <div className="grid grid-flow-row gap-6 p-10 lg:grid-cols-3">
      {
        projects.map((project: Project, index: number) => <ProjectCard key={index} name={project.name} imageUrl={project.imageUrl} sourceCodeUrl={project.sourceCodeUrl} />)
      }
    </div>
  )
}

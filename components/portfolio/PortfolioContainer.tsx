'use client';
import React from 'react';
import { Project, ProjectCard } from '../utitlities/utils';

export default function PortfolioContainer() {
  const projects: Array<Project> = [
    {
      name: "Panaverse DAO with Chakra-UI",
      imageUrl: "/assets/panaverse-dao.png",
      sourceCodeUrl: "https://github.com/ShahzaibSE/panaverse-dao-syllabus-nextjs-website.git"
    }
  ];
  return (
    <div className="container flex flex-wrap justify-evenly items-center p-10">
      {
        projects.map((project: Project, index: number) => <ProjectCard key={index} name={project.name} imageUrl={project.imageUrl} sourceCodeUrl={project.sourceCodeUrl} />)
      }
    </div>
  )
}

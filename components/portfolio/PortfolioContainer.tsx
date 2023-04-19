'use client';
import React from 'react';
import { Project, ProjectCard } from '../utitlities/utils';

export default function PortfolioContainer() {
  const projects: Array<Project> = [
    {
      name: "Panaverse DAO with Chakra-UI",
      imageUrl: "assets/panaverse-dao.png"
    }
  ];
  return (
    <div className="container flex flex-wrap justify-evenly items-center">
      {
        projects.map((project: Project, index: number) => <ProjectCard key={index} name={project.name} imageUrl={project.imageUrl} />)
      }
    </div>
  )
}

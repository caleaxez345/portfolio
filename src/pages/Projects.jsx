import React from "react";
import projectsData from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    return (
        <>
            <div className="w-full h-full">
                {/*Header*/}
                <div className="container mx-auto my-5">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-blue-400">My Projects</h1>
                        <p className="text-2xl">Here are some previous projects that I've worked on!</p>
                    </div>
                </div>
                {/*Cards*/}
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/*
                        -ProjectCard is separate component. Treats each item independently 
                        - Allows for each card to have their individual animation and viewport checks
                    */}
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                        ))}
                </div >
            </div>
        </>
    );
};

export default Projects;
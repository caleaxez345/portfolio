import React from "react";
import projectsData from '../data/projectsData';
import { GithubIcon } from "lucide-react";


function Projects() {
    return (
        <>
            <div className="w-full h-full">
                {/*Header*/}
                <div className="container mx-auto my-5">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-fuchsia-600">My Projects</h1>
                        <p className="text-2xl text-white">Here are some previous projects that I've worked on!</p>
                    </div>
                </div>
                {/*Cards*/}
                <div className="flex flex-wrap justify-center">
                    {projectsData.map((project, index) => (
                        <div key={index} className="card w-96 bg-base-200 shadow-xl mr-4 mb-4 mt-4 border border-fuchsia-600">
                            <figure><img src={project.image} alt={project.title} /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-white">{project.title}</h2>
                                <p className="text-white">{project.description}</p>
                                <div className="card-actions justify-center">
                                    <a href={project.githubLink} className="btn btn-primary bg-white hover:bg-gray-200 border border-fuchsia-600" target="_blank" rel="noopener noreferrer">
                                        <GithubIcon />Github
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div >
            </div>
        </>
    );
}

export default Projects;
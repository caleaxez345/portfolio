import React from "react";
import projectsData from '../data/projectsData';
import { FaGithub } from "react-icons/fa";


function Projects() {
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
                <div className="flex flex-wrap justify-center">
                    {projectsData.map((project, index) => (
                        <div key={index} className="card w-96 bg-base-200 shadow-lg shadow-blue-400 mr-4 my-4 rounded-lg border border-blue-400 hover:scale-105 hover:transition-all">
                            <figure><img src={project.image} alt={project.title} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{project.title}</h2>
                                <p className="">{project.description}</p>
                                <div className="card-actions justify-center">
                                    <a href={project.githubLink} className="btn text-black bg-white hover:bg-gray-200 border-2 border-blue-400 hover:border-blue-400" target="_blank" rel="noopener noreferrer">
                                        <FaGithub size={20}/>Github
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
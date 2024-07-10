import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub } from "react-icons/fa";


const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover = {{ scale: 1.1 }}
            whileTap={{ scale: 1.1}}
            className="card w-96 bg-base-200 shadow-lg shadow-blue-400 mx-6 my-10 rounded-lg border border-blue-400"
        >
            <figure><img src={project.image} alt={project.title} /></figure>
            <motion
            className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p className="">{project.description}</p>
                <div className="card-actions justify-center">
                    <a href={project.githubLink} className="btn text-black bg-white hover:bg-gray-400 border-2 border-blue-400 hover:border-blue-400" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={20}/>Github
                    </a>
                </div>
            </motion>
        </motion.div>
    );
};

export default ProjectCard;
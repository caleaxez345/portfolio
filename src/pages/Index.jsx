import React, {useEffect, useState} from "react";
import Picture from '/Professional-Pic/professional-photo.jpg';
import Typewriter from 'typewriter-effect';
import Resume from '/pdf/Resume.pdf'
import { IoMdPaper } from "react-icons/io";
import { BsPersonWorkspace } from "react-icons/bs";
import { motion } from "framer-motion";


function Home() {
    const typeWriter = (
        <Typewriter
            options={{
                strings: ['Software Engineer',
                    'CS Alumni @ UNC Charlotte',
                    'Backend Developer',
                    'Learning Front-end'
                ],
                autoStart: true,
                loop: true,
            }}
        />
    );

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <motion.img 
                           initial={{ opacity: 0, x: -100 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true, amount: 0.5 }}
                           transition={{ duration: 0.7 }}
                 src={Picture} className="w-96 sm:max-w-sm rounded-lg shadow-lg shadow-blue-400 border border-blue-400" />
                <div>
                    <motion.h1 
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.0 }}
                        className="text-5xl font-bold">Welcome!</motion.h1>
                    <motion.h1 
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.0 }}
                        className="py-6 text-5xl font-bold">My name is Carlos Garcia Alavez!
                        </motion.h1>
                    <div className="text-blue-400 text-3xl mb-4"> 
                        {typeWriter}
                    </div>
                    <motion.a 
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.0 }}
                        href={Resume} target="_blank" rel="noopener noreferrer"     
                        className="inline-block"> 
                        <button className="btn btn-sm md:btn-md lg:btn-lg mt-4 border-2 border-blue-400 bg-white text-black hover:bg-gray-200 hover:border-blue-400 hover:scale-105 hover:transition-all">
                            <IoMdPaper size={25}/> View Resume 
                        </button>
                    </motion.a>
                    <motion.a 
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.0, delay: 0.3 }}
                        href="/projects"
                        className="inline-block">
                        <button className="btn btn-sm md:btn-md lg:btn-lg mt-4 border-2 border-blue-400 bg-white text-black ml-4 hover:bg-gray-200 hover:border-blue-400 hover:scale-105 hover:transition-all"><BsPersonWorkspace size={25}/>View Projects</button>  
                    </motion.a>                     
                </div>
            </div>
        </div>
    );
}

export default Home;
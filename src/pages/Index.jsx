import React from "react";
import Picture from '/Professional-Pic/professional-photo.jpg';
import smallPicture from '/Professional-Pic/professional-photo-small.jpg'
import Typewriter from 'typewriter-effect';
import Resume from '/pdf/Resume.pdf'
import { IoMdPaper } from "react-icons/io";
import { BsPersonWorkspace } from "react-icons/bs";
import { Link } from "react-router-dom";
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
        <div className="w-full h-full">
            <div className="hero">
                <div className="hero-content flex-col md:flex-row">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7 }}
                        className="avatar block md:hidden">
                        <div className="ring-blue-400 ring-offset-base-100 w-64 sm:w-80 rounded-full ring ring-offset-2 shadow-blue-400 shadow-xl">
                            <img src={smallPicture} />
                        </div>
                    </motion.div>
                    <motion.img
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7 }}
                        src={Picture}
                        className="hidden md:block max-w-sm shadow-lg shadow-blue-400 rounded-lg border border-blue-400"
                    />
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.7 }}
                            className="text-4xl sm:text-5xl font-bold">
                            Welcome!
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.7 }}
                            className="py-4 text-4xl sm:text-5xl font-bold">
                            I'm Carlos Garcia Alavez!
                        </motion.h2>
                        <div className="text-blue-400 text-2xl sm:text-3xl">
                            {typeWriter}
                        </div>
                        <a href={Resume} target="_blank" rel="noopener noreferrer"
                            className="inline-block">
                            <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.7 }}
                            whileHover={{ scale: 1.1, transition: { duration: 0.5, type: "spring", stiffness: 300, damping: 10 } }}
                            > 
                                <button
                                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4 border-2 border-blue-400 bg-white text-black hover:bg-gray-400 hover:border-blue-400">
                                    <IoMdPaper className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" /> View Resume
                                </button>
                            </motion.div>
                        </a>
                        <Link to="/projects" className="inline-block">
                            <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.9 }}
                            whileHover={{ scale: 1.1, transition: { duration: 0.5, type: "spring", stiffness: 300, damping: 10 } }}
                            >
                                <button
                                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4 border-2 border-blue-400 bg-white text-black ml-4 hover:bg-gray-400 hover:border-blue-400">
                                    <BsPersonWorkspace className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                                    View Projects
                                </button>
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
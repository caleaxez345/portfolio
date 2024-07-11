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
                <div className="avatar block md:hidden">
                    <div className="ring-blue-400 ring-offset-base-100 w-64 sm:w-80 rounded-full ring ring-offset-2 shadow-blue-400 shadow-xl">
                        <img src={smallPicture} />
                    </div>
                </div>
                <img src={Picture} className="hidden md:block max-w-sm shadow-lg shadow-blue-400 rounded-lg border border-blue-400" />
                <div>
                    <h1 className="text-4xl sm:text-5xl font-bold">
                        Welcome!
                    </h1>
                    <h2 className="py-4 text-4xl sm:text-5xl font-bold">
                        I'm Carlos Garcia Alavez!
                    </h2>
                    <div className="text-blue-400 text-2xl sm:text-3xl"> 
                        {typeWriter}
                    </div>
                    <a href={Resume} target="_blank" rel="noopener noreferrer"     
                        className="inline-block"> 
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4 border-2 border-blue-400 bg-white text-black hover:bg-gray-400 hover:border-blue-400 hover:scale-105 hover:transition-all">
                            <IoMdPaper className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"/> View Resume 
                        </button>
                    </a>
                    <Link to ="/projects" className="inline-block">
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4 border-2 border-blue-400 bg-white text-black ml-4 hover:bg-gray-400 hover:border-blue-400 hover:scale-105 hover:transition-all">
                            <BsPersonWorkspace className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"/>
                            View Projects
                        </button>  
                    </Link>                     
                </div>
            </div>
        </div>
        </div>
        // <div className="hero min-h-screen">
        //     <div className="hero-content flex-col lg:flex-row">
        //         <motion.img 
        //                    initial={{ opacity: 0, x: -100 }}
        //                    whileInView={{ opacity: 1, x: 0 }}
        //                    viewport={{ once: true, amount: 0.5 }}
        //                    transition={{ duration: 0.7 }}
        //          src={Picture} className="w-96 sm:max-w-sm rounded-lg shadow-lg shadow-blue-400 border border-blue-400" />
        //         <div>
        //             <motion.h1 
        //                 initial={{ opacity: 0, x: 100 }}
        //                 whileInView={{ opacity: 1, x: 0 }}
        //                 viewport={{ once: true, amount: 0.5 }}
        //                 transition={{ duration: 1.0 }}
        //                 className="text-5xl font-bold">Welcome!</motion.h1>
        //             <motion.h1 
        //                 initial={{ opacity: 0, x: 100 }}
        //                 whileInView={{ opacity: 1, x: 0 }}
        //                 viewport={{ once: true, amount: 0.5 }}
        //                 transition={{ duration: 1.0 }}
        //                 className="py-6 text-5xl font-bold">My name is Carlos Garcia Alavez!
        //                 </motion.h1>
        //             <div className="text-blue-400 text-3xl mb-4"> 
        //                 {typeWriter}
        //             </div>
        //             <motion.a 
        //                 initial={{ opacity: 0, x: 100 }}
        //                 whileInView={{ opacity: 1, x: 0 }}
        //                 viewport={{ once: true, amount: 0.5 }}
        //                 transition={{ duration: 1.0 }}
        //                 href={Resume} target="_blank" rel="noopener noreferrer"     
        //                 className="inline-block"> 
        //                 <button className="btn btn-sm md:btn-md lg:btn-lg mt-4 border-2 border-blue-400 bg-white text-black hover:bg-gray-200 hover:border-blue-400 hover:scale-105 hover:transition-all">
        //                     <IoMdPaper size={25}/> View Resume 
        //                 </button>
        //             </motion.a>
        //             <motion.a 
        //                 initial={{ opacity: 0, x: 100 }}
        //                 whileInView={{ opacity: 1, x: 0 }}
        //                 viewport={{ once: true, amount: 0.5 }}
        //                 transition={{ duration: 1.0, delay: 0.3 }}
        //                 href="/projects"
        //                 className="inline-block">
        //                 <button className="btn btn-sm md:btn-md lg:btn-lg mt-4 border-2 border-blue-400 bg-white text-black ml-4 hover:bg-gray-200 hover:border-blue-400 hover:scale-105 hover:transition-all"><BsPersonWorkspace size={25}/>View Projects</button>  
        //             </motion.a>                     
        //         </div>
        //     </div>
        // </div>
    );
}

export default Home;
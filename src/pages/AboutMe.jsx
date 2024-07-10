import React from "react";
import { programmingLanguages, databases, frameworks } from '../data/aboutMeData';
import Lottie from 'lottie-react';
import animationData from '../assets/Coding-Animation.json';
import { motion } from "framer-motion";


function AboutMe() {
  return (
    <div className="min-h-screen h-full w-full">
      {/*Header*/}
      <div className="container mx-auto my-4">
        <div className="text-center">
          <h1 className="text-2xl lg:text-3xl font-bold text-blue-400">About Me</h1>
        </div>
      </div>
      {/*Flex box for right and left side of the page*/}
      <div className="flex flex-col md:flex-row mx-4">
        {/*flex box for left side of the page*/}
        <div className="flex-1 flex items-center justify-center">
          <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3}} 
          className="w-full p-4">
            <h2 className="text-xl lg:text-2xl font-bold mb-2 text-blue-400 text-center">Get to know who I am!</h2>
            <p className="text-lg lg:text-xl">Hello everyone, I'm a 22 year old Software Engineer from Charlotte, NC.</p>
            <p className="text-lg lg:text-xl">I started coding once I began College and I was just so interested in being able to create new applications and face those tough challenges that come with it and learn new technologies.</p>
            <p className="text-lg lg:text-xl my-4">I finished my Bachelor's Degree at UNC Charlotte and graduated Bachelors of Science in Computer Science with a concentration in Software Engineering!</p>
            <p className="text-lg lg:text-xl my-4">Now, apart from coding Here are some of my hobbies that I like to take part in!</p>
            <div className="flex justify-center">
              <ol class="list-disc text-blue-400">
                <li className="text-lg lg:text-xl">Video Games</li>
                <li className="text-lg lg:text-xl">Lifting Weights</li>
                <li className="text-lg lg:text-xl">Traveling</li>
              </ol>
            </div>
          </motion.div>
        </div>
        {/*flex box for right side of the page*/}
        <div className="z-10 flex-1 mt-14 md:mt-0">
          <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.3 }}
          className="w-full flex flex-col justify-start items-center">
            <Lottie animationData={animationData} className="h-full w-full md:h-[350px]" />
          </motion.div>
        </div>
      </div>
      {/*Professional skillset section*/}
      <h2 className="text-2xl font-bold mb-4 mt-16 text-blue-400 text-center">Professional Skillset</h2>
      <h3 className="text-xl text-center underline">Languages</h3>
        {/*Language boxes*/}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.3 }}
        className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
        {programmingLanguages.item.map((language, index) => (
          <motion.div
          whileHover = {{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness:600, damping:8 }}
            key={index}
            className="w-40 h-28 md:w-48 md:h-32 border border-blue-400 my-4 p-4 md:p-6 flex flex-col items-center">
            <h2 className="text-center lg:text-lg"> {language.name} </h2>
            <language.icon size={48} />
          </motion.div>
        ))}
      </motion.div>
        <h3 className="text-lg text-center underline">Frameworks</h3>
        {/*Framework boxes*/}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.3 }} 
          className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
        {frameworks.item.map((framework, index) => (
          <motion.div 
          whileHover = {{ scale: 1.1 }}
          whileTap={{ scale: 1.1}}
          transition={{ type: "spring", stiffness:600, damping:8 }}
            key={index}
            className="w-40 h-28 md:w-48 md:h-32 border border-blue-400 my-4 p-4 md:p-6 flex flex-col items-center">
            <h2 className="text-center lg:text-lg">{framework.name}</h2>
            <framework.icon size={48} />
          </motion.div>
        ))}
      </motion.div>
        <h3 className="text-lg text-center underline">Databases</h3>
        {/*Database boxes*/}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.3 }}
        className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
        {databases.item.map((database, index) => (
          <motion.div 
            whileHover = {{ scale: 1.1 }}
            whileTap={{ scale: 1.1}}
            transition={{ type: "spring", stiffness:600, damping:8 }}
            key={index}
            className="w-40 h-28 md:w-48 md:h-32 border border-blue-400 my-4 p-4 md:p-6 flex flex-col items-center">
            <h2 className="text-center lg:text-lg">{database.name}</h2>
            <database.icon size={48} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default AboutMe;
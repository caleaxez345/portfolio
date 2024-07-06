import React from "react";
import { programmingLanguages, databases, frameworks } from '../data/aboutMeData';
import Lottie from 'lottie-react';
import animationData from '../assets/Coding-Animation.json';


function AboutMe() {
  return (
    <div className="h-full w-full">
      {/*Header*/}
      <div className="container mx-auto my-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-blue-400">About Me</h1>
        </div>
      </div>
      {/*Flex box for right and left side of the page*/}
      <div className="flex flex-col lg:flex-row mx-4">
        {/*flex box for left side of the page*/}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full p-4">
            <h2 className="text-xl font-bold mb-2 text-blue-400 text-center">Get to know who I am!</h2>
            <p className="text-lg">Hello everyone, I'm a 22 year old Software Engineer from Charlotte, NC.</p>
            <p className="text-lg">I started coding once I began College and I was just so interested in being able to create new applications and face those tough challenges that come with it and learn new technologies.</p>
            <p className="text-lg my-4">Now, apart from coding Here are some of my hobbies that I like to take part in!</p>
            <div className="flex justify-center">
              <ol class="list-disc text-center">
                <li className="text-lg">Video Games</li>
                <li className="text-lg">Lifting Weights</li>
                <li className="text-lg">Traveling</li>
              </ol>
            </div>
          </div>
        </div>
        {/*flex box for right side of the page*/}
        <div className="flex-1 z-10">
          <div className="w-full flex flex-col justify-center items-center border-2 border-blue-400">
            <Lottie animationData={animationData} className="h-[500px] w-full" />
          </div>
        </div>
      </div>
      {/*Professional skillset container*/}
      <div className="container mx-auto my-5">
        <h2 className="text-2xl font-bold mb-4 mt-4 text-blue-400 text-center">Professional Skillset</h2>
        <h3 className="text-lg text-center underline">Languages</h3>
        {/*Language boxes*/}
        <div className="flex flex-wrap justify-center">
          {programmingLanguages.item.map((language, index) => (
            <div
              key={index}
              className="w-24 h-24 lg:w-60 bg-base-100 border border-blue-400 mx-4 my-4 p-4 flex flex-col items-center hover:scale-105 hover:transition-all">
              <h2 className="text-center"> {language.name} </h2>
              <language.icon size={48} />
            </div>
          ))}
        </div>
        <h3 className="text-lg text-center underline">Databases</h3>
        {/*Database boxes*/}
        <div className="flex flex-wrap justify-center">
          {databases.item.map((database, index) => ( 
            <div key={index} className="w-24 h-24 lg:w-60 bg-base-100 border border-blue-400 mx-4 my-4 p-4 flex flex-col items-center hover:scale-105 hover:transition-all"> 
            <h2 className="text-center">{database.name}</h2>
            <database.icon size={48} />
            </div>
          ))}
        </div>
        <h3 className="text-lg text-center underline">Frameworks</h3>
        {/*Framework boxes*/}
        <div className="flex flex-wrap justify-center">
          {frameworks.item.map((framework, index) => ( 
            <div key={index} className="w-24 h-24 lg:w-60 bg-base-100 border border-blue-400 mx-4 my-4 p-2 flex flex-col items-center hover:scale-105 hover:transition-all"> 
            <h2 className="text-center">{framework.name}</h2>
            <framework.icon size={48} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
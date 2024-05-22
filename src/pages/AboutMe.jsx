import React from "react";
import { programmingLanguages, databases, frameworks } from '../data/aboutMeData';
import Photo from '/About-Me-Photo/About-Me-Pic.jpg';

function AboutMe() {
  return (
    <div className="h-full w-full">
      {/*Header*/}
      <div className="container mx-auto my-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-400">About Me</h1>
        </div>
      </div>
      {/*Container for right and left side of the page*/}
      {/* <div className="container mx-auto flex justify-between space-x-4"> */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between md:space-x-4">
        {/*Left side of the about me page*/}
        {/* <div className="left-side w-1/2 p-4 border border-blue-400"> */}
        <div className="left-side w-full md:w-1/2 p-4 mt-2">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">I'm Carlos Garcia Alavez</h2>
          <p className= "text-white text-xl">Hello everyone, I'm a 22 year old Software Engineer from Charlotte, NC.</p>
          <p className="text-white text-xl mt-2">Currently I'm employed at Bank of America as a Software Engineer.</p>
          <p className="text-white text-xl mt-2">I finished my Bachelor's Degree at UNC Charlotte and graduated Bachelors of Science in Computer Science with a concentration in Software Engineering!</p>
          <p className="text-white text-xl mt-2">I started coding once I began College and I was just so interested in being able to create new applications and face those tought challenges that come with it and learn new technologies.</p>
          <p className="text-white text-xl mt-2 mb-2">Now, apart from coding Here are some of my hobbies that I like to take part in!</p>
          <ol class="list-disc text-white ml-8">
            <li className= "text-xl">Video Games: Love me some good RPGS, my favorite game of all time is Persona 5 Royal!</li>
            <li className= "text-xl">Lifting: Been lifting for about 3-4 year now, and I absolutely love it.</li>
            <li className= "text-xl">Traveling: I've been to Mexico before, but now I want to visit new places like Europe, and Asia.</li>
          </ol>
        </div>
        {/*Right side of the about me page*/}
        {/* <div className="right-side w-1/2 p-4 border border-blue-400"> */}
        <div className="right-side w-full md:w-1/2 p-4 flex justify-center items-center mt-4 md:mt-0">
          <img src={Photo} className="w-full max-h-[600px]" />
        </div>
      </div>
      {/*Professional skillset container*/}
      <div className="container mx-auto my-5">
        <h2 className="text-2xl font-bold mb-4 mt-4 text-blue-400 text-center">Professional Skillset</h2>
        <h3 className="text-lg text-white text-center underline">Languages</h3>
        {/*Language boxes*/}
        <div className="flex flex-wrap justify-center">
          {programmingLanguages.item.map((language, index) => ( 
            <div key={index} className="w-60 bg-base-100 border border-blue-400 mx-4 my-4 p-4 flex flex-col items-center">
              <h2 className="text-white"> {language.name} </h2>
              <language.icon size={48} />
            </div>
          ))}
        </div>
        <h3 className="text-lg text-white text-center underline">Databases</h3>
        {/*Database boxes*/}
        <div className="flex flex-wrap justify-center">
          {databases.item.map((database, index) => ( 
            <div key={index} className="w-60 bg-base-100 border border-blue-400 mx-4 my-4 p-4 flex flex-col items-center"> 
            <h2 className="text-white">{database.name}</h2>
            <database.icon size={48} />
            </div>
          ))}
        </div>
        <h3 className="text-lg text-white text-center underline">Frameworks</h3>
        {/*Framework boxes*/}
        <div className="flex flex-wrap justify-center">
          {frameworks.item.map((framework, index) => ( 
            <div key={index} className="w-60 bg-base-100 border border-blue-400 mx-4 my-4 p-4 flex flex-col items-center"> 
            <h2 className="text-white">{framework.name}</h2>
            <framework.icon size={48} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
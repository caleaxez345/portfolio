import React from "react";
import { programmingLanguages, databases, frameworks } from '../data/aboutMeData';

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
      <div className="container mx-auto flex justify-between">
        {/*Left side of the about me page*/}
        <div className="left-side w-1/2 p-4 border border-blue-400">
          <h2 className="text-xl font-bold mb-4">Placeholder</h2>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minima quasi eius, alias laudantium fuga. Ad explicabo repellat hic, tempora eaque asperiores optio saepe non, in veritatis deserunt voluptatum velit.</p>
        </div>
        {/*Add space between left and right side*/}
        <div className="w-4"></div>
        {/*Right side of the about me page*/}
        <div className="right-side w-1/2 p-4 border border-blue-400">
          <h2 className="text-xl font-bold mb-4">Placeholder</h2>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minima quasi eius, alias laudantium fuga. Ad explicabo repellat hic, tempora eaque asperiores optio saepe non, in veritatis deserunt voluptatum velit.</p>
        </div>
      </div>
      {/*Professional skillset container*/}
      <div className="container mx-auto my-5 border border-blue-400">
        <h2 className="text-xl font-bold mb-4 mt-4 text-blue-400 text-center">Professional Skillset</h2>
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
            <div key={index} className="w-60 bg-base-100, border border-blue-400 mx-4 my-4 p-4 flex flex-col items-center"> 
            <h2 className="text-white">{database.name}</h2>
            <database.icon size={48} />
            </div>
          ))}
        </div>
        <h3 className="text-lg text-white text-center underline">Frameworks</h3>
        {/*Framwork boxes*/}
        <div className="flex flex-wrap justify-center">
          {frameworks.item.map((framework, index) => ( 
            <div key={index} className="w-60 bg-base-100, border border-blue-400 mx-4 my-4 p-4 flex flex-col items-center"> 
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
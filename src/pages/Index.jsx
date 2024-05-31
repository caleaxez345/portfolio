import React from "react";
import Picture from '/Professional-Pic/professional-photo.jpg';
import Typewriter from 'typewriter-effect';

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
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={Picture}className="max-w-sm rounded-lg shadow-lg shadow-blue-400" />
                <div>
                    <h1 className="text-5xl font-bold">Welcome!</h1>
                    <h1 className="py-6 text-5xl font-bold">My name is Carlos Garcia Alavez!</h1>
                    {/* <p className="text-blue-400 text-3xl mb-4">Placeholder for typewriter text</p> */}
                    <div className="text-blue-400 text-3xl mb-4"> 
                        {typeWriter}
                    </div>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4 border-2 border-blue-400 bg-white text-black hover:bg-gray-200">View Resume</button>
                    <a href="/projects">
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4 border-2 border-blue-400 bg-white text-black ml-4 hover:bg-gray-200">View Projects</button>  
                    </a>                     
                </div>
            </div>
        </div>
    );
}

export default Home;
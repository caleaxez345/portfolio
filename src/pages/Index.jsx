import React from "react";
import Picture from '/Professional-Pic/professional-photo.jpg';

function Home() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={Picture} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-white">Welcome!</h1>
                    <p className="py-6">My name is Carlos Garcia Alavez! I'm a Software Engineer who loves to work on creating new applications, and learning new technologies!</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
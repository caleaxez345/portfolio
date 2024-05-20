import React from "react";

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
        <div className="flex flex-wrap justify-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
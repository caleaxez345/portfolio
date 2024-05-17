import React from "react";

function AboutMe() {
  return (
  <div className="h-full w-full">
    {/*Header*/}
    <div className="container mx-auto my-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-fuchsia-600">So, Who am I?</h1>
      </div>
    </div>
    {/*Container for right and left side of the page*/}
    <div className="container mx-auto flex justify-between">
      {/*Left side of the about me page*/}
      <div className="left-side w-1/2 p-4 border border-fuchsia-600">
        <h2 className="text-xl font-bold mb-4">Placeholder</h2>
        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minima quasi eius, alias laudantium fuga. Ad explicabo repellat hic, tempora eaque asperiores optio saepe non, in veritatis deserunt voluptatum velit.</p>
      </div>
      {/*Add space between left and right side*/}
      <div className="w-4"></div>
      {/*Right side of the about me page*/}
      <div className="right-side w-1/2 p-4 border border-fuchsia-600">
        <h2 className="text-xl font-bold mb-4">Placeholder</h2>
        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minima quasi eius, alias laudantium fuga. Ad explicabo repellat hic, tempora eaque asperiores optio saepe non, in veritatis deserunt voluptatum velit.</p>
      </div>
    </div>
    {/*Professional skillset container*/}
    <div className="container mx-auto my-5 border border-fuchsia-600">
        <h2 className="text-xl font-bold mb-4 mt-4 text-fuchsia-600 text-center">Professional Skillset</h2>
      </div>
  </div>
  );
}

export default AboutMe;
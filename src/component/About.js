import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          My name is Anilesh Mathur & stay at varanasi with my family I
          completed my Graduation from jssaten in the year 2021 my hobbies are
          cooking & editing I am a hard working ,quick learner & positive minded
          always curious about new technology.
        </p>
        <br />
        <p className="text-xl">
          I made more than projects using the frontend technologies in which i
          make weather app,e-commerce app by the help of
          react,css,html,javascript
        </p>
      </div>
    </div>
  );
};

export default About;

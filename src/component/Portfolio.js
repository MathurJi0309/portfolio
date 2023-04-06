import React from "react";
import Ecommerce from "../assets/portfolio/E-commerce.jpg";
import weather from "../assets/portfolio/weather.jpg";
import netflix from "../assets/portfolio/netflix.jpg";
import responsive from "../assets/portfolio/responsive design.jpg";
import portfolio from "../assets/portfolio/portfolio.jpg";
import live from "../assets/portfolio/livesearch.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Ecommerce,
      link:'https://mathurji-commerce.netlify.app/',
      github:'https://github.com/MathurJi0309/Ecommerce'
    },
    {
      id: 2,
      src: weather,
      link:'https://mjweatherapphi.netlify.app/',
      github:'https://github.com/MathurJi0309/weather_app'
    },
    {
      id: 3,
      src: netflix,
      link:'https://netfilxmj.netlify.app/',
      github:'https://github.com/MathurJi0309/Netflix'
    },
    {
      id: 4,
      src: responsive,
      link:'https://potfoliomj.netlify.app/',
      github:'https://github.com/MathurJi0309/Ecommerce'
    },
    {
      id: 5,
      src: portfolio,
      link:'https://mathurji-commerce.netlify.app/',
      github:'https://github.com/MathurJi0309/portfolio'
    },
    {
      id: 6,
      src: live,
      link:'https://superheromj.netlify.app/',
      github:'https://github.com/MathurJi0309/SuperHeroReactJS'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,link,github}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={link} target="_black">Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={github} target="_black">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
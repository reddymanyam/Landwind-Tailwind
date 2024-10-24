import React from 'react';
import hero from "../../assets/hero.png";
const Home = () => {
  return (
    <section className="bg-white py-3">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Building digital <br /> products & brands.
          </h1>
          <p className="text-lg text-gray-500 mb-8">
            This free and open-source landing page template was built using the utility classes from Tailwind CSS and based on the components from the Flowbite Library and the Blocks System.
          </p>
          <div className="lg:flex lg:space-x-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-5.707l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              View on GitHub
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-900 hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-5.707l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Get Figma file
            </a>
          </div>
        </div>

        <div className="hidden lg:flex h-96">
          <img
            src={hero}
            alt="Digital target"
            className="w-full"
          />
        </div>
      </div>
     
    </section>
  );
};

export default Home;

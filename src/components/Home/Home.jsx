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
          <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <a href="https://github.com/themesberg/landwind" class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                         View on GitHub
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

import React, { useState } from 'react';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl">
          Frequently asked questions
        </h2>
        <div className="max-w-screen-md mx-auto">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            <h3 id="accordion-flush-heading-1">
              <button
                onClick={() => handleOpen(1)}
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left border-b border-gray-200 text-gray-500 dark:text-gray-400"
                aria-expanded={openIndex === 1}
                aria-controls="accordion-flush-body-1"
              >
                <span>Can I use Landwind in open-source projects?</span>
                <svg
                  data-accordion-icon=""
                  className={`w-6 h-6 shrink-0 transform ${openIndex === 1 ? 'rotate-180' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            {openIndex === 1 && (
              <div id="accordion-flush-body-1" aria-labelledby="accordion-flush-heading-1">
                <div className="py-5 border-b border-gray-200">
                  <p className="mb-2 text-gray-500">
                    Landwind is an open-source library of interactive components built on top of
                    Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
                  </p>
                  <p className="text-gray-500">
                    Check out this guide to learn how to{' '}
                    <a href="#" className="text-purple-600 hover:underline">
                      get started
                    </a>{' '}
                    and start developing websites even faster with components on top of Tailwind
                    CSS.
                  </p>
                </div>
              </div>
            )}
            
            <h3 id="accordion-flush-heading-2">
              <button
                onClick={() => handleOpen(2)}
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left border-b border-gray-200 text-gray-500 dark:text-gray-400"
                aria-expanded={openIndex === 2}
                aria-controls="accordion-flush-body-2"
              >
                <span>Is there a Figma file available?</span>
                <svg
                  data-accordion-icon=""
                  className={`w-6 h-6 shrink-0 transform ${openIndex === 2 ? 'rotate-180' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a 1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h3>
            {openIndex === 2 && (
              <div id="accordion-flush-body-2" aria-labelledby="accordion-flush-heading-2">
                <div className="py-5 border-b border-gray-200">
                  <p className="mb-2 text-gray-500">
                    Landwind is first conceptualized and designed using the Figma software so
                    everything you see in the library has a design equivalent in our Figma file.
                  </p>
                  <p className="text-gray-500">
                    Check out the{' '}
                    <a href="#" className="text-purple-600 hover:underline">
                      Figma design system
                    </a>{' '}
                    based on the utility classes from Tailwind CSS and components from Landwind.
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

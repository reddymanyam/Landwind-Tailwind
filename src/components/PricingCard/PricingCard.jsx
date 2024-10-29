import React from 'react'

const PricingCard = () => {
    return (
        <div className='grid grid-rows-1 grid-cols-1 items-center justify-center px-6  md:grid-rows-1 md:mx-20 md:space-x-8 lg:grid-cols-3 '>

            <div className='border-2 border-gray-100 flex flex-col p-10 space-y-4 text-center my-8'>
                
                <h1 className='text-2xl font-semibold'>Starter</h1>
                <p className='text-lg font-light'>Best option for personal use & for your next project.</p>
                <div className='flex justify-center'>
                <h1 className='text-4xl font-bold mr-1'>$29</h1>
                <span className='text-lg font-light mt-3'>/month</span>
                </div>
               
                <ul className='text-left space-y-4'>
                <li className="flex "><svg class="flex-shrink-0 w-5 h-5  mr-3 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>Individual configuration</li>
                <li className="flex space-x-2"><svg class="flex-shrink-0 w-5 h-5 mr-3 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>No setup, or hidden fees</li>
                <li className="flex space-x-2"><svg class="flex-shrink-0 w-5 h-5 mr-3 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>Team size: 1 developer</li>
                <li className="flex space-x-2"><svg class="flex-shrink-0 w-5 h-5 mr-3 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>Premium support: 6 months</li>
                <li className="flex space-x-2"><svg class="flex-shrink-0 w-5 h-5 mr-3 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>Free updates: 6 months</li>
                </ul>
                <button className='bg-purple-600 h-10 rounded-md text-white'>Get started</button>
                
            </div>

            <div className='border-2 border-gray-100 p-10 flex flex-col text-center space-y-4 mb-8 md:mb-0'>
                <h1 className='text-2xl font-semibold'>Company</h1>
                <p className='text-lg font-light'>Relevant for multiple users, extended & premium support.</p>
                <div className='flex justify-center'>
                <h1 className='text-4xl font-bold mr-1'>$99</h1>
                <span className='text-lg font-light mt-3' >/month</span>
                </div>
               
                <ul className='text-left space-y-4'>
                <li className="flex space-x-2"><svg class="flex-shrink-0 w-5 h-5 mr-3 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>Individual configuration</li>
                <li className="flex space-x-2"><svg class="flex-shrink-0 w-5 h-5 mr-3 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>No setup, or hidden fees</li>
                <li className="flex space-x-2"><svg class="flex-shrink-0 w-5 h-5 mr-3 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>Team size: 10 developer</li>
                <li className="flex space-x-2"><svg class="flex-shrink-0 w-5 h-5 mr-3 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>Premium support: 24 months</li>
                <li className="flex space-x-2"><svg class="flex-shrink-0 w-5 h-5 mr-3 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>Free updates: 24 months</li>
                </ul>
                <button className='bg-purple-600 h-10 rounded-md text-white'>Get started</button>
                
            </div>
            
            <div className='border-2 border-gray-100 p-10 flex flex-col text-center space-y-4 sm:mb-8 lg:mb-0'>
               
                <h1 className='text-2xl font-semibold'>Enterprise</h1>
                <p className='text-lg font-light'>Best for large scale uses and extended redistribution rights.</p>
                <div className='flex flex-row justify-center'>
                <h1 className='text-4xl font-bold mr-1'>$499</h1>
                <span className='text-lg font-light mt-3' >/month</span>
                </div>
               
                <ul className='text-left space-y-4 '>
                <li className="flex"><svg class="flex-shrink-0 w-5 h-5  mr-3 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>Individual configuration</li>
                <li className="flex space-x-2"><svg class="flex-shrink-0 w-5 h-5 mr-3 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>No setup, or hidden fees</li>
                <li className="flex space-x-2"><svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>Team size: 100+ developer</li>
                <li className="flex space-x-2"><svg class="flex-shrink-0 w-5 h-5 mr-3 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>Premium support: 36 months</li>
                <li className="flex space-x-2"><svg class="flex-shrink-0 w-5 h-5 mr-3 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>Free updates: 36 months</li>
                </ul>
                <button className='bg-purple-600 h-10 rounded-md text-white'>Get started</button>
                </div>
         

        </div>
    )
}

export default PricingCard

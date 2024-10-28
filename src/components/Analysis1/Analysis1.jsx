import React from 'react'
import feature1 from '../../assets/feature-1.png';
const Analysis1 = () => {
    return (
        <div className='bg-white px-2 py-2 lg:px-14 lg:py-14'>
            <div className='flex justify-between'>
                <div className='flex-1'>
                    <h1 className='text-3xl text-gray-950 py-6 font-bold'> Work with tools you already use</h1>
                    <p className='text-md md:text-xl text-gray-500'>Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work , eliminate toil, and deploy changes with ease.</p>
                    <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7">
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 ">Continuous integration and deployment</span>
                        </li>
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 ">Development workflow</span>
                        </li>
                        <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 ">Knowledge management</span>
                        </li>
                    </ul>
                    <span className='md:text-md lg:text-xl font-light'>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</span>
                </div>
                <div className='hidden flex-1 lg:block'>
                    <img src={feature1} />
                </div>
            </div>
        </div>
    )
}

export default Analysis1

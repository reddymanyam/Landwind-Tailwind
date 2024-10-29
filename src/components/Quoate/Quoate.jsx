import React from 'react'

const Quoate = () => {
    return (
        <>
            <div className='text-center lg:py-20 lg:px-80 '>
                <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"></path>
                </svg>
                <h1 className='text-2xl font-semibold'>"Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</h1>
                <div className='flex justify-center items-center text-center mt-4'>
                <img className="w-6 h-6 rounded-full mr-4" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                    <p className='font-semibold mr-4 '>Micheal Gough</p>
                    <span className='w-px h-6  bg-gray-800'></span>
                    <span className='ml-3 font-light'>CEO at Google</span>
                </div>
            </div>
        </>
    )
}

export default Quoate

import React from 'react'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-4 sm:px-8 py-3.5">
    <div className="container flex flex-wrap items-center justify-between mx-auto">
      <a href="#" className="flex items-center">
        <img
          src={logo}
          className="h-8 mr-3"
          alt="Logo"
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap">
          Landwind
        </span>
      </a>

      <div className="hidden w-full md:flex md:w-auto md:space-x-8 text-md font-medium">
        <a href="#" className="text-purple-700 hover:text-purple-600">Home</a>
        <a href="#" className="text-gray-700 hover:text-purple-600">Company</a>
        <a href="#" className="text-gray-700 hover:text-purple-600">Marketplace</a>
        <a href="#" className="text-gray-700 hover:text-purple-600">Features</a>
        <a href="#" className="text-gray-700 hover:text-purple-600">Team</a>
        <a href="#" className="text-gray-700 hover:text-purple-600">Contact</a>
      </div>

      <div className="flex items-center space-x-4">
        <button className="flex items-center bg-gray-100 border border-gray-300 hover:bg-gray-200 text-gray-700 font-medium rounded-lg text-sm px-3 py-2.5">
          
          Star 867
        </button>

        <a
          href="#"
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Download
        </a>
      </div>
    </div>
  </nav>
  )
}

export default Navbar

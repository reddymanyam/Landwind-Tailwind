import React from 'react'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white border-gray-200 px-4 sm:px-8 py-3.5">
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
          <a href="https://github.com/themesberg/landwind" rel="noopener" target="_blank" className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded hover:bg-gray-100">
            <svg viewBox="0 0 16 16" width="16" height="16" className="octicon octicon-star" aria-hidden="true">
              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
            </svg>
            <span>Star</span>
            <span className="ml-2 border-l-2 pl-2 text-gray-700">868</span>
          </a>

          <a href="#" className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">Download</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

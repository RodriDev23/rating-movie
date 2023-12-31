import React from 'react';

export default function NavBar() {
  return (
    <nav className="bg-custom-skyblue p-4 w-full ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-semibold">Movie Rating App</div>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#home"
                className="text-white hover:text-custom-text transition duration-300 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#mostpopular"
                className="text-white hover:text-custom-text transition duration-300 ease-in-out"
              >
                Most Popular
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-custom-text transition duration-300 ease-in-out"
              >
                My Ratings
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className="text-white hover:text-custom-text transition duration-300 ease-in-out"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

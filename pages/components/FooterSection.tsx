import React from 'react'

export function Footer() {
    return (
        <footer className="bg-custom-blue rounded-lg m-4 w-auto">
            <div className="w-full max-w-screen-x1 mx-auto p-4 md:py-8 ">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://github.com/RodriDev23/rating-movie" className="flex items-center mb-4 sm:mb-0" target="_blank">
                <img src="https://placehold.co/64x64" alt="Movie Icon" />
                <span className="self-center text-2xl font-bold whitespace-nowrap text-white ml-4">Our Repository</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                <li>
                    <a href="https://github.com/RodriDev23" className="ml-4 hover:underline md:mr-6">Rodri</a>
                </li>

                <li>
                <a href="https://github.com/EzequielAgnelli" className="mr-4 hover:underline md:mr-6">Eze</a>
                </li>

                <li>
                <a href="" className="mr-4 hover:underline md:mr-6">Placeholder</a>
                </li>

                <li>
                <a href="" className="mr-4 hover:underline md:mr-6">Placeholder</a>
                </li>


            </ul>
        </div>
        <hr className="my-7 border-gray-800 sm:mx-auto lg:my-8" />
        <p className="block text-sm text-gray-500 sm:text-center">Made with love By Rodrigo and Ezequiel. 🌎</p>
            </div>
        </footer>
    );
}
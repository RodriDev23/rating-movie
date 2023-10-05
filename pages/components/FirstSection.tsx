import React from 'react';

export function FirstSection() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center bg-custom-blue p-20 rounded-lg mt-10">
            <div className="md:w-1/2 p-8">
                <h1 className="text-3xl md:text-3xl text-white font-bold mb-4">
                    Check the most new movies and get ready to have an unique experience
                </h1>
                {/* <p className="text-lg text-gray-400 mb-6">
                    
                </p> */}
                <button className="bg-blue-500 hover:bg-blue-800 hover:text-gray-400 transition duration-500 ease-in-out text-white font-bold py-2 px-4 rounded" 
                id="#mostnew">
                    Start Exploring
                </button>
            </div>
            <div className="md:w-1/2">
                <img className="w-full md:max-h-96 object-cover" src="https://placehold.co/400x800" alt="Movie Poster"/>
            </div>
        </section>
    );
}
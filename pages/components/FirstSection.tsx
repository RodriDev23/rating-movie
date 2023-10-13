import React from 'react';
import { useFetch } from './useFetch';

export function FirstSection() {
    const { data, loading } = useFetch({query : 'wonka'});

    if (loading) {
        return <div className="text-lime-500 font-bold">Loading...</div>; // You can add a loading indicator if needed
    }
    
    if (!data) {
        return <div className="text-red-600 font-bold">Error fetching data.</div>; // Handle error state if the request fails
    }
    
    const {
        Title,
        Poster,
    } = data;

    return (
        <section className="flex flex-col md:flex-row items-center justify-center bg-custom-blue p-5 rounded-lg mt-10 w-2/3">
            <div className="md:w-1/2 p-4">
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
            <div className="">
                <img src={Poster} className="object-cover" alt={Title}/>
            </div>
        </section>
    );
}
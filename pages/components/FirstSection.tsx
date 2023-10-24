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
        <section className="flex flex-col md:flex-col md:justify-center md:items-center md:gap-10 items-center justify-center bg-custom-darkpurple p-5 rounded-lg mt-10 w-2/3" id="home">
            <div className="md:w-1/2 p-4 md:flex md:flex-col md:justify-center md:items-center md:gap-10">
                <h1 className="text-3xl md:text-3xl text-white font-bold mb-4">
                    Check the most new movies and get ready to have an unique experience
                </h1>
    </div>
            <div className="">
                <img src={Poster} className="object-cover rounded-md" alt={Title}/>
            </div>
        <button className="md:flex  md:justify-center md:items-center bg-custom-skyblue hover:bg-custom-purple hover:text-gray-100 transition duration-500 ease-in-out text-white font-bold py-5 px-10 rounded" 
                id="">
                    Start Exploring
        </button>

        </section>
    );
}
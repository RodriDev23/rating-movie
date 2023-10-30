import React from 'react'
import { useFetch } from './useFetch';

export function FourthSection() {
    const { data, loading } = useFetch({query : 'Scream-VI'});

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
        <section className="flex items-center justify-center text-center p-10 w-full h-50"> 
            <div className="flex items-center justify-center bg-custom-whitepurple rounded-lg">
                <div className="flex justify-center items-center flex-col text-custom-text">
                <h2 className="font-bold text-xl uppercase p-4">Become a trully Nerd</h2>
                <p className="w-2/4 font-bold text-xl">Get no third-party ADS, filter by your favorite streaming services, get watchlist notifications, notifications of upcoming popular movies, all-time stats and more!</p>
                <a href="" className="font-bold bg-custom-darkpurple text-white rounded-lg p-5 w-1/1 uppercase text-center mt-6 mb-6 hover:bg-custom-purple transition duration-500 ease-in-out">Upgrade to Plus+</a>
                </div>

                <div className="w-1/3 flex justify-center items-center">
                    <img src={Poster} alt={Title} />
                </div>

            </div>
        </section>
    )
}
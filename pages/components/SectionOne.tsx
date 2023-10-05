import React, { useState, useEffect } from 'react';
const apiKey = '../api/ApiKey.tsx'
export default apiKey;

export function SingleMovieSection() {
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://www.omdbapi.com/?t=Marvel&apikey=${apiKey}`);
                const data = await response.json();
                setMovieData(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();

    }, []);

    return (

        <section className="p-10 w-[80%] flex flex-col justify-center items-center md:max-w-2xl">
        <h4 className="pr-5 pb-5 font-bold text-left uppercase text-xl">
                Most New
            </h4>
        <div className="rounded-lg p-5 bg-custom-blue w-[850px] flex flex-col justify-center items-center">
            <img src="{movieData.Poster}" alt="{movieData.Title}" className='mt-10 rounded-xl' />
        <h5
        className="mb-2 text-xl font-bold leading-tight text-center py-5">
        Title of the Movie
        </h5>
        <span className="mb-4 text-sm text-white text-right  font-semibold">
        release date
        </span>
        <p className="mb-4 text-base text-white text-center p-5 font-semibold">
        here goes the description of the movie
        </p>
    </div>
        </section>
    )
}
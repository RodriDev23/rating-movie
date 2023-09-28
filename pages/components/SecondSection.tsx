import React from 'react';

export function MostFeaturedMovies() {
    return(
        <section className="p-5 flex flex-col justify-center rounded-md">
            <h4 className="pr-5 pb-5 font-bold text-left uppercase text-xl">
                Most Popular
                <div className="border-solid border border-sky-600 mt-5"></div>
            </h4>

        <div className="p-5 flex flex-row justify-center">
            <div className="p-4 gap-2 flex flex-col justify-center">
            <img src="https://placehold.co/300x410" className="w-full" alt="name of the movie" />
            <p className="mb-4 text-sm text-white text-left font-semibold">
                release date
            </p>
            </div>

            <div className="p-4 gap-2 flex flex-col justify-center">
            <img src="https://placehold.co/300x410" className="w-full" alt="name of the movie" />
            <p className="mb-4 text-sm text-white text-left font-semibold">
                release date
            </p>
            </div>

            <div className="p-4 gap-2 flex flex-col justify-center">
            <img src="https://placehold.co/300x410" className="w-full" alt="name of the movie" />
            <p className="mb-4 text-sm text-white text-left font-semibold">
                release date
            </p>
            </div>

            <div className="p-4 gap-2 flex flex-col justify-center">
            <img src="https://placehold.co/300x410" className="w-full" alt="name of the movie" />
            <p className="mb-4 text-sm text-white text-left font-semibold">
                release date
            </p>
            </div>
        </div>

        </section>
    )
}
import React from 'react';

export function SingleMovieSection() {
    return (

        <section className="p-10 max-w-md mx-auto overflow-hidden md:max-w-2xl">
        <h4 className="pr-5 pb-5 font-bold text-left uppercase text-xl">
                Most New
            </h4>

<div className="block rounded-lg p-5 bg-slate-900">

            <img src="https://placehold.co/330x450" alt="name of the movie" />

        <h5
        className="mb-2 text-xl font-bold leading-tight text-center font-bold py-5">
        Title of the Movie
        </h5>

        <span className="mb-4 text-sm text-white text-right text-sm font-semibold">
        release date
        </span>

        <p className="mb-4 text-base text-white text-center p-5 font-semibold">
        here goes the description of the movie
        </p>

    </div>
        </section>
    )
}
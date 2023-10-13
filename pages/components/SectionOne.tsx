import React from 'react';
import { useFetch } from './useFetch'; // Import the useFetch hook

export function SingleMovieSection() {
  const { data, loading } = useFetch({query : 'taxi-driver'}); // Pass the movie title or query here

  if (loading) {
    return <div className="text-lime-500 font-bold">Loading...</div>; // You can add a loading indicator if needed
  }

  if (!data) {
    return <div className="text-red-600 font-bold">Error fetching data.</div>; // Handle error state if the request fails
  }

  const {
    Title,
    Released,
    Plot,
    Poster,
  } = data;

  return (
    <section className="p-10 w-[80%] flex flex-col justify-center items-center md:max-w-2xl">
      <h4 className="pr-5 pb-5 font-bold text-left uppercase text-xl">
        Most New
      </h4>
      <div className="rounded-lg p-5 bg-slate-900 w-[850px] flex flex-col justify-center items-center">
        <img src={Poster} alt={Title} className='mt-10 rounded-xl' />
        <h5 className="mb-2 text-xl font-bold leading-tight text-center py-5">
          {Title}
        </h5>
        <span className="mb-4 text-sm text-white text-right font-semibold">
          {Released}
        </span>
        <p className="mb-4 text-base text-white text-center p-5 font-semibold">
          {Plot}
        </p>
      </div>
    </section>
  );
}

import React from 'react';
import { useFetch } from './useFetch';

interface titlePrincipal {
  tittle : String
}

export const Section : React.FC<titlePrincipal> = ({tittle}) => {
  // Use the useFetch hook to fetch movie data for a specific query
  const { data, loading } = useFetch({query: 'spider-man'}); // Pass the query string here

  if (loading) {
    return <div className="text-lime-500 font-bold">Loading...</div>; // Add a loading indicator if needed
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
    <section className=" bg-slate-900 p-2 flex flex-col justify-center items-center md:max-w-2xl gap-2 rounded-lg">
      <h4 className="pr-2 pb-4 font-bold text-left uppercase text-xl">
        {tittle}
      </h4>
      <div className="rounded-lg p-5 w-[450px] flex flex-col justify-center items-center gap-5">
        <img src={Poster} alt={Title} className='mt-0 rounded-xl gap-2' />
        <h5 className="mb-2 text-xl font-bold leading-tight text-center py-2">
          {Title}
        </h5>
        <span className="text-sm text-white text-right font-semibold">
          {Released}
        </span>
        <p className="text-base text-white text-center p-2 font-semibold">
          {Plot}
        </p>
      </div>
    </section>
  );
}

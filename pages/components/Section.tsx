import React from 'react';
import { useFetch } from './useFetch';

interface titlePrincipal {
  tittle : String
}

export const Section : React.FC<titlePrincipal> = ({tittle}) => {
  // Use the useFetch hook to fetch movie data for a specific query
  const { data, loading } = useFetch({query: 'spider-man'}); // Pass the query string here

  if (loading) {
    return <div>Loading...</div>; // Add a loading indicator if needed
  }

  if (!data) {
    return <div>Error fetching data.</div>; // Handle error state if the request fails
  }

  const {
    Title,
    Released,
    Plot,
    Poster,
  } = data;

  return (
    <section className="p-10 w-[80%] flex flex-col justify-center items-center md:max-w-2xl gap-10">
      <h4 className="pr-5 pb-5 font-bold text-left uppercase text-xl">
        {tittle}
      </h4>
      <div className="rounded-lg p-5 bg-slate-900 w-[850px] flex flex-col justify-center items-center gap-10">
        <img src={Poster} alt={Title} className='mt-10 rounded-xl w-20 gap-2' />
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

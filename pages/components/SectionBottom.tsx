import React from 'react';
import Section from './Section';

export function SectionsBottom() {
  return (
    <section className="p-5 flex flex-col justify-center rounded-md">
      <h4 className="pr-5 pb-5 font-bold text-left uppercase text-xl">
        Most Popular
        <div className="flex flex-col border-solid border border-sky-600 mt-5"></div>
      </h4>

      <Section tittle='release date' />

    <Section tittle="tittle 2" />

    <Section tittle="" />
      <div className="p-4 gap-2 flex flex-col justify-center">
        <img src="https://placehold.co/300x410" className="w-full" alt="name of the movie" />
        <p className="mb-4 text-sm text-white text-left font-semibold">
          release date
        </p>
      </div>
    </section>
  );
}

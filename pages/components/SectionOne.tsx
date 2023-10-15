import React from 'react';
import { SectionMostNew } from './SectionMostNew'

interface TitleSecondSection {
  ttitle : String
}

export const SectionsOne : React.FC<TitleSecondSection> = ({ttitle}) => {

  return (
    <section className="p-5 flex flex-col justify-center rounded-md w-[80%]">
      <h4 className="pr-5 pb-5 font-bold text-left uppercase text-xl">
        {ttitle}
        <div className="flex flex-col border-solid border border-sky-600 mt-5 w-full gap-5"></div>
      </h4>
<<<<<<< HEAD
      <div className='flex justify-center items-center flex-wrap gap-6 '>
          <SectionMostNew ttitle="" />
          <SectionMostNew ttitle="" />
          <SectionMostNew ttitle="" />
          <SectionMostNew ttitle="" />
          <SectionMostNew ttitle="" />
          <SectionMostNew ttitle="" />
=======
      <div className="rounded-lg p-5 bg-slate-900 w-[850px] flex flex-col justify-center items-center">
        <img src={Poster} alt={Title} className='mt-10 rounded-xl' />
        <h5 className="mb-2 text-xl font-bold leading-tight text-center py-4">
          {Title}
        </h5>
        <span className="mb-4 text-sm text-white text-right font-semibold">
          {Released}
        </span>
        <p className="mb-4 text-base text-white text-center p-5 font-semibold">
          {Plot}
        </p>
>>>>>>> 54810ff (changes test)
      </div>
    </section>
  );
}

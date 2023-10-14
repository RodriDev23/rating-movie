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
      <div className='flex justify-center items-center flex-wrap gap-6 '>
          <SectionMostNew ttitle="" />
          <SectionMostNew ttitle="" />
          <SectionMostNew ttitle="" />
          <SectionMostNew ttitle="" />
          <SectionMostNew ttitle="" />
          <SectionMostNew ttitle="" />
      </div>
    </section>
  );
}

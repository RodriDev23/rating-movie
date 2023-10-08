import React from 'react';
import { Section } from './Section';
interface titleSection {
  titlePrincipal : String
 }
 export const SectionsBottom : React.FC<titleSection> = ({titlePrincipal}) => {

  return (
    <section className="p-5 flex flex-col justify-center rounded-md">
      <h4 className="pr-5 pb-5 font-bold text-left uppercase text-xl">
        {titlePrincipal}
        <div className="flex flex-col border-solid border border-sky-600 mt-5"></div>
      </h4>
      <div className='flex gap-10 justify-center items-center flex-col'>
      <Section tittle='release date' />
      <Section tittle="tittle-2" />
     </div>
     
    </section>
  );
}

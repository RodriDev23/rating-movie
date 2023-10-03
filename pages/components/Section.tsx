import React from 'react';

interface propsSection {
  tittle : String
}


const Section : React.FC<propsSection> = ({tittle}) => (
  <div className="p-4 gap-2 flex flex-col justify-center">
    <img src="https://placehold.co/300x410" className="w-full" alt="name of the movie" />
    <p className="mb-4 text-sm text-white text-left font-semibold">
     {tittle}
    </p>
  </div>
);

export default Section;

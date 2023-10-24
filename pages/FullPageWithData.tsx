import React from 'react';
import { useFetch } from './components/useFetch';
import NavBar from './components/NavBar';
import { Footer } from './components/FooterSection';

function FullPageWithData() {
  const { data, loading } = useFetch({ query: 'taxi-driver' });

  if (loading) {
    return <div className="text-lime-500 font-bold">Loading...</div>;
  }

  if (!data) {
    return <div className="text-red-600 font-bold">Error fetching data.</div>;
  }

  const { Title, Released, Plot, Poster, Directors, Actors } = data;

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-start gap-10 bg-custom-whiteish">
      <NavBar />
      <h2 className="text-4xl text-center text-custom-text font-bold">{data.Title}</h2>
      <div className="w-[400px] h-[600px] flex flex-col">
        <img src={data.Poster} alt="img-title" className="rounded-md" />
      </div>
      <div className="flex flex-col justify-start items-center gap-10">
        <h2 className="text-left text-3xl font-bold text-custom-text">Description</h2>
        <p className="text-left text-2xl text-custom-text">{data.Plot}</p>
      </div>
      <div className="flex flex-col justify-start items-center gap-10">
        <h2 className="text-left text-3xl font-bold text-custom-text">Actors & Directors</h2>
        <p className="text-left text-2xl text-custom-text">{data.Actors}</p>
        <p className="text-left text-2xl text-custom-text">{data.Directors}</p>
      </div>

      <div className="flex flex-col gap-10 justify-center items-center text-custom-text">
        <div className="text-2xl  flex flex-col justify-center items-center">
          <h2 className="font-semibold text-2xl align-center">Rating & Comment</h2>
          <form>
            <div className="space-y-4 flex flex-col justify-center items-center gap-5">
              <div className='flex flex-col gap-3 justify-center items-center'>
                <label className="text-xl font-semibold text-custom-text p-5">Rating:</label>
                <input
                  type="number"
                  className="w-12 p-2 border rounded bg-black text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
              <div className='flex flex-col gap-3 justify-center items-center'>
                <label className="text-xl font-semibold">Comment:</label>
                <textarea
                  className="w-72 p-2 bg-black text-white border border-white rounded-md resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-custom-skyblue p-2 rounded hover:bg-custom-purple hover:text-gray-100 transition duration-500 ease-in-out text-white"
              >
                Submit Comment
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FullPageWithData;

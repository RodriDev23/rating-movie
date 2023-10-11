import react from 'react'

export function FourthSection() {
    return (
        <section className="flex items-center justify-center text-center p-10 w-full  h-50"> 
        {/* EN W-FULL, UN w-5/6 QUEDA BIEN TAMBIEN. DEJALO COMO MAS TE GUSTE. */}
            <div className="flex items-center justify-center bg-custom-blue rounded-lg">
                <div className="flex justify-center items-center flex-col">
                <h2 className="font-bold text-xl uppercase p-4">Become a trully Nerd</h2>
                <p className="w-2/4 font-semibold text-xl">Get no third-party ADS, filter by your favorite streaming services, get watchlist notifications, notifications of upcoming popular movies, all-time stats and more!</p>
                <a href="" className="font-bold bg-black rounded-lg p-5 w-1/1 uppercase text-center mt-6 mb-6 hover:bg-custom-purple transition duration-500 ease-in-out">Upgrade to Plus+</a>
                </div>

                <div className="w-1/1 flex justify-center items-center gap-3">
                    <img src="https://placehold.co/400x400" alt=""/>
                </div>

            </div>
        </section>
    )
}
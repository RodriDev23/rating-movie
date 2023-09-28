import NavBar from "./components/NavBar";
import {SingleMovieSection} from "./components/SectionOne"
import {MostFeaturedMovies} from "./components/SecondSection"

export default function Home() {
  return (
  <div className="flex flex-col justify-center items-center min-h-screen min-w-screen">
  <NavBar />
  <SingleMovieSection />
  <MostFeaturedMovies />
  </div>
    )
}

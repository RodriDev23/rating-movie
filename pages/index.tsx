import NavBar from "./components/NavBar";
import { SectionsBottom } from "./components/SectionBottom";
import { SingleMovieSection } from "./components/SectionOne";

export default function Home() {
  return (
  <div className="flex flex-col justify-start items-center min-h-screen min-w-screen">
  <NavBar />
  <SingleMovieSection />
  <SectionsBottom />
  </div>
    )
}

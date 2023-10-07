import NavBar from "./components/NavBar";
import { FirstSection } from "./components/FirstSection"
import { SectionsBottom } from "./components/SectionBottom";
import { SingleMovieSection } from "./components/SectionOne";
import { Footer } from "./components/FooterSection";

export default function Home() {
  return (
  <div className="flex flex-col justify-start items-center min-h-screen min-w-screen">
  <NavBar />
  <FirstSection />
  <SingleMovieSection />
  <SectionsBottom />
  <Footer />
  </div>
    )
}

import NavBar from "./components/NavBar";
import { FirstSection } from "./components/FirstSection"
import { SectionsBottom } from "./components/SectionBottom";
import { SectionsOne } from "./components/SectionOne";
import { Footer } from "./components/FooterSection";
import { FourthSection } from "./components/FourthSection"

export default function Home() {
  return (
  <div className="flex flex-col justify-start items-center min-h-screen min-w-screen bg-custom-whiteish">
  <NavBar />
  <FirstSection />
  <SectionsOne ttitle="Most New" />
  <FourthSection />
  <SectionsBottom titlePrincipal='Most Popular' />
  <Footer />
  </div>
    )
}

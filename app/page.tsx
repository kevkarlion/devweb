import { HeroSection } from "@/components/hero-section"
import { PainPointsSection } from "@/components/pain-points-section"
import { AboutSection } from "@/components/about-section"
// HIDDEN temporarily — "Soluciones para operación industrial" section
// import { ServicesSection } from "@/components/services-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { ProcessTimeline } from "@/components/portfolio-section"
import { ContactSection } from "@/components/contact-section"
import { PortfolioSection } from "@/components/PortfolioSection"
import { HomepageHubLinks } from "@/components/homepage-hub-links"

export default function Home() {
  return (
    <main className=" bg-[#121212]	w-full p-0">
      <HeroSection />
      <PainPointsSection />
      {/* HIDDEN temporarily — "Soluciones para operación industrial" section */}
      {/* <ServicesSection /> */}
      <ShowcaseSection />
      <HomepageHubLinks />
      <PortfolioSection />
      <AboutSection />
      <ProcessTimeline />
      <ContactSection />
    </main>
  )
}

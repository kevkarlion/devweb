import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { SoftwareSystemsSection } from "@/components/software-systems-section"
import { ProcessTimeline } from "@/components/portfolio-section"
import { ContactSection } from "@/components/contact-section"
import { PortfolioSection } from "@/components/PortfolioSection"
import { HomepageHubLinks } from "@/components/homepage-hub-links"

export default function Home() {
  return (
    <main className=" bg-[#121212]	w-full p-0">
      <HeroSection />
      <ServicesSection />
      <SoftwareSystemsSection />
      <HomepageHubLinks />
      <PortfolioSection />
      <AboutSection />
      <ProcessTimeline />
      <ContactSection />
    </main>
  )
}

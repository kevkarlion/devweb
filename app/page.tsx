import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessTimeline } from "@/components/portfolio-section"
import { ContactSection } from "@/components/contact-section"
import { PortfolioSection } from "@/components/PortfolioSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212]	w-full p-0">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <ProcessTimeline />
      <ContactSection />
    </main>
  )
}

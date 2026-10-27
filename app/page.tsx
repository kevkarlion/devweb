import { HeroSection } from "@/components/hero-section"
import { PainPointsSection } from "@/components/pain-points-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { AutomationBanner } from "@/components/automation-banner"
import { BrandsMarquee } from "@/components/brands-marquee"
import { SoftwareSystemsSection } from "@/components/software-systems-section"
import { MethodologySection } from "@/components/methodology-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { PortfolioSection } from "@/components/PortfolioSection"
import { HomepageHubLinks } from "@/components/homepage-hub-links"

export default function Home() {
  return (
    <main className=" bg-[#121212]	w-full p-0">
      <HeroSection />
      <PainPointsSection />
      <ServicesSection />
      <ShowcaseSection />
      <BrandsMarquee />
      <AutomationBanner />
      <HomepageHubLinks />
      <PortfolioSection />
      <AboutSection />
      <SoftwareSystemsSection />
      <MethodologySection />
      <FaqSection />
      <ContactSection />
    </main>
  )
}

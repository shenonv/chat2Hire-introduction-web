import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProjectOverview } from "@/components/project-overview"
import { KeyFeatures } from "@/components/key-features"
import { SystemDesign } from "@/components/system-design"
import { Benefits } from "@/components/benefits"
import { FutureDirections } from "@/components/future-directions"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProjectOverview />
      <KeyFeatures />
      <SystemDesign />
      <Benefits />
      <FutureDirections />
      <TeamSection />
      <Footer />
    </div>
  )
}

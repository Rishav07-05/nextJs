import AnimatedTooltip from "@/components/AnimatedTooltip";
import FeaturedPage from "@/components/FeaturedPage";
import HeroSection from "@/components/HeroSection";
// import PageAnimation from "@/components/PageAnimation";
import TestimonialCards from "@/components/TestimonialCards";
import Webinar from "@/components/Webinar";



export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased bg-grid-white/[0.02] overflow-hidden">
      <HeroSection />
      <FeaturedPage />
      {/* <PageAnimation /> */}
      <TestimonialCards />
      <Webinar />
      <AnimatedTooltip />
    </main>
  );
}

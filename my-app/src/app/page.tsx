import FeaturedPage from "@/components/FeaturedPage";
import HeroSection from "@/components/HeroSection";
// import PageAnimation from "@/components/PageAnimation";
import TestimonialCards from "@/components/TestimonialCards";



export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedPage />
      {/* <PageAnimation /> */}
      <TestimonialCards />
    </main>
  );
}

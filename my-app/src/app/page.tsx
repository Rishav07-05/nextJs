import FeaturedPage from "@/components/FeaturedPage";
import HeroSection from "@/components/HeroSection";



export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedPage />

    </main>
  );
}

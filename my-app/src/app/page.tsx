import FeaturedPage from "@/components/FeaturedPage";
import HeroSection from "@/components/HeroSection";
import Login from "@/components/Login";


export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedPage />
      <Login />
    </main>
  );
}

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Values } from "@/components/Values";
import { Impact } from "@/components/Impact";
import { Initiatives } from "@/components/Initiatives";
import { CommunityHub } from "@/components/CommunityHub";
import { Stories } from "@/components/Stories";
import { Location } from "@/components/Location";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Values />
      <Impact />
      <Initiatives />
      <CommunityHub />
      <Stories />
      <Location />
      <CTASection />
      <Footer />
    </main>
  );
}

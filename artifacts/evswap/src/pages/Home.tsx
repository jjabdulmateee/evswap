import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TargetCustomers } from "@/components/sections/TargetCustomers";
import { MarketOpportunity } from "@/components/sections/MarketOpportunity";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { Sustainability } from "@/components/sections/Sustainability";
import { JoinRevolution } from "@/components/sections/JoinRevolution";
import { Investors } from "@/components/sections/Investors";
import { Partners } from "@/components/sections/Partners";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <TargetCustomers />
        <MarketOpportunity />
        <Features />
        <Pricing />
        <Sustainability />
        <Partners />
        <JoinRevolution />
        <Investors />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

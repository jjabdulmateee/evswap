import { FadeIn } from "@/components/ui/fade-in";
import { Leaf, Globe, Wind } from "lucide-react";

export function Sustainability() {
  return (
    <section className="relative py-24 bg-[#062411] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/sustainability.png`} 
          alt="Sustainability" 
          className="w-full h-full object-cover opacity-20 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#062411] via-[#062411]/90 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm mb-4">
              <Leaf className="w-4 h-4" /> Environmental Impact
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">Driving a Cleaner Peshawar</h2>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              Every battery swap takes us one step closer to a sustainable future. We're committed to reducing pollution and building a greener transportation ecosystem for generations to come.
            </p>
          </FadeIn>

          <div className="space-y-6">
            {[
              { title: "Reducing fossil fuel dependency", icon: Wind },
              { title: "Lowering carbon emissions across the city", icon: Globe },
              { title: "Supporting Pakistan's green transportation goals", icon: Leaf },
            ].map((metric, idx) => (
              <FadeIn key={idx} delay={0.2 + (idx * 0.1)}>
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md">
                  <div className="bg-primary/20 p-2 rounded-lg text-primary">
                    <metric.icon className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium">{metric.title}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

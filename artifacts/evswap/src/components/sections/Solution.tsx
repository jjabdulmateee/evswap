import { FadeIn } from "@/components/ui/fade-in";
import { Zap, BrainCircuit, Leaf } from "lucide-react";

export function Solution() {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070')] opacity-10 bg-cover bg-center mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <FadeIn>
              <h2 className="text-emerald-400 font-bold tracking-wider uppercase text-sm mb-3">Introducing EVswap</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-emerald-400">
                Battery swapped in under 5 minutes.
              </h3>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
                EVswap operates a network of smart battery swapping stations across Peshawar. Ride in with a depleted battery, swap for a fully charged one, and continue your journey — it's that simple.
              </p>
            </FadeIn>
          </div>

          <div className="space-y-6">
            {[
              { title: "Lightning Fast", desc: "No cables, no waiting. Just swap and go in seconds.", icon: Zap, color: "text-yellow-400" },
              { title: "Smart Network", desc: "IoT-enabled stations monitor battery health in real-time.", icon: BrainCircuit, color: "text-accent" },
              { title: "Eco-friendly", desc: "Powered by optimized charging cycles to reduce carbon footprint.", icon: Leaf, color: "text-primary" },
            ].map((feature, idx) => (
              <FadeIn key={idx} delay={0.2 + (idx * 0.1)} direction="left">
                <div className="flex items-start gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className={`mt-1 bg-white/10 p-3 rounded-xl ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">{feature.title}</h4>
                    <p className="text-slate-300">{feature.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

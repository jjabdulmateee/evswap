import { FadeIn } from "@/components/ui/fade-in";

export function MarketOpportunity() {
  return (
    <section className="py-20 bg-accent text-white relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/30 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          
          <div className="lg:col-span-1">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Growing Market</h2>
              <p className="text-accent-foreground/90 text-lg leading-relaxed">
                Pakistan's electric vehicle market is rapidly expanding, driven by rising fuel prices, government incentives, and growing environmental awareness. EVswap is positioned to lead this transformation in KPK.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-6">
            {[
              { stat: "40%", label: "Annual EV adoption growth in Pakistan" },
              { stat: "60%", label: "Cheaper than petrol per kilometer" },
              { stat: "100k+", label: "Potential riders across KPK alone" }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={0.2 + (idx * 0.1)} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center hover:-translate-y-1 transition-transform">
                <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2">{item.stat}</div>
                <div className="text-sm text-accent-foreground/80 font-medium">{item.label}</div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

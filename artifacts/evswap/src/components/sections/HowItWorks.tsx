import { FadeIn } from "@/components/ui/fade-in";
import { MapPin, RefreshCw, Zap } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Locate",
      desc: "Open the EVswap app and find the nearest swap station on the map.",
      icon: MapPin,
    },
    {
      num: "02",
      title: "Swap",
      desc: "Arrive at the station and exchange your depleted battery for a fully charged one in under 5 minutes.",
      icon: RefreshCw,
    },
    {
      num: "03",
      title: "Ride",
      desc: "Continue your journey with a full battery — no waiting, no downtime.",
      icon: Zap,
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold">How Battery Swapping Works</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Three simple steps to keep you moving without interruption.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-border via-primary to-border -z-0" />

          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 0.2} className="relative z-10 text-center flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-secondary mb-6 relative group hover:border-primary transition-colors">
                <step.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-foreground text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.num}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

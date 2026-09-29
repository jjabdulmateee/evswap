import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { Zap, Clock, Leaf } from "lucide-react";
import { useMap } from "@/contexts/MapContext";

export function Hero() {
  const { openMap } = useMap();
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-background via-green-50 to-blue-50">
      {/* Decorative background blobs */}
      <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <div className="max-w-2xl">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                Now Live in Peshawar
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                Swap. Ride. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Repeat.
                </span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-lg sm:text-xl text-muted-foreground mb-4 leading-relaxed">
                Pakistan's first battery swapping network for electric bikes — swap your battery in under 5 minutes.
              </p>
              <p className="text-base font-medium text-foreground mb-8">
                No more 6-hour charging waits. No more range anxiety.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" onClick={openMap}>
                Find Swap Station
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
                How It Works
              </Button>
            </FadeIn>

            <FadeIn delay={0.5} className="grid grid-cols-3 gap-4 border-t border-border pt-8">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-primary font-bold text-lg">
                  <Clock className="w-5 h-5" /> &lt;5 min
                </div>
                <span className="text-sm text-muted-foreground">Swap Time</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-accent font-bold text-lg">
                  <Leaf className="w-5 h-5" /> 0
                </div>
                <span className="text-sm text-muted-foreground">Emissions</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-foreground font-bold text-lg">
                  <Zap className="w-5 h-5" /> 24/7
                </div>
                <span className="text-sm text-muted-foreground">Service</span>
              </div>
            </FadeIn>
          </div>

          {/* Image */}
          <FadeIn delay={0.3} direction="left" className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/50 aspect-square lg:aspect-[4/3]">
              <img 
                src={`${import.meta.env.BASE_URL}images/hero-ev.png`} 
                alt="EVswap battery swapping station and electric scooter" 
                className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-border flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <Zap className="w-6 h-6 fill-current" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">100% Charged</p>
                <p className="text-xs text-muted-foreground">Ready to go</p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

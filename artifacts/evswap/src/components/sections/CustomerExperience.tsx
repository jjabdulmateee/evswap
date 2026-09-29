import { FadeIn } from "@/components/ui/fade-in";
import { MapPin, History, Star, MessageSquare } from "lucide-react";

export function CustomerExperience() {
  return (
    <section className="py-24 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <FadeIn direction="right">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              {/* rider looking at phone on scooter */}
              <img 
                src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=800&q=80" 
                alt="App experience" 
                className="w-full h-auto object-cover aspect-square md:aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/40 to-transparent mix-blend-multiply" />
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">A Seamless Experience</h2>
            </FadeIn>

            <div className="space-y-8">
              {[
                { title: "Station Locator", desc: "Find the nearest swap station in seconds using the app.", icon: MapPin },
                { title: "Swap History", desc: "Track all your battery swaps and usage history.", icon: History },
                { title: "Rewards Program", desc: "Earn points with every swap and redeem for free swaps.", icon: Star },
                { title: "Ratings & Reviews", desc: "Community-driven feedback keeps quality high.", icon: MessageSquare },
              ].map((item, idx) => (
                <FadeIn key={idx} delay={0.2 + (idx * 0.1)}>
                  <div className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-colors shadow-sm">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

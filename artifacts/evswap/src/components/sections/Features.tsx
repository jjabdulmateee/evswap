import { FadeIn } from "@/components/ui/fade-in";
import { Zap, Smartphone, Headphones, Shield, Leaf, CreditCard, TrendingUp } from "lucide-react";

export function Features() {
  const features = [
    { title: "Lightning Fast", desc: "Battery swap in under 5 minutes", icon: Zap },
    { title: "Increase Income", desc: "More ride time means more deliveries and more earnings. Stay on the road when it matters most.", icon: TrendingUp },
    { title: "Easy Mobile App", desc: "Locate stations, track swaps, manage your account", icon: Smartphone },
    { title: "24/7 Support", desc: "Round-the-clock customer assistance", icon: Headphones },
    { title: "Battery Care Included", desc: "We handle all battery maintenance and monitoring", icon: Shield },
    { title: "Eco-Friendly", desc: "Zero emissions, cleaner Peshawar", icon: Leaf },
    { title: "Affordable Plans", desc: "Flexible subscription plans for every rider", icon: CreditCard },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose EVswap?</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="p-6 rounded-2xl border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FadeIn } from "@/components/ui/fade-in";
import { Package, GraduationCap, Car, Briefcase } from "lucide-react";

export function TargetCustomers() {
  const targets = [
    {
      title: "Delivery Riders",
      desc: "Keep deliveries moving without charging downtime.",
      icon: Package,
    },
    {
      title: "Students",
      desc: "Affordable, fast, and eco-friendly daily commute.",
      icon: GraduationCap,
    },
    {
      title: "Daily Commuters",
      desc: "Start every day with a full battery, guaranteed.",
      icon: Car,
    },
    {
      title: "Small Business",
      desc: "Reduce fuel costs and boost operational efficiency.",
      icon: Briefcase,
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Who Benefits from EVswap?</h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {targets.map((target, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} direction="up">
              <div className="group p-8 rounded-3xl bg-secondary hover:bg-primary transition-colors duration-300 h-full">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                  <target.icon className="w-7 h-7 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{target.title}</h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/90 transition-colors">
                  {target.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FadeIn } from "@/components/ui/fade-in";
import { Battery, PlugZap, Clock, AlertTriangle } from "lucide-react";

const problems = [
  {
    title: "Growing EV adoption",
    description: "EV bikes are rising rapidly across KPK, creating huge demand.",
    icon: Battery,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "No charging infrastructure",
    description: "Accessible public charging stations are practically non-existent in Peshawar.",
    icon: PlugZap,
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    title: "Long charging times",
    description: "Traditional wall charging takes 6–8 hours, ruining productivity.",
    icon: Clock,
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    title: "Range anxiety",
    description: "Riders constantly fear running out of battery mid-journey.",
    icon: AlertTriangle,
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  }
];

export function Problem() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">The Challenge</h2>
          <h3 className="text-3xl md:text-4xl font-bold">The EV Challenge in Peshawar</h3>
          <p className="mt-4 text-muted-foreground text-lg">
            Transitioning to electric mobility is the future, but current charging solutions are holding riders back.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-6 h-full border border-border shadow-lg shadow-black/[0.03] hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${item.bg} ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

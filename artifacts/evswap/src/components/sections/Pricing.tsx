import { FadeIn } from "@/components/ui/fade-in";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "2,000",
    swaps: 20,
    desc: "Perfect for students and occasional riders",
    popular: false,
    features: [
      "20 battery swaps/month",
      "Access to all 5 stations",
      "App-based station locator",
      "Swap history tracking",
      "Email support",
    ],
  },
  {
    name: "Standard",
    price: "4,000",
    swaps: 35,
    desc: "Best for daily commuters and delivery riders",
    popular: true,
    features: [
      "35 battery swaps/month",
      "Access to all 5 stations",
      "24/7 station availability",
      "Battery maintenance included",
      "Swap history tracking",
      "Rewards points on every swap",
      "Priority customer support",
    ],
  },
  {
    name: "Premium",
    price: "6,000",
    swaps: 60,
    desc: "Ideal for businesses and high-volume riders",
    popular: false,
    features: [
      "60 battery swaps/month",
      "Access to all 5 stations",
      "24/7 station availability",
      "Battery maintenance included",
      "Swap history & analytics",
      "Double rewards points",
      "Dedicated account manager",
      "Multi-bike support (up to 3)",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-green-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Simple, Affordable Pricing</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            One flat monthly fee. No hidden charges. No per-swap costs.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, idx) => (
            <FadeIn key={plan.name} delay={idx * 0.1}>
              <div className={`relative bg-white rounded-3xl border overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-green-400 shadow-2xl shadow-green-200 scale-105"
                  : "border-border shadow-md"
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-green-500 to-cyan-500 text-white text-center text-xs font-bold py-2 tracking-widest uppercase">
                    Most Popular
                  </div>
                )}

                {/* Header */}
                <div className={`p-8 text-center ${plan.popular ? "bg-gradient-to-br from-green-500 to-cyan-500 text-white" : "bg-gray-50"}`}>
                  <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-4 ${
                    plan.popular ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                  }`}>
                    <Zap className={`w-4 h-4 ${plan.popular ? "fill-white" : ""}`} /> {plan.name} Plan
                  </div>
                  <div className="flex items-end justify-center gap-1 mb-2">
                    <span className={`text-2xl font-bold ${plan.popular ? "text-white" : "text-foreground"}`}>₨</span>
                    <span className={`text-6xl font-extrabold leading-none ${plan.popular ? "text-white" : "text-foreground"}`}>{plan.price}</span>
                    <span className={`text-lg mb-2 ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>/mo</span>
                  </div>
                  <p className={`text-sm ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>{plan.desc}</p>
                </div>

                {/* Features */}
                <div className="p-8 flex flex-col flex-1">
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    size="lg"
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => window.location.href = `mailto:Evswap@gmail.com?subject=${plan.name} Plan Subscription`}
                  >
                    Get {plan.name} Plan
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Per-swap rates note */}
        <FadeIn className="mt-12">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-border p-6 flex flex-col sm:flex-row gap-6 items-center justify-center text-center shadow-sm">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Students</p>
              <p className="text-3xl font-extrabold text-primary">₨130</p>
              <p className="text-sm text-muted-foreground">per swap</p>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">All Others</p>
              <p className="text-3xl font-extrabold text-foreground">₨160</p>
              <p className="text-sm text-muted-foreground">per swap</p>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="flex-1 text-sm text-muted-foreground">
              <p>Student discount available with a valid university ID.</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Cancel anytime · No contracts · Contact us at{" "}
            <a href="mailto:Evswap@gmail.com" className="text-primary font-medium hover:underline">Evswap@gmail.com</a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

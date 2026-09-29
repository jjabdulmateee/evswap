import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { Users, Handshake, TrendingUp, Zap } from "lucide-react";

const actions = [
  {
    icon: Users,
    label: "Subscribe Now",
    desc: "Join as a rider and start swapping today",
    primary: true,
    href: "mailto:Evswap@gmail.com?subject=Subscription Inquiry",
  },
  {
    icon: Handshake,
    label: "Become a Partner",
    desc: "Host a swap station or collaborate with us",
    primary: false,
    href: "mailto:Evswap@gmail.com?subject=Partnership Inquiry",
  },
  {
    icon: TrendingUp,
    label: "For Investors",
    desc: "Explore investment opportunities with EVswap",
    primary: false,
    href: "#investors",
  },
];

export function JoinRevolution() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Vivid gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-green-500 to-cyan-500" />
      {/* Animated radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]" />
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <FadeIn>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2 text-white text-sm font-semibold mb-8">
            <Zap className="w-4 h-4 fill-white" /> Pakistan's First EV Battery Swap Network
          </div>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.1}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Ready to Join the <br />
            <span className="text-yellow-300 drop-shadow-[0_0_30px_rgba(253,224,71,0.5)]">
              Revolution?
            </span>
          </h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-14 leading-relaxed">
            Start swapping today and experience the future of electric mobility in Peshawar. Whether you ride, invest, or partner — there's a place for you.
          </p>
        </FadeIn>

        {/* Action cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {actions.map((action, idx) => (
            <FadeIn key={idx} delay={0.1 + idx * 0.1}>
              <a href={action.href} className="block h-full group">
                <div className={`rounded-2xl p-7 text-center flex flex-col items-center gap-4 h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl ${
                  action.primary
                    ? "bg-white text-foreground shadow-xl"
                    : "bg-white/15 backdrop-blur-sm border border-white/30 text-white hover:bg-white/25"
                }`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    action.primary ? "bg-emerald-100 text-emerald-600" : "bg-white/20 text-white"
                  }`}>
                    <action.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <p className={`font-bold text-xl mb-2 ${action.primary ? "text-foreground" : "text-white"}`}>
                      {action.label}
                    </p>
                    <p className={`text-sm leading-relaxed ${action.primary ? "text-muted-foreground" : "text-white/80"}`}>
                      {action.desc}
                    </p>
                  </div>
                  <div className={`mt-auto text-sm font-semibold underline underline-offset-4 ${
                    action.primary ? "text-emerald-600" : "text-yellow-300"
                  }`}>
                    Get Started →
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

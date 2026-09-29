import { FadeIn } from "@/components/ui/fade-in";
import { ExternalLink, Battery, CheckCircle } from "lucide-react";

export function Partners() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">Our Technology Partner</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            EVswap sources its premium lithium batteries from a trusted local technology partner, ensuring top-tier quality and reliability for every swap.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="max-w-4xl mx-auto rounded-3xl border border-border overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            {/* Dark header with logo */}
            <div className="bg-[#1a1a1a] p-10 flex flex-col sm:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src="/images/zypher-logo.png"
                  alt="Zypher Enterprise"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-white/60 text-sm uppercase tracking-widest font-semibold mb-1">Battery Supplier</p>
                <h3 className="text-2xl font-extrabold text-white mb-2">Zypher Enterprise</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Complete Technology Solutions Provider — Premium LiFePO₄ lithium batteries, IoT solutions, and AI products, based in Peshawar, Pakistan.
                </p>
              </div>
              <a
                href="https://zypherenterprise.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-[#a3d900] hover:bg-lime-400 text-black font-bold px-5 py-3 rounded-xl transition-colors text-sm"
              >
                Visit Website <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Features row */}
            <div className="bg-gray-50 p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Battery, title: "LiFePO₄ Batteries", desc: "Premium lithium iron phosphate cells with 10,000+ charge cycles" },
                  { icon: CheckCircle, title: "Built-in BMS", desc: "Advanced Battery Management System for maximum safety" },
                  { icon: CheckCircle, title: "99% Efficiency", desc: "Maximum energy conversion and minimal loss" },
                  { icon: CheckCircle, title: "Local Support", desc: "Based in Peshawar — fast delivery and technical support" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
                <span>📍 Near AMS High School, Palosi Road, Forest Bazar, Peshawar</span>
                <a href="mailto:info@zypherenterprise.com" className="text-primary hover:underline font-medium">
                  info@zypherenterprise.com
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

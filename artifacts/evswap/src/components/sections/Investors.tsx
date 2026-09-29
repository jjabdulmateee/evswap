import { FadeIn } from "@/components/ui/fade-in";
import { CheckCircle, TrendingUp, Zap, Building2, Globe } from "lucide-react";

const fundsData = [
  { name: "Swap Stations", pct: 50, amount: "₨1,750,000", color: "#10b981" },
  { name: "Battery Inventory", pct: 30, amount: "₨1,050,000", color: "#3b82f6" },
  { name: "Tech & App Dev", pct: 10, amount: "₨350,000", color: "#8b5cf6" },
  { name: "Marketing", pct: 7, amount: "₨245,000", color: "#f59e0b" },
  { name: "Operations", pct: 3, amount: "₨105,000", color: "#6b7280" },
];

const roadmap = [
  {
    quarter: "Q2 2026",
    phase: "Phase 1: Peshawar Launch",
    desc: "Launch 5 swap stations in high-traffic areas (University Road, Saddar, Hayatabad)",
    icon: Zap,
    color: "bg-emerald-500",
  },
  {
    quarter: "Q4 2026",
    phase: "Phase 2: Network Expansion",
    desc: "Add 10 more stations across Peshawar, targeting 2,000 subscribers",
    icon: Building2,
    color: "bg-blue-500",
  },
  {
    quarter: "2027",
    phase: "Phase 3: Multi-City",
    desc: "Launch in Islamabad and Lahore with 20+ stations in each city",
    icon: TrendingUp,
    color: "bg-purple-500",
  },
  {
    quarter: "2028+",
    phase: "Phase 4: National Network",
    desc: "Expand to Karachi, Multan, Faisalabad — Pakistan's leading EV battery network",
    icon: Globe,
    color: "bg-orange-500",
  },
];

const whyNow = [
  "Pakistan's EV market growing at 40% annually",
  "Rising fuel costs making EVs more attractive",
  "Government incentives for green transportation",
  "No direct competitors in battery swapping space",
  "Proven business model in China and India",
];

const advantages = [
  "First-mover advantage in Pakistani market",
  "Proprietary battery management technology",
  "Strategic partnerships with battery suppliers",
  "Low customer acquisition cost (₨200/user)",
  "High switching costs once users adopt the platform",
];

export function Investors() {
  return (
    <section id="investors" className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-emerald-500/30 mb-6">
            Investment Opportunity
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Revolutionizing Urban Mobility <br />
            <span className="text-emerald-400">in Pakistan</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Join us in building Pakistan's first battery swapping network for electric bikes.
          </p>
        </FadeIn>

        {/* Investment Ask */}
        <FadeIn>
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {[
              { label: "Seeking Investment", value: "₨3.5 Million", sub: "Pre-Seed Round", accent: true },
              { label: "Equity Offered", value: "25%", sub: "Ownership Stake", accent: false },
              { label: "Post-Money Valuation", value: "₨14 Million", sub: "Company Valuation", accent: false },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl p-8 text-center border ${item.accent ? "bg-emerald-500 border-emerald-400" : "bg-white/5 border-white/10"}`}>
                <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${item.accent ? "text-emerald-900" : "text-slate-400"}`}>{item.label}</p>
                <p className={`text-4xl font-extrabold mb-1 ${item.accent ? "text-white" : "text-white"}`}>{item.value}</p>
                <p className={`text-sm ${item.accent ? "text-emerald-100" : "text-slate-400"}`}>{item.sub}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Problems & Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <FadeIn>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
              <h3 className="text-xl font-bold mb-6 text-white">The Problem</h3>
              <div className="space-y-5">
                {[
                  { stat: "6–8 Hours", desc: "EV riders lose valuable earning hours waiting for batteries to charge" },
                  { stat: "Zero Network", desc: "No convenient charging infrastructure exists for electric bike users" },
                  { stat: "₨2,000/day", desc: "Delivery riders lose this in potential earnings on bad charging days" },
                ].map((p, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-16 h-8 bg-red-500/20 text-red-400 text-xs font-bold rounded-lg flex items-center justify-center flex-shrink-0">{p.stat}</div>
                    <p className="text-slate-300 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
              <h3 className="text-xl font-bold mb-6 text-white">Our Solution</h3>
              <div className="space-y-5">
                {[
                  { stat: "5 Min", desc: "Exchange depleted batteries for fully charged ones instantly" },
                  { stat: "5 Stations", desc: "Strategically placed swap stations across Peshawar's key locations" },
                  { stat: "₨2K–6K/mo", desc: "Affordable subscription plans cheaper than daily fuel costs" },
                ].map((s, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-16 h-8 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-lg flex items-center justify-center flex-shrink-0">{s.stat}</div>
                    <p className="text-slate-300 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Use of Funds */}
        <FadeIn className="mb-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-8">Use of Funds — ₨3.5 Million</h3>
            <div className="space-y-4">
              {fundsData.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-32 text-right text-sm text-slate-400 flex-shrink-0">{item.name}</div>
                  <div className="flex-1 bg-white/10 rounded-full h-3">
                    <div
                      className="h-3 rounded-full transition-all duration-700"
                      style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                    />
                  </div>
                  <div className="text-right w-36 flex-shrink-0">
                    <span className="text-white font-semibold text-sm">{item.amount}</span>
                    <span className="text-slate-400 text-xs ml-1">({item.pct}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Revenue Model */}
        <FadeIn className="mb-16">
          <h3 className="text-xl font-bold text-white mb-6">Revenue Model</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { emoji: "💳", title: "Subscription Fees", desc: "₨2,000–6,000/month per user for monthly swap packages", tag: "Primary Revenue" },
              { emoji: "🏢", title: "B2B Fleet Contracts", desc: "Custom pricing for delivery companies and business fleets", tag: "High Margin" },
              { emoji: "📊", title: "Data & Partnerships", desc: "Anonymised usage data and strategic partner integrations", tag: "Future Revenue" },
            ].map((m, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-3xl mb-3">{m.emoji}</div>
                <p className="font-bold text-white mb-2">{m.title}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">{m.desc}</p>
                <span className="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full">{m.tag}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Roadmap */}
        <FadeIn className="mb-16">
          <h3 className="text-xl font-bold text-white mb-8">Expansion Roadmap</h3>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 hidden sm:block" />
            <div className="space-y-6">
              {roadmap.map((r, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className={`w-12 h-12 rounded-full ${r.color} flex items-center justify-center flex-shrink-0 relative z-10 shadow-lg`}>
                    <r.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">{r.quarter}</span>
                    </div>
                    <p className="font-bold text-white mb-1">{r.phase}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Why Now & Advantages */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <FadeIn>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
              <h3 className="text-xl font-bold text-white mb-6">Why Now?</h3>
              <ul className="space-y-3">
                {whyNow.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
              <h3 className="text-xl font-bold text-white mb-6">Competitive Advantages</h3>
              <ul className="space-y-3">
                {advantages.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* CTA */}
        <FadeIn>
          <div className="text-center bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-3xl p-12">
            <h3 className="text-3xl font-extrabold text-white mb-4">Ready to Join the Journey?</h3>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Be part of Pakistan's sustainable mobility revolution. Let's build the future of urban transportation together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:Evswap@gmail.com?subject=Investment Inquiry — EVswap Pre-Seed Round"
                className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-colors shadow-lg"
              >
                Schedule a Meeting
              </a>
              <a
                href="mailto:Evswap@gmail.com?subject=Financial Model Request — EVswap"
                className="inline-flex items-center gap-2 bg-white/15 border border-white/40 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/25 transition-colors"
              >
                Request Financial Model
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

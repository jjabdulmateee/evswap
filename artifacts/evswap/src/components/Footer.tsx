import { Link } from "wouter";
import { Zap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-4 inline-flex">
              <div className="bg-primary w-8 h-8 rounded-lg flex items-center justify-center">
                <Zap className="text-white w-5 h-5 fill-white" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                EVswap
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              Pakistan's first battery swapping network for electric bikes. Empowering riders with fast, eco-friendly, and affordable energy solutions.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'How It Works', 'Features', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Peshawar, KPK, Pakistan</li>
              <li>Evswap@gmail.com</li>
              <li>+92 315 9575367</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>© 2025 EVswap. All rights reserved. Peshawar, KPK, Pakistan</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

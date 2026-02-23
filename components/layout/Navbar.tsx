"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { profileImages, portfolioData } from "@/data/portfolio";

const { owner } = portfolioData;
const navLinks = [
  {href:"/",label:"Home"},
  {href:"/about",label:"About"},
  {href:"/projects",label:"Projects"},
  {href:"/skills",label:"Skills"},
  {href:"/services",label:"Services"},
  {href:"/blog",label:"Blog"},
  {href:"/gallery",label:"Gallery"},
  {href:"/videos",label:"Videos"},
  {href:"/contact",label:"Contact"},
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "navbar-light" : "bg-transparent"}`}>
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">

          {/* Logo — company logo image + brand text */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-sky-100 shadow-sm bg-white flex items-center justify-center">
              <img
                src={(portfolioData.owner as any).companyLogo || "/aquiladp.svg"}
                alt="XcognVis Logo"
                className="w-full h-full object-contain"
                onError={e => {
                  // Fallback to initials if logo fails
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div>
              <span className="font-display font-black text-xl text-gradient leading-none block">EagleWills</span>
              <span className="text-sky-600/60 text-xs font-mono leading-none hidden sm:block">{owner.company}</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-heading ${
                  pathname === l.href
                    ? "text-sky-600 bg-sky-50 font-semibold"
                    : "text-sky-900/60 hover:text-sky-700 hover:bg-sky-50"
                }`}>
                {l.label}
              </Link>
            ))}
            {/* Avatar pill */}
            <Link href="/about" className="ml-3 flex items-center gap-2 bg-white rounded-xl px-3 py-1.5 border border-sky-100 shadow-sm hover:shadow-md hover:border-sky-200 transition-all">
              <img src={profileImages.avatar} alt={owner.name} className="w-7 h-7 rounded-full object-cover object-top border border-sky-200" />
              <span className="text-sky-800 text-sm font-medium">{owner.name.split(" ")[0]}</span>
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
            </Link>
          </div>

          <button className="lg:hidden text-sky-800 p-2 rounded-lg hover:bg-sky-100" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-white/98 backdrop-blur-lg border-t border-sky-100 pb-4 rounded-b-2xl shadow-card">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-sky-50">
              <img src={profileImages.avatar} alt={owner.name} className="w-10 h-10 rounded-full border-2 border-sky-200 object-cover object-top" />
              <div>
                <p className="text-sky-950 font-heading font-semibold text-sm">{owner.name}</p>
                <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /><span className="text-emerald-600 text-xs">Available</span></div>
              </div>
            </div>
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className={`block px-5 py-3 text-sm font-medium transition-colors ${pathname === l.href ? "text-sky-600 font-semibold bg-sky-50" : "text-sky-900/70"}`}>
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

import { Github, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050A15] border-t border-gray-800 text-gray-400 py-12 mt-20 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-fuchsia-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 relative z-10">
        {/* Brand Section */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-fuchsia-500">
            Aquila Amon
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Founder of <span className="text-fuchsia-400">X-Cognivis.com Science</span> — 
            building intelligent solutions in <span className="text-cyan-400">AI, Data Science,</span> 
            and full-stack systems for the modern world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-cyan-400 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-cyan-400 transition">About</Link></li>
            <li><Link href="/projects" className="hover:text-cyan-400 transition">Projects</Link></li>
            <li><Link href="/blog" className="hover:text-cyan-400 transition">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-cyan-400 transition">Contact</Link></li>
            <li><Link href="/resume" className="hover:text-cyan-400 transition">Resume</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-3">Contact Info</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-fuchsia-400" /> 
              <a href="mailto:wilfredaquila@gmail.com" className="hover:text-cyan-400 transition">
                wilfredaquila@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-fuchsia-400" /> 
              <a href="tel:+254112554165" className="hover:text-cyan-400 transition">
                +254 112 554 165
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-fuchsia-400" /> 
              <a href="tel:+254724704865" className="hover:text-cyan-400 transition">
                +254 724 704 865
              </a>
            </li>
            <li>Nairobi, Kenya</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-3">Connect</h3>
          <div className="flex gap-4 text-gray-300">
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="hover:text-fuchsia-400 transition transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noreferrer"
              className="hover:text-fuchsia-400 transition transform hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com/@X-CognivisScience"
              target="_blank"
              rel="noreferrer"
              className="hover:text-fuchsia-400 transition transform hover:scale-110"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs mt-3 italic text-gray-500">
            “Turning curiosity into computation — every single day.”
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-800 pt-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()}{" "}
        <span className="text-gray-400 font-medium">Aquila Amon</span> |{" "}
        <span className="text-fuchsia-400">X-Cognivis.com Science</span> — All Rights Reserved.
      </div>
    </footer>
  );
}

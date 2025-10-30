'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Linkedin, Github, Phone, Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const path = usePathname();
  const [isDark, setIsDark] = useState(true); // theme toggle
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle

  const links = [
    { href: '/', label: 'DefiningMe' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gray-900/80 text-white shadow-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        {/* Left side - Name and links */}
        <div className="flex items-center space-x-4 md:space-x-10">
          <h1 className="font-bold text-xl text-cyan-400">Aquila Amon</h1>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`hover:text-cyan-400 transition-colors ${
                    path === link.href ? 'text-cyan-400 font-semibold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side - Social icons + Theme + Resume */}
        <div className="flex items-center space-x-3 md:space-x-5">
          {/* Desktop icons */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/your-github" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://wa.me/254112554165" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
              <Phone className="w-5 h-5" />
            </a>

            {/* Theme toggle icon */}
            <button onClick={() => setIsDark(!isDark)} className="hover:text-cyan-400 transition" aria-label="Toggle theme">
              {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-yellow-400" />}
            </button>

            {/* Resume button */}
            <Link
              href="/resume"
              className={`ml-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white px-4 py-1 rounded-lg transition ${
                path === '/resume' ? 'bg-cyan-500 text-white' : ''
              }`}
            >
              Resume
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
        {isOpen && (
            <div className="md:hidden bg-gray-900/95 border-t border-gray-800 w-full absolute left-0 flex flex-col items-center py-6 space-y-6 z-40">

                {/* Main links */}
                <div className="flex flex-col space-y-3 items-center">
                {links.map((link) => (
                    <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg hover:text-cyan-400 transition-colors ${
                        path === link.href ? 'text-cyan-400 font-semibold' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                    >
                    {link.label}
                    </Link>
                ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 w-4/5"></div>

                {/* Social icons + theme toggle */}
                <div className="flex items-center justify-center space-x-6">
                <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/your-github" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
                    <Github className="w-5 h-5" />
                </a>
                <a href="https://wa.me/254112554165" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
                    <Phone className="w-5 h-5" />
                </a>
                <button onClick={() => setIsDark(!isDark)} className="hover:text-cyan-400 transition">
                    {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-yellow-400" />}
                </button>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 w-4/5"></div>

                {/* Resume button */}
                <Link
                href="/resume"
                className={`text-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-2 rounded-lg transition ${
                    path === '/resume' ? 'bg-cyan-500 text-white' : ''
                }`}
                onClick={() => setIsOpen(false)}
                >
                Resume
                </Link>
            </div>
        )}

    </nav>
  );
};

export default Navbar;

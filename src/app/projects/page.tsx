"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const baseImages = ["/profile.jpg", "/profile2.jpg", "/profile3.jpg"];

const foreverProjects = [
  {
    title: "Solubility Prediction Model",
    description:
      "Predicts LogS (solubility) from chemical descriptors using Linear Regression and Random Forest. Built for chemical property prediction and AI-driven compound screening.",
    tech: ["Python", "FastAPI", "Scikit-Learn"],
    link: "https://github.com/AquilaX/solubility-model",
    article: `This project marks one of my earliest ventures into computational chemistry — a field that fascinated me for its mix of data, physics, and human curiosity. 
    I designed a predictive model capable of estimating the solubility (LogS) of chemical compounds from their molecular descriptors. 
    Through Linear Regression and Random Forest algorithms, I could explore how structural properties influence solubility. 
    The model’s strength lies not only in its predictive power but in its interpretability — it reflects my belief that AI should explain its reasoning, not hide it. 
    It laid the foundation for later projects that merge scientific data with deep learning.`,
    realWorld: `In the pharmaceutical and chemical industries, solubility prediction remains a cornerstone in drug discovery. 
    Before synthesizing compounds, researchers need to estimate how soluble a molecule will be in different environments — an essential property for bioavailability. 
    Traditionally, this process is time-consuming and expensive, but with predictive modeling, it can be automated. 
    My solubility prediction model brings real-time insights to chemists, allowing them to filter thousands of potential drug candidates and focus on those with higher success potential. 
    It’s a bridge between data science and chemistry — accelerating innovation while reducing cost and environmental waste.`
  },
  {
    title: "MKU AI Assistant",
    description:
      "An intelligent student management and academic assistant system using FastAPI + React. Integrates chat AI, authentication, activity logs, and real-time profile management.",
    tech: ["FastAPI", "React", "SQLAlchemy"],
    link: "https://github.com/AquilaX/mku-ai-assistant",
    article: `Born from the desire to empower students and educators, the MKU AI Assistant combines conversation intelligence, academic management, and real-time analytics. 
    It’s not just a chatbot — it’s an academic ecosystem. The system leverages FastAPI for backend operations, React for intuitive frontend interactions, and SQLAlchemy for efficient ORM data handling. 
    It was designed to simulate intelligent tutoring, track student progress, and simplify institutional workflows. 
    The project captures my passion for using AI to build supportive educational tools that amplify human learning.`,
    realWorld: `In universities today, the gap between learning and management systems is still wide. 
    The MKU AI Assistant bridges that gap by acting as both an academic companion and an administrative assistant. 
    Imagine a student asking, “What’s my next class?” or “Summarize yesterday’s lecture,” and instantly receiving personalized answers. 
    Lecturers can manage classes, review attendance, and send instant announcements. 
    For administrators, data analytics gives real-time performance insights. 
    This system is adaptable beyond MKU — to schools, training institutions, and corporate learning systems. 
    It’s a demonstration of how AI can humanize digital education.`
  },
  {
    title: "AquilaX Time & Billing (XCO)",
    description:
      "A complete AI-powered platform for time tracking, billing, and analytics. Designed for modern data science teams with automation and real-time insights.",
    tech: ["FastAPI", "Next.js", "PostgreSQL"],
    link: "https://github.com/AquilaX/xco-system",
    article: `XCO represents the evolution of how I view productivity — as data waiting to be optimized. 
    The system intelligently tracks time, manages billing, and visualizes performance for teams. 
    What sets it apart is its AI-driven analytics core, built to detect bottlenecks and predict optimal workflows. 
    It’s the type of system I wish every creative professional had: one that balances automation with insight. 
    The project pushed me to explore clean design, secure APIs, and a seamless human–machine experience that makes complexity feel simple.`,
    realWorld: `In consulting, freelancing, and enterprise data science, tracking time and billing accurately can determine the success of entire projects. 
    XCO automates this with intelligence — identifying inefficiencies, visualizing productivity patterns, and offering predictive scheduling. 
    Companies can see how time converts into revenue and how workflow adjustments can save hours of effort weekly. 
    For independent professionals, it’s more than a billing tool; it’s a personal analytics dashboard for optimizing focus. 
    This project embodies my philosophy of transforming daily operations into data-driven stories of growth.`
  },
];

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [imageIndexes, setImageIndexes] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes((prev) =>
        prev.map(() => Math.floor(Math.random() * baseImages.length))
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const filteredProjects = foreverProjects.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.article.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="text-gray-200">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/profile.jpg"
          alt="Aquila Amon - Projects Hero"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0A1628]/60 to-black/90"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Building Intelligence, One Algorithm at a Time 🚀
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            A showcase of projects that combine science, creativity, and logic — where each line of code 
            carries purpose and every model tells a story.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mt-10 px-6">
        <input
          type="text"
          placeholder="🔍 Search by title, technology, or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-xl bg-[#0A1628]/80 border border-fuchsia-600/40 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition"
        />
      </div>

      {/* Project + Article Grid */}
      <div className="max-w-6xl mx-auto py-16 px-6 space-y-24">
        {filteredProjects.map((p, i) => (
          <div
            key={p.title}
            className="space-y-10 bg-[#0A1628]/70 p-6 rounded-2xl shadow-lg hover:shadow-fuchsia-500/20 transition-all duration-500"
          >
            {/* Project and Article */}
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Left: Project Card */}
              <div className="relative group rounded-2xl overflow-hidden">
                <div className="relative h-60 w-full overflow-hidden rounded-xl">
                  <Image
                    src={baseImages[imageIndexes[i]]}
                    alt={p.title}
                    fill
                    className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-4000 ease-in-out"
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl border border-fuchsia-700/30 animate-pulse-slow pointer-events-none"></div>

                <div className="p-5 space-y-3">
                  <h2 className="text-2xl font-semibold text-fuchsia-400">
                    {p.title}
                  </h2>
                  <p className="text-gray-300 text-sm">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-fuchsia-900/40 px-3 py-1 rounded-full text-fuchsia-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-fuchsia-300 hover:text-fuchsia-100 transition"
                  >
                    View Project →
                  </a>
                </div>
              </div>

              {/* Right: Article */}
              <article className="space-y-4 leading-relaxed text-gray-300 text-sm md:text-base">
                <p>{p.article}</p>
              </article>
            </div>

            {/* Real-World Impact */}
            <div className="border-t border-fuchsia-700/40 pt-6">
              <h3 className="text-lg font-semibold text-fuchsia-400 mb-3">
                🌐 Real-World Impact
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {p.realWorld}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

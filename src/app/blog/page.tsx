"use client";
import { useState } from "react";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";

const allBlogs = [
  {
    title: "Understanding Machine Learning Bias",
    date: "October 2025",
    summary:
      "Exploring how bias emerges in AI systems and ways to mitigate it through data engineering and evaluation. This article highlights real-world cases such as facial recognition bias and language model stereotypes — and how fairness metrics and diverse datasets can reshape AI for good.",
    category: "AI",
    image: "/profile.jpg",
    link: "#",
  },
  {
    title: "FastAPI for Data Science Workflows",
    date: "September 2025",
    summary:
      "Learn how to integrate APIs and ML models for real-time predictions in production environments. This post walks through FastAPI endpoints, model loading, async performance, and deployment practices for scalable AI systems.",
    category: "Python",
    image: "/profile.jpg",
    link: "#",
  },
  {
    title: "Data Visualization in R vs Python",
    date: "August 2025",
    summary:
      "R and Python are both powerful for data visualization — but each shines in unique ways. This blog compares the expressiveness of ggplot2 and Shiny in R with the interactivity of Plotly and Dash in Python, helping you pick the right one for your storytelling goals.",
    category: "R",
    image: "/profile.jpg",
    link: "#",
  },
];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredBlogs = allBlogs.filter((b) => {
    const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = filter === "All" || b.category === filter;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", "AI", "Python", "R"];

  return (
    <section className="max-w-6xl mx-auto py-0 text-gray-300">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[380px] w-full mb-16 overflow-hidden rounded-b-3xl">
        <Image
          src="/profile.jpg"
          alt="Blog Hero Background"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 to-[#0A1628]/90 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-fuchsia-400 to-cyan-400">
            AquilaX Blog
          </h1>
          <p className="text-gray-300 max-w-2xl mt-3 text-lg">
            Sharing discoveries, experiments, and deep thoughts from the world of{" "}
            <span className="text-fuchsia-400 font-semibold">
              Data Science, AI, and Software Engineering.
            </span>
          </p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="px-6 flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Search blog titles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 rounded-lg bg-[#0A1628] text-gray-200 border border-fuchsia-700/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition"
        />
        <div className="flex gap-3 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1 rounded-full border text-sm transition ${
                filter === cat
                  ? "bg-fuchsia-600 text-white border-fuchsia-500"
                  : "border-gray-600 hover:bg-fuchsia-700/40 text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 gap-10 px-6 pb-16">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((b) => (
            <article
              key={b.title}
              className="rounded-2xl bg-[#0A1628] overflow-hidden shadow-lg hover:shadow-fuchsia-600/30 transition-all duration-500"
            >
              {/* Blog Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-3000 ease-in-out"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6 space-y-3">
                <h2 className="text-xl font-semibold text-fuchsia-400">{b.title}</h2>
                <p className="text-sm text-gray-400">{b.date}</p>
                <p className="text-gray-300 leading-relaxed text-[15px]">{b.summary}</p>
                <a
                  href={b.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-fuchsia-300 hover:text-fuchsia-100 transition"
                >
                  Read Full Article →
                </a>
              </div>
            </article>
          ))
        ) : (
          <p className="text-center text-gray-400 italic col-span-2">
            No blog posts found matching your search.
          </p>
        )}
      </div>
    </section>
  );
}

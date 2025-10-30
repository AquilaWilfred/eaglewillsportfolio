'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <section className="relative flex flex-col md:flex-row min-h-screen bg-[#0a0a0a] text-white pt-20">
      {/* Left side - Image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full md:w-2/5 h-64 md:h-auto"
      >
        <Image
          src="/profile.jpg"
          alt="Aquila Amon"
          fill
          className="object-cover object-center opacity-90 rounded-b-3xl md:rounded-none"
          priority
        />
      </motion.div>

      {/* Right side - Text */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-16 py-8 md:py-10 space-y-4 md:space-y-6"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          <span className="text-fuchsia-600">Amon Aquila Wilfred</span>
        </h1>
        <p className="text-justify leading-relaxed text-gray-300 text-base sm:text-lg">
          <strong className="text-white">WHO AM I?</strong> — A{" "}
          <span className="text-cyan-400">Data Scientist</span>,{" "}
          <span className="text-cyan-400">AI Specialist</span>, and{" "}
          <span className="text-cyan-400">Full Stack Engineer</span> passionate
          about exploring the intersection of data, intelligence, and creativity.
          <br />
          I build systems that learn, adapt, and help shape a smarter world.
        </p>
      </motion.div>

      {/* Quote - elegantly placed */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="text-yellow-400 italic font-semibold text-sm sm:text-base md:text-lg tracking-wide drop-shadow-md text-right
          absolute md:bottom-8 md:right-10 md:block
          relative block md:static mt-4"
      >
        “Learning is not weakness<br className="hidden sm:block" />but wisdom and experience.”
      </motion.p>

    </section>
  );
}

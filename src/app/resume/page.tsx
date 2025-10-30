import Image from "next/image";
import { FileDown, FileText } from "lucide-react";

export default function ResumePage() {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="relative h-60 w-full mb-12">
        <Image
          src="/profile.jpg"
          alt="Resume Background"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50">
          <h1 className="text-4xl font-bold mb-2">My Professional Résumé</h1>
          <p className="text-gray-200 max-w-lg">
            A detailed overview of my background, skills, and experience in Data
            Science, AI Systems, and Full-Stack Development.
          </p>
        </div>
      </div>

      {/* Resume Card */}
      <div className="max-w-3xl mx-auto bg-gray-900/70 rounded-2xl shadow-lg p-8 text-center transition-all duration-300 hover:shadow-cyan-700/30 hover:scale-[1.01]">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={100}
          height={100}
          className="rounded-full mx-auto mb-4 border-4 border-cyan-500"
        />
        <h2 className="text-2xl font-bold text-cyan-400">
          Dr. Aquila Amon — Data Scientist | AI Specialist
        </h2>
        <p className="text-gray-400 mt-3 text-sm leading-relaxed">
          Passionate about leveraging AI, data-driven decision making, and
          scientific computing to build transformative digital solutions. With
          hands-on experience in FastAPI, React, machine learning, and
          predictive modeling, I create intelligent, efficient, and impactful
          systems for real-world challenges.
        </p>

        {/* Resume Actions */}
        <div className="mt-8 flex justify-center gap-6 flex-wrap">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2 rounded-lg font-semibold transition-all"
          >
            <FileText /> View Résumé
          </a>

          <a
            href="/resume.pdf"
            download="Aquila_Amon_Resume.pdf"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-cyan-400 border border-cyan-600 px-5 py-2 rounded-lg font-semibold transition-all"
          >
            <FileDown /> Download PDF
          </a>
        </div>
      </div>

      {/* Summary Section */}
      <div className="max-w-4xl mx-auto mt-16 px-6 text-center space-y-6">
        <h2 className="text-2xl font-bold text-cyan-400">
          Why My Résumé Matters
        </h2>
        <p className="text-gray-400 leading-relaxed">
          My résumé represents the journey of an engineer, scientist, and
          creator. From statistical modeling to building scalable AI systems,
          it’s a reflection of continuous learning, practical innovation, and
          leadership in technology. Whether you’re seeking collaboration,
          consulting, or insight into data-driven development, this résumé is
          designed to demonstrate the full scope of my technical depth, research
          experience, and entrepreneurial vision.
        </p>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden text-gray-300 leading-relaxed space-y-20 px-6 md:px-12 lg:px-20 py-16 bg-[#0A1628]">
      {/* Header Section */}
      <div className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/profile.jpg"
            alt="Background"
            fill
            className="object-cover object-center opacity-30"
            priority
          />
          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-linear-to-b from-[#0A1628]/60 to-black/90" />
        </div>

        {/* Text on top */}
        <div className="relative text-center space-y-4 z-10 px-6">
          <h1 className="text-5xl font-bold text-white">About Me</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Hey there 👋, I’m <strong className="text-white">Aquila Amon</strong> — a Data Scientist,
            AI Specialist, and Founder of{" "}
            <span className="text-cyan-400">X-Cognivis.com Science</span>.  
            I explore intelligence through data, algorithms, and creativity — 
            transforming raw information into meaningful, beautiful solutions 🚀.
          </p>
        </div>
      </div>

      {/* Origin Story Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <Image
            src="/profile.jpg"
            alt="Aquila Amon thinking"
            width={500}
            height={500}
            className="rounded-2xl shadow-lg object-cover w-full h-[350px]"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold text-white">How It All Began 🌍</h2>
          <p>
            It all started in high school — back when I believed my destiny was in the
            operating theatre 🩺. My dream? To become a <strong>medical surgeon</strong>,
            exploring the human nervous system and unlocking the mysteries of the brain 🧠.  
          </p>
          <p>
            But life, being the master of plot twists, had other plans 😅.  
            At <strong>Amasago Boys High School</strong>, I met <strong>Mr. Aboki</strong> — my computer teacher,
            whose calm mastery around machines fascinated me more than any textbook.
            He didn’t just teach computing — he *performed it*, and that changed everything.
          </p>
          <p>
            I realized I could still work with a brain — only this time, a digital one 💻.
            I traded my scalpel for a keyboard, and every line of code became a new incision
            into the unknown.
          </p>
          <p>
            Ironically, the university I once swore I’d never join —
            <strong> Mount Kenya University</strong> — became my greatest stage of transformation 🎓.  
            There, I found my new anatomy:{" "}
            <span className="text-cyan-400">data, algorithms, and intelligence</span>.  
            It was no longer about healing bodies — but empowering minds.
          </p>
          <p>
            From that moment, I stopped chasing one dream and started designing many — 
            powered by curiosity, discipline, and a healthy dose of caffeine ☕.
          </p>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="flex-1">
          <Image
            src="/profile.jpg"
            alt="Philosophical Thinking"
            width={400}
            height={400}
            className="rounded-full shadow-md object-cover mx-auto"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold text-white">My Philosophy 💡</h2>
          <p>
            I believe intelligence isn’t limited to humans — it’s a pattern waiting to be discovered, 
            modeled, and enhanced. My philosophy is grounded in curiosity and precision — 
            finding elegance in data and empathy in algorithms.
          </p>
          <p>
            For me, Artificial Intelligence isn’t just technology — it’s poetry written in code ✨.  
            Every line I write bridges logic and life — blending art, science, and emotion.
          </p>
        </div>
      </div>

      {/* Skills and Vision Section */}
      <div className="text-center space-y-6">
        <Image
          src="/profile.jpg"
          alt="AI and Data Science"
          width={900}
          height={400}
          className="rounded-2xl mx-auto shadow-xl object-cover"
        />
        <h2 className="text-2xl font-semibold text-white">Skills & Vision ⚙️</h2>
        <p className="max-w-3xl mx-auto">
          My expertise spans <strong>Machine Learning</strong>, <strong>Data Science</strong>, 
          and <strong>AI-driven system design</strong>. I build backends using 
          <span className="text-cyan-400"> FastAPI</span> and craft interactive frontends with 
          <span className="text-cyan-400"> React</span> — delivering intelligent, human-centered experiences.
        </p>
        <p className="max-w-3xl mx-auto">
          Through <span className="text-cyan-400">X-Cognivis.com Science</span>, 
          my mission is to make intelligence accessible — blending computation with creativity 
          to shape the next era of human–machine collaboration 🤝.
        </p>
      </div>

      {/* Hobbies Section */}
      <div className="space-y-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <Image
              src="/profile.jpg"
              alt="Playing pool"
              width={450}
              height={300}
              className="rounded-2xl shadow-lg object-cover w-full"
            />
          </div>
          <div className="flex-1 space-y-3">
            <h2 className="text-2xl font-semibold text-white">Beyond the Code 🎮</h2>
            <p>
              When I’m not coding, I enjoy playing <strong>pool</strong> 🎱 — 
              not just for fun, but for the art of <em>estimation and precision</em>.  
              That *crack* of the balls? Music to my mind 😌.
            </p>
            <p>
              I also love <strong>FIFA</strong> ⚽ — my go-to team? 
              <span className="text-red-500 font-semibold"> Liverpool</span> 🔥 — 
              though I sometimes switch to <strong>Real Madrid</strong> when my opponent’s ego 
              needs humbling 😏.
            </p>
            <p>
              Otherwise, you’ll find me building in{" "}
              <span className="text-cyan-400">Python</span>,{" "}
              <span className="text-cyan-400">R</span>, or{" "}
              <span className="text-cyan-400">TypeScript</span>, or unwinding with a good movie 🎬.  
              That balance keeps my creativity fresh — and my soul human ❤️.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

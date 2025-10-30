import { Linkedin, Github, Phone, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="relative h-64 w-full mb-12">
        <Image
          src="/profile.jpg"
          alt="Background"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40">
          <h1 className="text-4xl font-bold">Let’s Connect</h1>
          <p className="text-lg text-gray-200 max-w-xl mt-2">
            Collaboration starts with a simple “Hello.” Reach out — I’m always
            open to discussing projects, data challenges, or innovative ideas.
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="space-y-16 max-w-5xl mx-auto px-6">
        {/* LinkedIn */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2">
            <Image
              src="/profile.jpg"
              alt="LinkedIn"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Linkedin className="text-cyan-500" /> LinkedIn
            </h2>
            <p className="text-gray-400 mt-2">
              LinkedIn is where professional connections thrive. Whether you’re
              exploring collaboration opportunities, AI consulting, or knowledge
              exchange, my LinkedIn page offers a transparent look into my work
              and network. Feel free to drop a message or follow for updates on
              data science, AI ethics, and innovation.
            </p>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 text-cyan-400 hover:underline"
            >
              Visit LinkedIn →
            </a>
          </div>
        </div>

        {/* GitHub */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <div className="w-full md:w-1/2">
            <Image
              src="/profile.jpg"
              alt="GitHub"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 border-r-4 border-green-500 pr-6 text-right">
            <h2 className="text-2xl font-semibold flex items-center justify-end gap-2">
              GitHub <Github className="text-cyan-500" />
            </h2>
            <p className="text-gray-400 mt-2">
              Dive into my code! GitHub is where I share open-source projects,
              data pipelines, and machine learning prototypes. It’s a space to
              explore real-world applications, contribute to innovation, and
              connect with the developer side of data science.
            </p>
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 text-cyan-400 hover:underline"
            >
              Explore GitHub →
            </a>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2">
            <Image
              src="/profile.jpg"
              alt="WhatsApp"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <MessageCircle className="text-green-500" /> WhatsApp
            </h2>
            <p className="text-gray-400 mt-2">
              Sometimes, direct conversation moves things faster. Reach me on
              WhatsApp for quick collaboration, clarifications, or a friendly
              chat about your AI ideas. I value authentic connections — feel
              free to say hi!
            </p>
            <a
              href="https://wa.me/254112554165"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 text-green-400 hover:underline"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <div className="w-full md:w-1/2">
            <Image
              src="/profile.jpg"
              alt="Email"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 border-r-4 border-green-500 pr-6 text-right">
            <h2 className="text-2xl font-semibold flex items-center justify-end gap-2">
              Email <Mail className="text-cyan-500" />
            </h2>
            <p className="text-gray-400 mt-2">
              For official or long-form inquiries, email is the best way to
              connect. Whether it’s project collaboration, technical
              consultation, or speaking engagements, I’ll get back to you within
              24 hours. Clear communication builds great collaborations.
            </p>
            <a
              href="mailto:your@email.com"
              className="inline-block mt-3 text-cyan-400 hover:underline"
            >
              Send Email →
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2">
            <Image
              src="/profile.jpg"
              alt="Phone"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Phone className="text-green-500" /> Phone
            </h2>
            <p className="text-gray-400 mt-2">
              Need to speak directly? A quick phone call can sometimes do what
              hours of emails can’t. I’m always open to meaningful discussions on
              projects, AI research, or partnership ideas. Let’s build something
              impactful together.
            </p>
            <p className="mt-3 text-cyan-400 font-semibold">
              Call: +254 112 554 165
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto mt-20 p-8 bg-gray-900/60 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center text-cyan-400">
          Send Me a Message
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-800 text-white focus:ring focus:ring-cyan-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-800 text-white focus:ring focus:ring-cyan-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded bg-gray-800 text-white focus:ring focus:ring-cyan-500"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full p-3 rounded bg-gray-800 text-white focus:ring focus:ring-cyan-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

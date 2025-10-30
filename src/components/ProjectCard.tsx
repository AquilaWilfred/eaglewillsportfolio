interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export default function ProjectCard({ title, description, tech, link }: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-5 shadow hover:shadow-cyan-500/30 transition">
      <h2 className="text-xl font-semibold text-cyan-400 mb-2">{title}</h2>
      <p className="text-gray-400 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {tech.map((t) => (
          <span key={t} className="text-xs bg-gray-700 px-2 py-1 rounded">{t}</span>
        ))}
      </div>
      <a href={link} target="_blank" className="text-sm text-cyan-400 hover:underline">
        View on GitHub →
      </a>
    </div>
  );
}

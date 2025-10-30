interface BlogCardProps {
  title: string;
  date: string;
  summary: string;
  link: string;
}

export default function BlogCard({ title, date, summary, link }: BlogCardProps) {
  return (
    <div className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-cyan-500/30 transition">
      <h2 className="text-xl font-semibold mb-1 text-cyan-400">{title}</h2>
      <p className="text-xs text-gray-500 mb-2">{date}</p>
      <p className="text-gray-400 mb-3">{summary}</p>
      <a href={link} target="_blank" className="text-sm text-cyan-400 hover:underline">
        Read More →
      </a>
    </div>
  );
}

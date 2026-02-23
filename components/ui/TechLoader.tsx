"use client";
import { useEffect, useState } from "react";

// Tech images shown as floating decorations AFTER page loads
const techImages = [
  { name:"Python", url:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&auto=format&fit=crop", color:"#3776AB", accent:"#FFE873" },
  { name:"Kotlin", url:"https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=300&auto=format&fit=crop", color:"#7F52FF", accent:"#E44857" },
  { name:"PostgreSQL", url:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&auto=format&fit=crop", color:"#336791", accent:"#336791" },
  { name:"C++", url:"https://images.unsplash.com/photo-1518432031352-d6fc5734595a?w=300&auto=format&fit=crop", color:"#00599C", accent:"#00599C" },
  { name:"R Lang", url:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&auto=format&fit=crop", color:"#276DC3", accent:"#276DC3" },
  { name:"React & TS", url:"https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&auto=format&fit=crop", color:"#61DAFB", accent:"#3178C6" },
  { name:"AI & ML", url:"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=300&auto=format&fit=crop", color:"#FF6F00", accent:"#FF6F00" },
  { name:"Deep Learning", url:"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&auto=format&fit=crop", color:"#7C3AED", accent:"#A78BFA" },
  { name:"Ruby", url:"https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=300&auto=format&fit=crop", color:"#CC342D", accent:"#CC342D" },
  { name:"Cybersecurity", url:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&auto=format&fit=crop", color:"#059669", accent:"#6EE7B7" },
];

const animClasses = ["tech-animate-1","tech-animate-2","tech-animate-3","tech-animate-4","tech-animate-5","tech-animate-6"];
const positions = [
  { top:"8%", left:"2%", rotate:"-8deg", size:"100px" },
  { top:"5%", right:"3%", rotate:"6deg", size:"110px" },
  { top:"30%", left:"1%", rotate:"5deg", size:"90px" },
  { top:"28%", right:"1%", rotate:"-5deg", size:"95px" },
  { bottom:"20%", left:"2%", rotate:"8deg", size:"100px" },
  { bottom:"15%", right:"2%", rotate:"-6deg", size:"105px" },
];

interface Props { pageName?: string; }

export default function TechDecorations({ pageName }: Props) {
  const [mounted, setMounted] = useState(false);
  const [techs, setTechs] = useState<typeof techImages>([]);

  useEffect(() => {
    const shuffled = [...techImages].sort(() => Math.random() - 0.5).slice(0, 6);
    setTechs(shuffled);
    // Small delay so page content loads first, THEN images animate in
    const t = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(t);
  }, []);

  if (!mounted || techs.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {techs.map((tech, i) => (
        <div
          key={tech.name}
          className={`absolute ${animClasses[i] || "tech-animate-1"}`}
          style={{
            ...positions[i],
            opacity: 0, // starts 0, animation fills to 1
          }}
        >
          <div
            className="rounded-2xl overflow-hidden shadow-xl border-2 pointer-events-auto hover:scale-110 transition-transform duration-300"
            style={{
              width: positions[i].size,
              height: positions[i].size,
              transform: `rotate(${positions[i].rotate})`,
              borderColor: tech.color + "40",
              boxShadow: `0 8px 32px ${tech.color}30, 0 0 0 1px ${tech.color}20`,
            }}
          >
            <div className="relative w-full h-full">
              <img src={tech.url} alt={tech.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-end"
                style={{ background: `linear-gradient(to top, ${tech.color}DD, ${tech.color}44, transparent)` }}>
                <span className="text-white text-[9px] font-mono font-bold px-2 pb-1 leading-tight">{tech.name}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

"use client";

const skills = [
  { name: "Figma", percent: 100, icon: "F" },
  { name: "Adobe XD", percent: 100, icon: "Xd" },
  { name: "Adobe Photoshop", percent: 85, icon: "Ps" },
  { name: "Adobe Illustrator", percent: 60, icon: "Ai" },
  { name: "Adobe Premiere", percent: 70, icon: "Pr" },
];

function CircularProgress({
  percent,
  icon,
  name,
}: {
  percent: number;
  icon: string;
  name: string;
}) {
  const radius = 30;
  const stroke = 3;
  const normalizedRadius = radius - stroke;
  const circumference = 2 * Math.PI * normalizedRadius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-20 h-20">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 60 60">
          {/* Background circle */}
          <circle
            cx="30"
            cy="30"
            r={normalizedRadius}
            stroke="#2a2a2a"
            strokeWidth={stroke}
            fill="transparent"
          />
          {/* Progress circle */}
          <circle
            cx="30"
            cy="30"
            r={normalizedRadius}
            stroke="#ff6b35"
            strokeWidth={stroke}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        {/* Icon in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#ff6b35] font-black text-xs">{icon}</span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-white font-bold text-sm">{percent}%</p>
        <p className="text-gray-400 text-xs">{name}</p>
      </div>
    </div>
  );
}

export default function AboutMe() {
  return (
    <section id="about-me" className="bg-[#0d0d0d] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-white text-3xl md:text-4xl font-black mb-3">
            About Me
          </h2>
          <p className="text-gray-400 text-sm">
            User Interface And User Experience And Also Video Editing
          </p>
        </div>

        {/* Content: Image + Text */}
        <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
          {/* Portrait */}
          <div className="flex-shrink-0">
            <div className="w-56 h-64 md:w-64 md:h-80 bg-[#1a1a1a] rounded-xl overflow-hidden">
              <img
                src="/profile-about.jpg"
                alt="About Mahmood"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="text-gray-400 text-sm leading-7 mb-6">
              A software engineer: the modern-day architect of digital realms,
              navigating the ethereal landscape of code, sculpting intangible
              structures that shape our technological world. With fingers poised
              over keyboards like virtuoso pianists, they compose symphonies of
              logic, algorithms and solutions. Their canvas is a screen, a vast
              expanse where lines of code dance in intricate patterns, weaving
              the fabric of programs and applications. Each keystroke is a
              brushstroke, crafting architectures and breathing life into
              innovative designs.In this digital atelier, they don the mantle of
              problem solvers, confronting bugs and glitches like valiant
              knights in an ever-evolving quest for perfection. Debugging
              becomes a noble pursuit, unearthing the mysteries hidden within
              the tangled webs of code.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff6b35] hover:bg-[#e55a28] text-white font-semibold text-sm rounded transition-colors"
            >
              ⬇ Download CV
            </a>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {skills.map((skill) => (
            <CircularProgress
              key={skill.name}
              percent={skill.percent}
              icon={skill.icon}
              name={skill.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

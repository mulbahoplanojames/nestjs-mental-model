"use client";
import Image from "next/image";
import { useState, useRef } from "react";

const tabs = [
  "All",
  "Website Design",
  "App Mobile Design",
  "App Desktop",
  "Landing Page Design",
  "Branding",
];

const projects = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: "Name Project",
  category: [
    "Website Design",
    "App Mobile Design",
    "App Desktop",
    "Landing Page Design",
    "Branding",
  ][i % 5],
  image: `/portfolio-${i + 1}.jpg`,
}));

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  const handleTabChange = (tab: string) => {
    setActive(tab);
    setCarouselIndex(0);
  };

  const prevSlide = () =>
    setCarouselIndex((i) => (i === 0 ? filtered.length - 1 : i - 1));

  const nextSlide = () =>
    setCarouselIndex((i) => (i === filtered.length - 1 ? 0 : i + 1));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    const dy = Math.abs(touchStartY.current - e.changedTouches[0].clientY);
    // Only swipe horizontally if horizontal movement dominates
    if (Math.abs(dx) > 40 && Math.abs(dx) > dy) {
      dx > 0 ? nextSlide() : prevSlide();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
    <div className="group relative bg-[#141414] rounded-xl overflow-hidden border border-white/5 hover:border-[#ff6b35]/30 transition-all h-full">
      {/* Image */}
      <div className="aspect-video bg-[#1e1e1e] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            const parent = e.currentTarget.parentElement;
            if (parent) {
              parent.style.background =
                "linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 50%, #1a1a1a 100%)";
            }
          }}
          width={400}
          height={300}
        />
      </div>
      {/* Info */}
      <div className="p-4 flex justify-between items-center">
        <p className="text-white text-sm font-semibold">{project.title}</p>
        <span className="text-[#ff6b35] text-xs px-2 py-1 rounded">
          {project.category}
        </span>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="bg-[#0a0a0a] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-black mb-3">
            Portfolio
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-5 py-3 rounded-xl text-sm font-semibold transition-colors ${
                active === tab
                  ? "bg-[#ff6b35] text-white"
                  : "bg-[#1a1a1a] text-gray-300 hover:text-white border border-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Grid — lg and above ── */}
        <div className="hidden lg:grid grid-cols-3 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* ── Carousel — below lg ── */}
        <div className="lg:hidden">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-500 py-12">
              No projects found.
            </p>
          ) : (
            <>
              {/*
                Peek carousel:
                - outer div clips overflow
                - inner track slides via transform
                - each card is ~80vw wide so ~1.2 cards are visible, hinting at neighbours
              */}
              <div
                className="overflow-hidden -mx-4 px-4"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="flex gap-4 transition-transform duration-300 ease-out"
                  style={{
                    transform: `translateX(calc(${carouselIndex * -1} * (80vw + 16px)))`,
                  }}
                >
                  {filtered.map((project) => (
                    <div
                      key={project.id}
                      className="flex-shrink-0"
                      style={{ width: "80vw" }}
                    >
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Dot indicators — no prev/next buttons, matches screenshot */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {filtered.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCarouselIndex(i)}
                    aria-label={`Go to project ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === carouselIndex
                        ? "w-6 h-2 bg-[#ff6b35]"
                        : "w-2 h-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

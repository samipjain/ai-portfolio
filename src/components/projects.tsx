"use client";

import { useState, useMemo } from "react";
import { portfolioData } from "@/data/portfolio";
import { ProjectCard } from "./project-card";

export function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState<"all" | "work" | "personal" | "founder">("personal");

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.kind === filter);
  }, [filter, projects]);

  const counts = {
    all: projects.length,
    work: projects.filter((p) => p.kind === "work").length,
    personal: projects.filter((p) => p.kind === "personal").length,
    founder: projects.filter((p) => p.kind === "founder").length,
  };

  return (
    <section id="work" className="projects">
      <div className="container">
        <header className="sh">
          <span
            className="eyebrow"
            style={{ fontSize: "16px", padding: 0, margin: "0 0 30px" }}
          >
            02 · Recent Projects
          </span>
        </header>

        <div className="projects__filter glass">
        <button
            className={`chip ${filter === "personal" ? "chip--on" : ""}`}
            onClick={() => setFilter("personal")}
          >
            <span className="chip__dot chip__dot--personal" /> Builder
            <span className="chip__count">{counts.personal}</span>
          </button>
          <button
            className={`chip ${filter === "founder" ? "chip--on" : ""}`}
            onClick={() => setFilter("founder")}
          >
            <span className="chip__dot chip__dot--founder" /> Founder Mode
            <span className="chip__count">{counts.founder}</span>
          </button>
          <button
            className={`chip ${filter === "work" ? "chip--on" : ""}`}
            onClick={() => setFilter("work")}
          >
            <span className="chip__dot chip__dot--work" /> Work
            <span className="chip__count">{counts.work}</span>
          </button>
          <button
            className={`chip ${filter === "all" ? "chip--on" : ""}`}
            onClick={() => setFilter("all")}
          >
            All <span className="chip__count">{counts.all}</span>
          </button>
        </div>

        <div className="projects__grid">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import type { Project } from "@/types/portfolio";
import { ProjectVisual } from "./project-visual";

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50, on: false });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    setPos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
      on: true,
    });
  };

  return (
    <Link
      href={`/project/${project.slug}`}
      className={`card glass card--${project.kind}`}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setPos((p) => ({ ...p, on: false }))}
      style={
        {
          "--mx": `${pos.x}%`,
          "--my": `${pos.y}%`,
          "--on": pos.on ? 1 : 0,
        } as React.CSSProperties
      }
    >
      <div className="card__glow" />
      <div className="card__thumb">
        <ProjectVisual project={project} />
      </div>
      <div className="card__body">
        <div className="card__meta">
          <span className={`card__kind card__kind--${project.kind}`}>
            <span className="card__kind-dot" />
            {project.kind === "personal" ? "Founder" : "Work"}
          </span>
          <span className="mono">{project.year}</span>
        </div>
        <h3 className="card__title">{project.title}</h3>
        <p className="card__summary">{project.summary}</p>
        <div className="card__tags">
          {project.tags.map((t) => (
            <span className="card__tag mono" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="card__arrow" aria-hidden="true">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M7 17L17 7M17 7H8M17 7v9" />
        </svg>
      </div>
    </Link>
  );
}

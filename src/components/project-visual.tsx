import type { Project } from "@/types/portfolio";

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++)
    h = (h * 31 + slug.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function ProjectVisual({ project }: { project: Project }) {
  const seed = hashSlug(project.slug);
  const variants = ["grid", "orbit", "stack", "wave"] as const;
  const variant = variants[seed % variants.length];
  const hue = project.kind === "personal" ? 55 + (seed % 40) : 240 + (seed % 60);
  // Normalise to [0, 2π] to avoid floating-point divergence between SSR and browser
  const angle = (seed % 62832) / 10000;

  return (
    <div
      className={`visual visual--${variant}`}
      style={{ "--h": hue, "--seed": seed % 100 } as React.CSSProperties}
    >
      <div className="visual__aura" />

      {variant === "grid" && (
        <div className="visual__grid">
          {Array.from({ length: 36 }).map((_, i) => (
            <span
              key={i}
              style={{
                opacity: 0.1 + (((seed + i * 13) % 100) / 100) * 0.7,
              }}
            />
          ))}
        </div>
      )}

      {variant === "orbit" && (
        <svg viewBox="0 0 200 120" className="visual__svg">
          <circle
            cx="100"
            cy="60"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.4"
          />
          <circle
            cx="100"
            cy="60"
            r="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.6"
          />
          <circle cx="100" cy="60" r="8" fill="currentColor" />
          <circle
            cx={100 + 26 * Math.cos(angle)}
            cy={60 + 26 * Math.sin(angle)}
            r="3"
            fill="currentColor"
          />
          <circle
            cx={100 + 40 * Math.cos(angle + 2)}
            cy={60 + 40 * Math.sin(angle + 2)}
            r="2"
            fill="currentColor"
            opacity="0.7"
          />
        </svg>
      )}

      {variant === "stack" && (
        <div className="visual__stack">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              style={{
                transform: `translate(${i * 6}px, ${i * 6}px)`,
                opacity: 1 - i * 0.18,
              }}
            />
          ))}
        </div>
      )}

      {variant === "wave" && (
        <svg
          viewBox="0 0 200 120"
          className="visual__svg"
          preserveAspectRatio="none"
        >
          {Array.from({ length: 6 }).map((_, i) => {
            const y = 20 + i * 14;
            const phase = (seed + i * 7) % 30;
            return (
              <path
                key={i}
                d={`M0 ${y} Q 50 ${y - 10 - phase} 100 ${y} T 200 ${y}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
                opacity={0.25 + i * 0.08}
              />
            );
          })}
        </svg>
      )}

      <div className="visual__label mono">{project.slug}</div>
    </div>
  );
}

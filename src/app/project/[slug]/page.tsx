import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolio";
import { ProjectVisual } from "@/components/project-visual";

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++)
    h = (h * 31 + slug.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function generateStaticParams() {
  return portfolioData.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — Samip Jain`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const seed = hashSlug(project.slug);
  const hue =
    project.kind === "personal" ? 55 + (seed % 40) : 240 + (seed % 60);

  const related = portfolioData.projects
    .filter((p) => p.slug !== project.slug && p.kind === project.kind)
    .slice(0, 3);

  return (
    <>
      {/* Project header */}
      <section className="ph">
        <div className="container">
          <Link href="/#work" className="ph__back mono">
            &larr; All projects
          </Link>

          <div className="ph__meta">
            <span className={`card__kind card__kind--${project.kind}`}>
              <span className="card__kind-dot" />
              {project.kind === "personal" ? "Personal · AI" : "Work"}
            </span>
            <span className="mono">{project.year}</span>
            <span className="mono">{project.tags.join(" · ")}</span>
          </div>

          <h1 className="ph__title">{project.title}</h1>
          <p className="ph__summary">{project.summary}</p>

          <div
            className="ph__hero glass"
            style={{ "--h": hue } as React.CSSProperties}
          >
            <div className="ph__hero-inner">
              <div className="ph__hero-art">
                <div className="ph__aura-a" />
                <div className="ph__aura-b" />
                <div className="ph__placeholder mono">
                  <span>Project imagery</span>
                  <span>{project.slug}.jpg</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project content */}
      <section className="pc">
        <div className="container pc__grid">
          <aside className="pc__side">
            <div className="pc__fact">
              <div className="mono">Role</div>
              <div className="pc__fact-v">{project.role}</div>
            </div>
            <div className="pc__fact">
              <div className="mono">Year</div>
              <div className="pc__fact-v">{project.year}</div>
            </div>
            <div className="pc__fact">
              <div className="mono">Stack</div>
              <div className="pc__stack">
                {project.stack.map((s) => (
                  <span key={s} className="pc__chip mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="pc__fact">
              <div className="mono">Type</div>
              <div className="pc__fact-v">
                {project.kind === "personal"
                  ? "Personal · Vibe-coded"
                  : "Enterprise · Work"}
              </div>
            </div>
          </aside>

          <div className="pc__body">
            <div className="eyebrow">Overview</div>
            <p className="pc__lede">{project.description}</p>

            <div className="eyebrow">The work</div>
            <p className="pc__body-p">
              {project.kind === "personal"
                ? "Built quickly to test a hypothesis. The goal was to get from idea to something I could actually use inside of a weekend — letting the AI do the heavy lifting on boilerplate while I focused on the shape of the experience."
                : "Partnered closely with product, engineering, and the customer's technical teams. The work spanned discovery, solution design, integration planning, and the quieter details — auth, error handling, rollout — that decide whether an enterprise integration actually succeeds."}
            </p>

            <div className="eyebrow">What I learned</div>
            <p className="pc__body-p">
              {project.kind === "personal"
                ? "A surprising amount of what used to take a month can now happen in a few evenings — as long as you have strong taste and know when to throw work away. The bottleneck has moved from implementation to judgment."
                : "Enterprise integrations are rarely bottlenecked on technology. They're bottlenecked on clarity — shared vocabulary between teams, clean decision logs, and a willingness to say no to scope that doesn't serve the partnership."}
            </p>

            <div className="pc__gallery">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="pc__shot glass"
                  style={{ "--h": hue } as React.CSSProperties}
                >
                  <div className="pc__shot-art">
                    <span className="mono">Screen 0{i + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="pr">
          <div className="container">
            <header className="sh">
              <span className="eyebrow">Related work</span>
            </header>
            <div className="projects__grid">
              {related.map((p) => {
                const rSeed = hashSlug(p.slug);
                const rHue =
                  p.kind === "personal"
                    ? 55 + (rSeed % 40)
                    : 240 + (rSeed % 60);
                return (
                  <Link
                    key={p.slug}
                    href={`/project/${p.slug}`}
                    className={`card glass card--${p.kind}`}
                  >
                    <div className="card__thumb">
                      <div
                        className="visual visual--stack"
                        style={{ "--h": rHue } as React.CSSProperties}
                      >
                        <div className="visual__aura" />
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
                      </div>
                    </div>
                    <div className="card__body">
                      <div className="card__meta">
                        <span
                          className={`card__kind card__kind--${p.kind}`}
                        >
                          <span className="card__kind-dot" />
                          {p.kind === "personal"
                            ? "Personal · AI"
                            : "Work"}
                        </span>
                        <span className="mono">{p.year}</span>
                      </div>
                      <h3 className="card__title">{p.title}</h3>
                      <p className="card__summary">{p.summary}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

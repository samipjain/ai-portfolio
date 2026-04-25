import { portfolioData } from "@/data/portfolio";

export function Talks() {
  const { talks } = portfolioData;

  return (
    <section id="talks" className="talks">
      <div className="container">
      <header className="sh">
          <span
            className="eyebrow"
            style={{ fontSize: "16px", padding: 0, margin: "0 0 30px" }}
          >
            04 · Talks
          </span>
        </header>
        <ul className="press__list glass">
          {talks.map((t, i) => (
            <li key={i}>
              <a href={t.url} className="press__row">
                <span className="press__outlet mono">{t.venue}</span>
                <span className="press__title">{t.title}</span>
                <span className="press__year mono">{t.year} · {t.location}</span>
                <span className="press__arrow">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M7 17L17 7M17 7H8M17 7v9" />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

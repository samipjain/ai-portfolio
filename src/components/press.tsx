import { portfolioData } from "@/data/portfolio";

export function Press() {
  const { press } = portfolioData;

  return (
    <section id="press" className="press">
      <div className="container">
        <header className="sh">
          <span
            className="eyebrow"
            style={{ fontSize: "16px", padding: 0, margin: "0 0 30px" }}
          >
            03 · Press
          </span>
        </header>
        <ul className="press__list glass">
          {press.map((p, i) => (
            <li key={i}>
              <a href={p.url} className="press__row">
                <span className="press__outlet mono">{p.outlet}</span>
                <span className="press__title">{p.title}</span>
                <span className="press__year mono">{p.year}</span>
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

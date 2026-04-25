import { Socials } from "./socials";

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <header className="sh">
          <span
            className="eyebrow"
            style={{ fontSize: "16px", padding: 0, margin: "0 0 30px" }}
          >
            05 · Contact
          </span>
        </header>
        <div className="press__list glass footer__inner">
          <div className="footer__left">
            <Socials />
          </div>
          <div className="footer__meta mono">
            <div>Samip Jain · &copy; {new Date().getFullYear()}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

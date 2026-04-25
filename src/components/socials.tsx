export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/samipjain",
    svg: (
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/samipjain",
    svg: (
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/samipjain",
    svg: (
      <path d="M18.244 3h3.308l-7.227 8.26L22.5 21h-6.67l-5.23-6.828L4.6 21H1.29l7.73-8.835L1.5 3h6.84l4.72 6.24L18.244 3zm-1.16 16.05h1.833L7.01 4.857H5.043L17.083 19.05z" />
    ),
  },
];

export function Socials() {
  return (
    <div className="socials">
      {socialLinks.map((l) => (
        <a
          key={l.name}
          href={l.href}
          className="btn btn--primary socials__btn socials__btn--icon"
          aria-label={l.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            {l.svg}
          </svg>
        </a>
      ))}
    </div>
  );
}

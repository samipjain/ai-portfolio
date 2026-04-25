"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { socialLinks } from "@/components/socials";

const BIO_KEYS = [
  "3-time Founder", "Solutions Lead", "Builder", "MIT", "AI",
  "enterprise strategy", "payments", "last-mile delivery", "mentored a team"
];
const BIO_VALUES = [
  "Rectangle Health", "Apple", "Oracle", "Shopify", "Adyen", "Uber",
  "30+ pre-sales engagements", "1 to 8",
];

function highlightBio(text: string) {
  const all = [...BIO_KEYS, ...BIO_VALUES].sort((a, b) => b.length - a.length);
  const pattern = new RegExp(
    `(${all.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g"
  );
  return text.split(pattern).map((part, i) => {
    if (BIO_KEYS.includes(part)) return <span key={i} className="bio-key">{part}</span>;
    if (BIO_VALUES.includes(part)) return <span key={i} className="bio-value">{part}</span>;
    return part;
  });
}

function TypedWords({
  text,
  msPerWord = 60,
  startDelayMs = 90,
}: {
  text: string;
  msPerWord?: number;
  startDelayMs?: number;
}) {
  const [count, setCount] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;

    const update = () => setReduceMotion(Boolean(mq.matches));
    update();

    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    setCount(0);
    const startTimer = window.setTimeout(() => {
      let i = 0;
      const interval = window.setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) window.clearInterval(interval);
      }, msPerWord);
    }, startDelayMs);

    return () => window.clearTimeout(startTimer);
  }, [reduceMotion, msPerWord, startDelayMs, text]);

  if (reduceMotion) return <>{text}</>;

  const shown = text.slice(0, count);
  return <>{shown}</>;
}

export function Hero() {
  const { person } = portfolioData;
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const px = (mouse.x - 0.5) * 20;
  const py = (mouse.y - 0.5) * 20;

  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-image" />
        <div
          className="hero__bg-grid"
          style={{ transform: `translate(${px}px, ${py}px)` }}
        />
        <div className="hero__bg-vignette" />
      </div>

      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__header">
            <div className="hero__media">
              <div className="hero__avatar glass">
                <Image
                  src="images/samip_profile.jpg"
                  alt={`${person.name} profile photo`}
                  width={420}
                  height={520}
                  priority
                />
              </div>
            </div>
            <div className="hero__nameplate">
              <h1 className="hero__title">
                <span className="hero__line">
                  <TypedWords text={`${person.name}.`} />
                </span>
              </h1>
            </div>
          </div>

          <div className="hero__terminal">
            <div className="hero__terminal-bar">
              <span className="hero__terminal-dot" />
              <span className="hero__terminal-dot" />
              <span className="hero__terminal-dot" />
              <span className="hero__terminal-label">bio.md</span>
            </div>
            <div className="hero__terminal-body">
              {person.bio.map((para, i) => (
                <p key={i} className="hero__lede">{highlightBio(para)}</p>
              ))}
            </div>
          </div>

          <div className="hero__cta">
            <a href="#work" className="btn btn--primary">
              See recent work
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M12 5v14M5 13l7 7 7-7" />
              </svg>
            </a>
            <div className="hero__cta-social">
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
          </div>
        </div>
      </div>
    </section>
  );
}

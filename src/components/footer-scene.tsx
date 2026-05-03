"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/* ── Piano ── */

const PIANO_KEYS = [
  { note: "C4", freq: 261.63, key: "a", label: "A" },
  { note: "D4", freq: 293.66, key: "s", label: "S" },
  { note: "E4", freq: 329.63, key: "d", label: "D" },
  { note: "F4", freq: 349.23, key: "f", label: "F" },
  { note: "G4", freq: 392.0,  key: "g", label: "G" },
  { note: "A4", freq: 440.0,  key: "h", label: "H" },
  { note: "B4", freq: 493.88, key: "j", label: "J" },
  { note: "C5", freq: 523.25, key: "k", label: "K" },
  { note: "D5", freq: 587.33, key: "l", label: "L" },
  { note: "E5", freq: 659.25, key: ";", label: ";" },
];

const BLACK_KEYS = [
  { note: "C#4", freq: 277.18, key: "w", label: "W", after: 0 },
  { note: "D#4", freq: 311.13, key: "e", label: "E", after: 1 },
  { note: "F#4", freq: 369.99, key: "t", label: "T", after: 3 },
  { note: "G#4", freq: 415.3,  key: "y", label: "Y", after: 4 },
  { note: "A#4", freq: 466.16, key: "u", label: "U", after: 5 },
  { note: "C#5", freq: 554.37, key: "o", label: "O", after: 7 },
  { note: "D#5", freq: 622.25, key: "p", label: "P", after: 8 },
];

function PianoFooter() {
  const ctxRef = useRef<AudioContext | null>(null);
  const [active, setActive] = useState<Record<string, boolean>>({});
  const [ripples, setRipples] = useState<{ id: number; note: string }[]>([]);

  const ensureCtx = () => {
    if (!ctxRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ctxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return ctxRef.current;
  };

  const playNote = useCallback((note: string, freq: number) => {
    const ctx = ensureCtx();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.22, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.12, now + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 1);

    setActive((a) => ({ ...a, [note]: true }));
    setTimeout(() => setActive((a) => ({ ...a, [note]: false })), 220);

    const id = Date.now() + Math.random();
    setRipples((r) => [...r, { id, note }]);
    setTimeout(() => setRipples((r) => r.filter((x) => x.id !== id)), 1000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onDown = (e: KeyboardEvent) => {
      if (e.repeat) return;
      const k = e.key.toLowerCase();
      const found = [...PIANO_KEYS, ...BLACK_KEYS].find((x) => x.key === k);
      if (found) { e.preventDefault(); playNote(found.note, found.freq); }
    };
    window.addEventListener("keydown", onDown);
    return () => window.removeEventListener("keydown", onDown);
  }, [playNote]);

  return (
    <div className="piano">
      <div className="piano__hint mono">Click a key or press A S D F G H J K L ;</div>
      <div className="piano__keyboard">
        <div className="piano__white-row">
          {PIANO_KEYS.map((k) => (
            <button
              key={k.note}
              className={`piano__white${active[k.note] ? " piano__white--on" : ""}`}
              onClick={() => playNote(k.note, k.freq)}
              aria-label={k.note}
            >
              <span className="piano__label mono">{k.label}</span>
              {ripples.filter((r) => r.note === k.note).map((r) => (
                <span key={r.id} className="piano__ripple" />
              ))}
            </button>
          ))}
        </div>
        <div className="piano__black-row">
          {BLACK_KEYS.map((k) => (
            <button
              key={k.note}
              className={`piano__black${active[k.note] ? " piano__black--on" : ""}`}
              style={{ left: `calc(${(k.after + 1) * 10}% - 18px)` }}
              onClick={() => playNote(k.note, k.freq)}
              aria-label={k.note}
            >
              <span className="piano__label mono">{k.label}</span>
              {ripples.filter((r) => r.note === k.note).map((r) => (
                <span key={r.id} className="piano__ripple piano__ripple--black" />
              ))}
            </button>
          ))}
        </div>
      </div>
      <div className="piano__caption mono">
        {Object.values(active).some(Boolean) ? "♪ playing" : "tap to play"}
      </div>
    </div>
  );
}

/* ── Tower of Hanoi ── */

const HANOI_DISKS = 4;

function makeInitial(n: number): number[][] {
  return [Array.from({ length: n }, (_, i) => n - i), [], []];
}

function HanoiFooter({ onSolve }: { onSolve: () => void }) {
  const [pegs, setPegs] = useState<number[][]>(() => makeInitial(HANOI_DISKS));
  const [selected, setSelected] = useState<number | null>(null);
  const [moves, setMoves] = useState(0);
  const [best, setBest] = useState<number | null>(null);
  const [won, setWon] = useState(false);
  const minMoves = (1 << HANOI_DISKS) - 1;

  useEffect(() => {
    const v = parseInt(localStorage.getItem("sj_hanoi_best") ?? "", 10);
    if (Number.isFinite(v)) setBest(v);
  }, []);

  useEffect(() => {
    if (won) return;
    const full = pegs.findIndex((p, i) => i !== 0 && p.length === HANOI_DISKS);
    if (full === -1) return;
    setWon(true);
    const isBest = best == null || moves < best;
    if (isBest) {
      setBest(moves);
      localStorage.setItem("sj_hanoi_best", String(moves));
    }
    setTimeout(onSolve, 1200);
  }, [pegs, moves, best, won, onSolve]);

  const reset = () => {
    setPegs(makeInitial(HANOI_DISKS));
    setSelected(null);
    setMoves(0);
    setWon(false);
  };

  const tapPeg = (i: number) => {
    if (won) return;
    if (selected == null) {
      if (pegs[i].length === 0) return;
      setSelected(i);
      return;
    }
    if (selected === i) { setSelected(null); return; }
    const fromTop = pegs[selected][pegs[selected].length - 1];
    const toTop = pegs[i][pegs[i].length - 1];
    if (toTop != null && fromTop > toTop) { setSelected(null); return; }
    const next = pegs.map((p) => p.slice());
    next[i].push(next[selected].pop()!);
    setPegs(next);
    setMoves((m) => m + 1);
    setSelected(null);
  };

  const colorFor = (size: number) => {
    const hues = [255, 200, 160, 50];
    return `oklch(0.6 0.14 ${hues[(size - 1) % hues.length]})`;
  };

  return (
    <div className="hanoi">
      <div className="hanoi__hint mono">
        Move all disks to the right peg · only smaller on larger
      </div>
      <div className="hanoi__board">
        {pegs.map((peg, i) => (
          <button
            key={i}
            className={`hanoi__peg${selected === i ? " hanoi__peg--sel" : ""}`}
            onClick={() => tapPeg(i)}
          >
            <div className="hanoi__rod" />
            <div className="hanoi__base" />
            <div className="hanoi__disks">
              {peg.map((size, di) => (
                <div
                  key={di}
                  className="hanoi__disk"
                  style={{ width: `${30 + size * 14}px`, background: colorFor(size) }}
                />
              ))}
            </div>
          </button>
        ))}
      </div>
      <div className="hanoi__stats mono">
        <span>Moves · {moves}</span>
        <span>Min · {minMoves}</span>
        <span>Best · {best ?? "—"}</span>
        <button className="hanoi__reset" onClick={reset}>
          {won ? "Solved! Play again ↻" : "Reset ↻"}
        </button>
      </div>
    </div>
  );
}

/* ── Scene wrapper: hanoi first, piano on solve ── */

export function FooterScene() {
  const [mode, setMode] = useState<"hanoi" | "piano">("hanoi");
  return (
    <div key={mode} className="footer-scene">
      {mode === "hanoi"
        ? <HanoiFooter onSolve={() => setMode("piano")} />
        : <PianoFooter />
      }
    </div>
  );
}

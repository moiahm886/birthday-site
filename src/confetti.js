import confetti from "canvas-confetti";

const BLUE  = ["#ffffff", "#B8D8FF", "#6BA3F0", "#4080DC"];
const PARTY = ["#FFD166", "#FF6B9D", "#B983FF", "#6BA3F0", "#4DD9C1", "#ffffff"];
const ALL   = ["#4A8FE0","#9170E0","#38B8C4","#D4527A","#3AAF8A","#C49445","#6B8FEE"];
const BASE  = { disableForReducedMotion: true };

// Continuous gentle rain — returns cleanup fn
export function startRain(colors = BLUE) {
  let timer;
  const drop = () => {
    confetti({
      ...BASE,
      particleCount: 1,
      angle: 90,
      spread: 130,
      origin: { x: Math.random(), y: 0 },
      colors,
      gravity: 0.4,
      scalar: 0.6,
      drift: (Math.random() - 0.5) * 0.6,
      ticks: 230,
    });
    timer = setTimeout(drop, 190);
  };
  drop();
  return () => clearTimeout(timer);
}

// One-shot celebratory burst — landing page arrival
export function birthdayBurst() {
  confetti({ ...BASE, particleCount: 60, spread: 100, origin: { y: 0.35 }, colors: PARTY, scalar: 0.9, startVelocity: 42 });
  setTimeout(() => {
    confetti({ ...BASE, particleCount: 3, angle: 60,  spread: 60, origin: { x: 0, y: 0.6 }, colors: PARTY, scalar: 0.85 });
    confetti({ ...BASE, particleCount: 3, angle: 120, spread: 60, origin: { x: 1, y: 0.6 }, colors: PARTY, scalar: 0.85 });
  }, 180);
}

export { PARTY };

// One-shot burst — awards
export function awardsBurst() {
  confetti({ ...BASE, particleCount: 100, spread: 90, origin: { y: 0.5 }, colors: ALL, scalar: 0.85 });
}

// Bilateral fireworks — perfect quiz score
export function fireworks() {
  const end = Date.now() + 2800;
  const frame = () => {
    confetti({ ...BASE, particleCount: 3, angle: 60,  spread: 55, origin: { x: 0 }, colors: ALL });
    confetti({ ...BASE, particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: ALL });
    if (Date.now() < end) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

// Simple burst — any quiz completion
export function quizBurst() {
  confetti({ ...BASE, particleCount: 70, spread: 80, origin: { y: 0.65 }, colors: BLUE, scalar: 0.8 });
}

// ─────────────────────────────────────────────────────────────
//  EVERYTHING YOU EDIT LIVES IN THIS FILE.
//  Photos go in  public/photos/  → referenced as "/photos/name.webp"
//  Audio goes in public/audio/   → referenced as "/audio/name.m4a"
//  Any photo left as null just renders as text. That's fine.
// ─────────────────────────────────────────────────────────────

export const her = {
  name: "Random\nGril",
  date: "02 . 10 . 2026",
  introLine: "Something was built for you.\nIt takes about four minutes.",
  introPhoto: "/photos/Intro.jpeg", // e.g. "/photos/intro.webp"
  // International format, no + and no spaces.
  whatsappNumber: "923001234567",
  whatsappMessage: "okay I saw the whole thing",
};

// ── 1. Diagnostics ────────────────────────────────────────────
// delay = ms to wait BEFORE this line appears.
export const diagnostics = {
  command: "> running random gril diagnostics...",
  lines: [
    { label: "personality",           value: "excellent",     delay: 1500 },
    { label: "words per breath",      value: "847",           delay: 1500 },
    { label: '"stupiddd" usage',      value: "1,847",         delay: 1500 },
    { label: "lip movement",          value: "involuntary",   delay: 1500 },
    { label: "similarity to moiz",    value: "94%",           delay: 1500 },
    { label: "similarity to moiz",    value: "investigating", delay: 2500, warn: true },
    { label: "arguments detected",    value: "0 / 365d",      delay: 1500 },
    { label: "spanish latte",         value: "critical",      delay: 1500 },
    { label: "voice note reception",  value: "10/10",         delay: 1500 },
    { label: "main character energy", value: "detected",      delay: 1500 },
    { label: "birthday eligibility",  value: "CONFIRMED",     delay: 1500 },
  ],
  scoreDelay: 1500,
  score: "overall system health: 98.7%",
  footnote: { label: "remaining 1.3%", value: "lene ke dene parjayeinge (Yk what I mean 😉)" },
};

// ── 2. The Archive ────────────────────────────────────────────
export const archive = [
  {
    date: "JUL 2025",
    title: "The Beginning",
    body: "We started talking. No idea then that it would turn into this.",
    photo: "/photos/Beginning.jpeg",
  },
  {
    date: "FIRST VOICE NOTE",
    title: "Ae Jazba-e-Dil",
    body: "Nayyara Noor. The first song I ever sang for you. Somehow not the last.",
    photo: "/photos/Song.jpeg",
  },
  {
    date: "× 4",
    title: "Tim Hortons",
    body: "One visit to Pakistan, four trips to Tim Hortons, four Spanish lattes. We didn't even discuss it. It just became the thing.",
    photo: "/photos/Tim Horton.jpeg",
  },
  {
    date: "EVERY TIME",
    title: "The Walks",
    body: "Where the silence was somehow louder than the talking.",
    photo: "/photos/Walk.jpeg",
  },
  {
    date: "26 JAN 2026",
    title: "The Night We Met",
    body: "You had quizzes, so we studied through the entire night at my place. Ordinary on paper. Not ordinary at all.",
    photo: "/photos/Night.jpeg",
  },
  {
    date: "YOUR BIRTHDAY GIFT TO ME",
    title: "A message and a playlist",
    body: "Songs that reminded you of me. This entire website exists because of that.",
    photo: "/photos/Spotify.jpeg",
  },
  {
    date: "02 OCT 2026",
    title: "You're reading this",
    body: "Happiest Birthday Grillll",
    photo: null, // keep this one bare
  },
];

// ── 3. Your Soundtrack ────────────────────────────────────────
export const songs = [
  { title: "CO2", why: "This one is yours. From the playlist you made me, and now it's on mine." },
  { title: "Sailor Song", why: "Also yours. You have good taste, which I assume you got from me." },
  { title: "The Night We Met", why: "26 January 2026. An entire night of studying and talking. Still the best one." },
  { title: "Bawra Mann", why: "I'm the bawra mann. You're the person the bawra mann needed." },
  { title: "Tu Hi Haqeeqat", why: "I sang this one to you. You said you loved it. I've been unbearable about it ever since." },
  { title: "Channa Mereya", why: "\"Mehfil mein teri hum na rahe\" is the line I sang on repeat as a teenager, years before I met you. Feels different now that it's about someone." },
  { title: "Iris", why: "Not my pick. Yours. You love this one, so it's here, and now I can't hear it without thinking of you." },
];

// Optional: a real playlist she can save.
export const playlistUrl = ""; // e.g. "https://open.spotify.com/playlist/..."

// Leave src as null until you've recorded it and the card hides itself.
export const myTrack = {
  title: "One more, sung by me",
  why: "Recorded for you. Only here.",
  src: null, // e.g. "/audio/song.m4a"
};

// ── 4. Annual Awards ──────────────────────────────────────────
export const awards = [
  { title: "Lifetime Achievement in Talking Without Breathing", citation: "record: 4m 12s, no witnesses survived" },
  { title: "The Synchronised Living Award", citation: "0% copying · 100% suspicious" },
  { title: 'Excellence in the Use of the Word "Stupiddd"', citation: "1,847 uses · 100% accuracy" },
  { title: "Involuntary Lip Movement of the Year", citation: "ongoing · subject unaware" },
  { title: "Diplomatic Excellence", citation: "365 days · 0 arguments" },
  { title: "Random Gril of the Year", citation: "uncontested · twelve months running" },
  { title: "Best Cousin, Best Friend", citation: "no competition entered" },
];

// ── 5. The Quiz ───────────────────────────────────────────────
export const quiz = [
  {
    q: "What do I order at Tim Hortons, every single time?",
    options: ["Black coffee", "Spanish latte", "Whatever you're having", "I don't drink coffee"],
    answer: 1,
  },
  {
    q: "What was the first song I ever sang for you?",
    options: ["Channa Mereya", "Tu Hi Haqeeqat", "Ae Jazba-e-Dil", "Bawra Mann"],
    answer: 2,
  },
  {
    q: "What date was the all nighter?",
    options: ["26 January", "2 October", "14 February", "I was asleep"],
    answer: 0,
  },
  {
    q: "How many arguments have we had?",
    options: ["Zero", "One, and you started it", "Too many to count", "Define argument"],
    answer: 0,
  },
  {
    q: "What do you call me approximately 1,847 times a year?",
    options: ["Moiz", "Bhai", "Stupiddd", "Genius"],
    answer: 2,
  },
];

// Checked from the bottom up, so highest min that fits wins.
export const quizResults = [
  { min: 0, title: "Suspicious", body: "You got almost none of these. We need to talk." },
  { min: 3, title: "Acceptable", body: "Passable. Not great. We'll work on it." },
  { min: 5, title: "Certified CopyCat 🐈", body: "Perfect score. Obviously. 94% similarity confirmed." },
];

// ── 6. The last one ───────────────────────────────────────────
export const sincere = {
  paragraphs: [
    "Your first paragraph goes here.",
    "Your second paragraph goes here. Then stop.",
  ],
  signature: "— Moiz",
  photo: null, // optional, one photo only
  replyLabel: "Say something back",
  footer: "phir we never talked again (Dont worry wont happen with you)",
};

// ── Section order and nav labels ──────────────────────────────
export const sections = [
  { id: "intro",       label: "Intro" },
  { id: "diagnostics", label: "Diagnostics" },
  { id: "archive",     label: "The Archive" },
  { id: "soundtrack",  label: "Your Soundtrack" },
  { id: "awards",      label: "Annual Awards" },
  { id: "quiz",        label: "One quick test" },
  { id: "sincere",     label: "The last one" },
];
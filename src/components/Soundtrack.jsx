import { useState, useRef, useEffect } from "react";
import { songs, myTrack, playlistUrl } from "../content";
import Particles from "./Particles";

// 30-bar waveform shape
const BARS = [40,65,35,80,55,70,45,85,50,75,38,68,90,48,72,32,60,82,42,66,36,78,52,70,44,88,58,64,46,76];

const fmt = (s) => {
  if (!s || isNaN(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

export default function Soundtrack() {
  const [playing, setPlaying]         = useState(false);
  const [pct, setPct]                 = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration]       = useState(0);
  const audio = useRef(null);

  useEffect(() => {
    const a = audio.current;
    if (!a) return;
    const onTime = () => { setCurrentTime(a.currentTime); setPct(a.duration ? a.currentTime / a.duration : 0); };
    const onMeta = () => setDuration(a.duration);
    const onEnd  = () => { setPlaying(false); setPct(0); setCurrentTime(0); };
    a.addEventListener("timeupdate",     onTime);
    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("ended",          onEnd);
    return () => {
      a.removeEventListener("timeupdate",     onTime);
      a.removeEventListener("loadedmetadata", onMeta);
      a.removeEventListener("ended",          onEnd);
    };
  }, []);

  const toggle = async () => {
    const a = audio.current;
    if (!a) return;
    if (playing) { a.pause(); setPlaying(false); return; }
    try { await a.play(); setPlaying(true); }
    catch (err) { console.error("audio failed:", err); }
  };

  const seek = (e) => {
    const a = audio.current;
    if (!a || !a.duration) return;
    const val = parseFloat(e.target.value);
    a.currentTime = val * a.duration;
    setPct(val);
  };

  return (
    <>
      <Particles type="notes" count={10} />
      <div className="eyebrow">Section 03</div>
      <h2>Your Soundtrack</h2>

      {songs.map((s, n) => (
        <div className="song" key={n}>
          <div className="n">
            <span className="num">{String(n + 1).padStart(2, "0")}</span>
            <span className="ti">{s.title}</span>
          </div>
          <div className="why">{s.why}</div>
        </div>
      ))}

      {myTrack.src && (
        <div className="song mine">
          {/* Header */}
          <div className="mine-label">♪ recorded for you</div>
          <div className="mine-title">
            <span className="num">{String(songs.length + 1).padStart(2, "0")}</span>
            <span className="ti">{myTrack.title}</span>
          </div>
          <div className="why">{myTrack.why}</div>

          {/* Animated waveform */}
          <div className="waveform" aria-hidden="true">
            {BARS.map((h, n) => (
              <span
                key={n}
                className={`wv-bar${playing ? " playing" : ""}${n / BARS.length < pct ? " lit" : ""}`}
                style={{
                  height: `${h}%`,
                  animationDelay:    `${(n * 47) % 800}ms`,
                  animationDuration: `${550 + (n % 7) * 80}ms`,
                }}
              />
            ))}
          </div>

          {/* Seekable progress */}
          <div className="mine-seek">
            <div className="track-slider">
              <div className="track-rail" />
              <div className="track-fill" style={{ width: `${pct * 100}%` }} />
              <div className="track-thumb" style={{ left: `${pct * 100}%` }} />
              <input
                type="range" min="0" max="1" step="0.001"
                value={pct} onChange={seek}
                className="track-input" aria-label="Seek"
              />
            </div>
            <div className="track-times">
              <span>{fmt(currentTime)}</span>
              <span>{fmt(duration)}</span>
            </div>
          </div>

          {/* Large centered play button */}
          <div className="mine-controls">
            <button
              className={`play-lg${playing ? " is-playing" : ""}`}
              onClick={toggle}
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? "❚❚" : "▶"}
            </button>
          </div>

          <audio ref={audio} src={myTrack.src} preload="metadata" />
        </div>
      )}

      {playlistUrl && (
        <a className="playlist" href={playlistUrl} target="_blank" rel="noreferrer">
          save the playlist →
        </a>
      )}
    </>
  );
}

import { useState, useRef, useEffect } from "react";
import { songs, myTrack, playlistUrl } from "../content";

const fmt = (s) => {
  if (!s || isNaN(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

export default function Soundtrack() {
  const [playing, setPlaying]     = useState(false);
  const [pct, setPct]             = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration]   = useState(0);
  const audio = useRef(null);

  useEffect(() => {
    const a = audio.current;
    if (!a) return;
    const onTime = () => {
      setCurrentTime(a.currentTime);
      setPct(a.duration ? a.currentTime / a.duration : 0);
    };
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
          <div className="n">
            <span className="num">{String(songs.length + 1).padStart(2, "0")}</span>
            <span className="ti">{myTrack.title}</span>
          </div>
          <div className="why">{myTrack.why}</div>

          <div className="player">
            <button className="play-btn" onClick={toggle} aria-label={playing ? "Pause" : "Play"}>
              {playing ? "❚❚" : "▶"}
            </button>

            <div className="track">
              <div className="track-slider">
                <div className="track-rail" />
                <div className="track-fill" style={{ width: `${pct * 100}%` }} />
                <div className="track-thumb" style={{ left: `${pct * 100}%` }} />
                <input
                  type="range"
                  min="0" max="1" step="0.001"
                  value={pct}
                  onChange={seek}
                  className="track-input"
                  aria-label="Seek"
                />
              </div>
              <div className="track-times">
                <span>{fmt(currentTime)}</span>
                <span>{fmt(duration)}</span>
              </div>
            </div>
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

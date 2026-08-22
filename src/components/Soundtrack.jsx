import { useState, useRef, useEffect } from "react";
import { songs, myTrack, playlistUrl } from "../content";

const BARS = [30,62,44,88,52,74,36,66,96,48,70,34,58,80,42,64,28,54,76,40];

export default function Soundtrack() {
  const [playing, setPlaying] = useState(false);
  const [pct, setPct] = useState(0);
  const audio = useRef(null);

  useEffect(() => {
    const a = audio.current;
    if (!a) return;
    const onTime = () => setPct(a.duration ? a.currentTime / a.duration : 0);
    const onEnd = () => { setPlaying(false); setPct(0); };
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("ended", onEnd);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("ended", onEnd);
    };
  }, []);

   const toggle = async () => {
    const a = audio.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
      return;
    }
    try {
      await a.play();
      setPlaying(true);
    } catch (err) {
      console.error("audio failed:", err);
      setPlaying(false);
    }
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
            <button className="play" onClick={toggle} aria-label={playing ? "Pause" : "Play"}>
              {playing ? "❚❚" : "▶"}
            </button>
            <div className="wave">
              {BARS.map((h, n) => (
                <i key={n} className={n / BARS.length < pct ? "lit" : ""} style={{ height: `${h}%` }} />
              ))}
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
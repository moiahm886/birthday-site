import { useEffect } from "react";
import { her } from "../content";
import { startRain } from "../confetti";

export default function Intro() {
  const hasPhoto = Boolean(her.introPhoto);

  useEffect(() => startRain(), []);

  return (
    <div className={`intro${hasPhoto ? " has-photo" : ""}`} style={{ flex: 1 }}>
      {hasPhoto && <img className="bg" src={her.introPhoto} alt="" />}
      <div className="intro-body">
        <div className="name">{her.name}</div>
        <div className="date">{her.date}</div>
        <div className="sub">{her.introLine}</div>
      </div>
    </div>
  );
}

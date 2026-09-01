import { useEffect } from "react";
import { her } from "../content";
import { startRain, birthdayBurst, PARTY } from "../confetti";
import Particles from "./Particles";

export default function Intro() {
  const hasPhoto = Boolean(her.introPhoto);

  useEffect(() => {
    birthdayBurst();
    return startRain(PARTY);
  }, []);

  return (
    <div className={`intro${hasPhoto ? " has-photo" : ""}`} style={{ flex: 1 }}>
      {hasPhoto && <img className="bg" src={her.introPhoto} alt="" />}
      <Particles type="birthday" count={9} />
      <div className="intro-body">
        <div className="birthday-badge">🎉 Happy Birthday</div>
        <div className="name">{her.name}</div>
        <div className="date">{her.date}</div>
        <div className="sub">{her.introLine}</div>
      </div>
    </div>
  );
}

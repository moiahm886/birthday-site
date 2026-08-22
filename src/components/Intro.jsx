import { her } from "../content";

export default function Intro() {
  return (
    <div className="intro" style={{ flex: 1 }}>
      {her.introPhoto && <img className="bg" src={her.introPhoto} alt="" />}
      <div className="name">{her.name}</div>
      <div className="date">{her.date}</div>
      <div className="sub">{her.introLine}</div>
    </div>
  );
}
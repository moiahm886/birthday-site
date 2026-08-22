import { awards } from "../content";

export default function Awards() {
  return (
    <>
      <div className="eyebrow">Section 04</div>
      <h2>Annual Awards</h2>
      {awards.map((a, n) => (
        <div className="cert" key={n}>
          <div className="tr">🏆</div>
          <div className="tt">{a.title}</div>
          <div className="ct">{a.citation}</div>
        </div>
      ))}
    </>
  );
}
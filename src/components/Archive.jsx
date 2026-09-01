import { archive } from "../content";
import Particles from "./Particles";

export default function Archive() {
  return (
    <>
      <Particles type="bokeh" count={18} />
      <div className="eyebrow">Section 02</div>
      <h2>The Archive</h2>
      <div className="tl">
        {archive.map((e, n) => (
          <div className={`ev${e.highlight ? " ev-today" : ""}`} key={n}>
            {e.photo && <img src={e.photo} alt="" loading="lazy" />}
            <div className="d">{e.highlight ? "🎂 " : ""}{e.date}</div>
            <div className="t">{e.title}</div>
            {e.body && <div className="p">{e.body}</div>}
          </div>
        ))}
      </div>
    </>
  );
}

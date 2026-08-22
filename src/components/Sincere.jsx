import { her, sincere } from "../content";

export default function Sincere() {
  const link = `https://wa.me/${her.whatsappNumber}?text=${encodeURIComponent(her.whatsappMessage)}`;

  return (
    <>
      <div className="sinc" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {sincere.paragraphs.map((p, n) => <p key={n}>{p}</p>)}
        <div className="sig">{sincere.signature}</div>
        {sincere.photo && <img src={sincere.photo} alt="" loading="lazy" />}
      </div>

      <div style={{ paddingTop: 20 }}>
        <a className="reply" href={link} target="_blank" rel="noreferrer">
          {sincere.replyLabel}
        </a>
        <div className="foot">{sincere.footer}</div>
      </div>
    </>
  );
}
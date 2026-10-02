import { HALLS } from "../lib/data";

export default function Halls() {
  return (
    <section id="halls" className="container section">
      <div className="sec-head">
        <h2>Supported halls</h2>
        <p>Preorder from any of these mess halls.</p>
      </div>
      <div className="halls">
        {HALLS.map((h) => (
          <a key={h} href="#order" className="hall">{h}</a>
        ))}
      </div>
    </section>
  );
}

const steps = [
  { t: "Pick hall and date", d: "Choose your hall and any of the next 7 days from the dropdowns." },
  { t: "Add your specials", d: "Browse by meal, add what you like, and adjust quantities." },
  { t: "Pay with UPI, then collect", d: "Pay in your UPI app, then show your order number at the counter." },
];

const perks = [
  { e: "⏱️", t: "No waiting in line", d: "Your food is counted before service starts." },
  { e: "🍛", t: "Never miss a special", d: "Reserve popular items before they sell out." },
  { e: "🧾", t: "Quick UPI payment", d: "Your UPI app opens with the amount filled in." },
];

export default function Steps() {
  return (
    <section id="how" className="container section">
      <div className="sec-head">
        <h2>How it works</h2>
        <p>Three steps, under a minute.</p>
      </div>
      <ol className="steps">
        {steps.map((s, i) => (
          <li key={s.t}>
            <span className="num">{i + 1}</span>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </li>
        ))}
      </ol>
      <div className="perks">
        {perks.map((p) => (
          <div key={p.t} className="perk">
            <span aria-hidden>{p.e}</span>
            <div>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

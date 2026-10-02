const faqs = [
  { q: "How early do I need to preorder?", a: "Orders open for the next 7 days. Reserve at least a day ahead so the mess can plan quantities." },
  { q: "How do I pay?", a: "After you place an order, your phone opens a UPI app with the amount filled in. Approve the payment there." },
  { q: "Can I change or cancel an order?", a: "Not in this demo yet. In a full version you would be able to edit until the cutoff time." },
  { q: "Is there a limit per item?", a: "You can reserve up to 5 of each item per order." },
];

export default function Faq() {
  return (
    <section id="faq" className="container section">
      <div className="sec-head">
        <h2>Questions</h2>
      </div>
      <div className="faq">
        {faqs.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

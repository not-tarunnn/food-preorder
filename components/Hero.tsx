export default function Hero() {
  return (
    <section id="top" className="container hero">
      <div className="hero-copy">
        <h1>Skip the queue. Reserve your mess special.</h1>
        <p>
          Choose your hall, pick a day, and preorder biryani, thalis and desserts before they run out.
          Pay with UPI and collect from the counter when it&apos;s ready.
        </p>
        <div className="actions">
          <a className="btn primary-btn" href="#order">Start preorder</a>
          <a className="btn ghost" href="#how">See how it works</a>
        </div>
      </div>

      <div className="ticket" aria-hidden>
        <div className="ticket-top">
          <span>Hall 13</span>
          <span>Tomorrow</span>
        </div>
        <ul>
          <li><span>🍗 2 × Chicken Biryani</span><b>₹280</b></li>
          <li><span>🍮 2 × Gulab Jamun</span><b>₹60</b></li>
          <li><span>🥤 1 × Cold Coffee</span><b>₹50</b></li>
        </ul>
        <div className="ticket-total"><span>Pay with UPI</span><b>₹390</b></div>
        <div className="stamp">Reserved</div>
      </div>
    </section>
  );
}

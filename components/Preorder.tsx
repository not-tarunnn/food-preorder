"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { HALLS, ITEMS, MEALS, getDates, buildUpiLink, type Meal } from "../lib/data";

type Order = {
  id: string;
  hall: string;
  dateLabel: string;
  lines: { name: string; qty: number }[];
  total: number;
};

export default function Preorder() {
  const [dates, setDates] = useState<{ value: string; label: string }[]>([]);
  const [hall, setHall] = useState("");
  const [date, setDate] = useState("");
  const [meal, setMeal] = useState<Meal | "All">("All");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [orders, setOrders] = useState<Order[]>([]);
  const [busy, setBusy] = useState(false);
  const [placed, setPlaced] = useState<Order | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeModal = () => {
    if (timer.current) clearTimeout(timer.current);
    setPlaced(null);
  };

  useEffect(() => setDates(getDates()), []);

  const items = ITEMS.filter((i) => meal === "All" || i.meal === meal);
  const lines = useMemo(
    () => ITEMS.filter((i) => cart[i.id]).map((i) => ({ ...i, qty: cart[i.id] })),
    [cart]
  );
  const total = lines.reduce((s, l) => s + l.price * l.qty, 0);
  const count = lines.reduce((s, l) => s + l.qty, 0);
  const ready = hall && date && count > 0;

  const change = (id: string, delta: number) =>
    setCart((c) => {
      const qty = Math.max(0, Math.min(5, (c[id] ?? 0) + delta));
      const next = { ...c, [id]: qty };
      if (!qty) delete next[id];
      return next;
    });

  const place = () => {
    if (!ready) return;
    setBusy(true);
    setTimeout(() => {
      const order: Order = {
        id: "MP" + Math.floor(1000 + Math.random() * 9000),
        hall,
        dateLabel: dates.find((d) => d.value === date)?.label ?? date,
        lines: lines.map((l) => ({ name: l.name, qty: l.qty })),
        total,
      };
      setOrders((o) => [order, ...o]);
      setPlaced(order);
      timer.current = setTimeout(() => {
        window.location.href = buildUpiLink(order.total, order.id);
      }, 2500);
      setCart({});
      setBusy(false);
    }, 900);
  };

  return (
    <section id="order" className="container section">
      <div className="sec-head">
        <h2>Preorder specials</h2>
        <p>Pick your hall and day, then reserve what you want. Pay with UPI after placing your order.</p>
      </div>

      <section className="pickers">
        <label>
          <span>Hall</span>
          <select value={hall} onChange={(e) => setHall(e.target.value)}>
            <option value="">Select hall</option>
            {HALLS.map((h) => (
              <option key={h}>{h}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Date</span>
          <select value={date} onChange={(e) => setDate(e.target.value)}>
            <option value="">Select date</option>
            {dates.map((d) => (
              <option key={d.value} value={d.value}>
                {d.label}
              </option>
            ))}
          </select>
        </label>
      </section>

      <div className="layout">
        <section>
          <div className="chips" role="tablist" aria-label="Meal">
            {(["All", ...MEALS] as const).map((m) => (
              <button key={m} className={meal === m ? "chip on" : "chip"} onClick={() => setMeal(m)}>
                {m}
              </button>
            ))}
          </div>

          <div className="grid">
            {items.map((i) => {
              const qty = cart[i.id] ?? 0;
              return (
                <article key={i.id} className="card">
                  <div className="emoji" aria-hidden>{i.emoji}</div>
                  <div className="body">
                    <div className="row">
                      <h3>{i.name}</h3>
                      <span className={i.veg ? "dot veg" : "dot non"} title={i.veg ? "Veg" : "Non-veg"} />
                    </div>
                    <p>{i.desc}</p>
                    <div className="row foot">
                      <strong>₹{i.price}</strong>
                      {qty === 0 ? (
                        <button className="add" onClick={() => change(i.id, 1)}>Add</button>
                      ) : (
                        <div className="stepper">
                          <button aria-label={`Remove one ${i.name}`} onClick={() => change(i.id, -1)}>−</button>
                          <span>{qty}</span>
                          <button aria-label={`Add one ${i.name}`} onClick={() => change(i.id, 1)}>+</button>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <aside className="cart">
          <h2>Your preorder</h2>
          <p className="where">
            {hall || "No hall selected"} · {dates.find((d) => d.value === date)?.label || "No date selected"}
          </p>

          {lines.length === 0 ? (
            <p className="empty">Nothing here yet. Add items from the menu.</p>
          ) : (
            <ul>
              {lines.map((l) => (
                <li key={l.id}>
                  <span>{l.qty} × {l.name}</span>
                  <span>₹{l.price * l.qty}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="total">
            <span>Total</span>
            <strong>₹{total}</strong>
          </div>
          <button className="primary" disabled={!ready || busy} onClick={place}>
            {busy ? "Placing order…" : "Place preorder"}
          </button>
          {!ready && count > 0 && <p className="hint">Select a hall and date to continue.</p>}
        </aside>
      </div>

      {orders.length > 0 && (
        <section className="orders">
          <h2>My preorders</h2>
          {orders.map((o) => (
            <div key={o.id} className="order">
              <div>
                <strong>#{o.id}</strong> · {o.hall} · {o.dateLabel}
                <p>{o.lines.map((l) => `${l.qty} × ${l.name}`).join(", ")}</p>
              </div>
              <strong>₹{o.total}</strong>
            </div>
          ))}
        </section>
      )}

      {placed && (
        <div className="overlay" onClick={() => closeModal()}>
          <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <div className="tick">✓</div>
            <h2>Preorder placed</h2>
            <p>
              Order <strong>#{placed.id}</strong> is reserved at {placed.hall} for {placed.dateLabel}.
            </p>
            <p className="pay-note">
              Please complete your payment of <strong>₹{placed.total}</strong>. Opening your UPI app…
            </p>
            <a className="primary" href={buildUpiLink(placed.total, placed.id)}>
              Pay ₹{placed.total} with UPI
            </a>
            <button className="linkbtn" onClick={closeModal}>Done</button>
            <p className="hint">UPI apps open on phones. On a computer, pay from your phone.</p>
          </div>
        </div>
      )}
    </section>
  );
}

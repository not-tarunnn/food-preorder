:root {
  --bg: #f5f6fa;
  --surface: #ffffff;
  --ink: #181a20;
  --muted: #6a6f7d;
  --line: #e4e6ee;
  --brand: #3b3bd9;
  --brand-ink: #ffffff;
  --veg: #1f9d55;
  --non: #d64545;
  --r: 14px;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #101116;
    --surface: #181a22;
    --ink: #eef0f6;
    --muted: #9298a8;
    --line: #272a35;
    --brand: #7c7cff;
    --brand-ink: #101116;
  }
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--ink); line-height: 1.5; }
button, select { font: inherit; color: inherit; }
button:focus-visible, select:focus-visible { outline: 2px solid var(--brand); outline-offset: 2px; }

.wrap { max-width: 1120px; margin: 0 auto; padding: 40px 20px 80px; }
.top h1 { font-size: clamp(28px, 4vw, 40px); letter-spacing: -0.02em; margin: 0 0 6px; }
.top p { margin: 0; color: var(--muted); }

.pickers { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; margin: 28px 0; }
.pickers label { display: grid; gap: 6px; font-size: 14px; color: var(--muted); }
.pickers select {
  appearance: none; background: var(--surface) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none' stroke='%236a6f7d' stroke-width='2'%3E%3Cpath d='M1 1l5 5 5-5'/%3E%3C/svg%3E") no-repeat right 16px center;
  border: 1px solid var(--line); border-radius: var(--r); padding: 14px 40px 14px 16px; color: var(--ink); font-size: 16px; cursor: pointer;
}

.layout { display: grid; grid-template-columns: 1fr 340px; gap: 28px; align-items: start; }
@media (max-width: 880px) { .layout { grid-template-columns: 1fr; } }

.chips { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 18px; }
.chip { border: 1px solid var(--line); background: var(--surface); padding: 8px 16px; border-radius: 999px; cursor: pointer; }
.chip.on { background: var(--ink); color: var(--bg); border-color: var(--ink); }

.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px; }
.card { background: var(--surface); border: 1px solid var(--line); border-radius: var(--r); overflow: hidden; display: flex; flex-direction: column; }
.emoji { font-size: 44px; padding: 22px; background: color-mix(in srgb, var(--brand) 8%, var(--surface)); text-align: center; }
.body { padding: 16px; display: flex; flex-direction: column; gap: 6px; flex: 1; }
.body h3 { margin: 0; font-size: 17px; }
.body p { margin: 0; color: var(--muted); font-size: 14px; flex: 1; }
.row { display: flex; justify-content: space-between; align-items: center; gap: 10px; }
.foot { margin-top: 10px; }
.dot { width: 14px; height: 14px; border-radius: 3px; border: 2px solid; flex: none; position: relative; }
.dot::after { content: ""; position: absolute; inset: 2px; border-radius: 50%; background: currentColor; }
.dot.veg { color: var(--veg); } .dot.non { color: var(--non); }

.add { border: 1px solid var(--brand); color: var(--brand); background: transparent; padding: 7px 20px; border-radius: 10px; cursor: pointer; font-weight: 600; }
.add:hover { background: var(--brand); color: var(--brand-ink); }
.stepper { display: flex; align-items: center; gap: 4px; background: var(--brand); color: var(--brand-ink); border-radius: 10px; }
.stepper button { background: none; border: 0; color: inherit; width: 34px; height: 34px; font-size: 18px; cursor: pointer; }
.stepper span { min-width: 18px; text-align: center; font-weight: 600; }

.cart { position: sticky; top: 20px; background: var(--surface); border: 1px solid var(--line); border-radius: var(--r); padding: 20px; }
.cart h2 { margin: 0 0 4px; font-size: 20px; }
.where { margin: 0 0 14px; font-size: 14px; color: var(--muted); }
.cart ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 8px; }
.cart li { display: flex; justify-content: space-between; gap: 10px; font-size: 15px; }
.empty { color: var(--muted); font-size: 14px; }
.total { display: flex; justify-content: space-between; border-top: 1px solid var(--line); margin: 16px 0; padding-top: 14px; font-size: 18px; }
.primary { width: 100%; background: var(--brand); color: var(--brand-ink); border: 0; border-radius: 12px; padding: 14px; font-weight: 700; cursor: pointer; }
.primary:disabled { opacity: 0.45; cursor: not-allowed; }
.hint { font-size: 13px; color: var(--muted); margin: 10px 0 0; text-align: center; }

.orders { margin-top: 48px; }
.orders h2 { font-size: 20px; }
.order { display: flex; justify-content: space-between; gap: 16px; background: var(--surface); border: 1px solid var(--line); border-radius: var(--r); padding: 14px 18px; margin-bottom: 10px; }
.order p { margin: 4px 0 0; color: var(--muted); font-size: 14px; }

.overlay { position: fixed; inset: 0; background: rgb(0 0 0 / 0.5); display: grid; place-items: center; padding: 20px; }
.modal { background: var(--surface); border-radius: 18px; padding: 28px; max-width: 380px; text-align: center; animation: pop 0.2s ease-out; }
.modal p { color: var(--muted); }
.tick { width: 52px; height: 52px; border-radius: 50%; background: var(--veg); color: #fff; display: grid; place-items: center; font-size: 26px; margin: 0 auto 12px; }
@keyframes pop { from { transform: scale(0.94); opacity: 0; } }
@media (prefers-reduced-motion: reduce) { .modal { animation: none; } }

export type Meal = "Breakfast" | "Lunch" | "Snacks" | "Dinner";

export type Item = {
  id: string;
  name: string;
  desc: string;
  price: number;
  veg: boolean;
  meal: Meal;
  emoji: string;
};

export const MEALS: Meal[] = ["Breakfast", "Lunch", "Snacks", "Dinner"];

export const HALLS = Array.from({ length: 13 }, (_, i) => `Hall ${i + 1}`);

export const ITEMS: Item[] = [
  { id: "dosa", name: "Masala Dosa", desc: "Crisp dosa, potato filling, sambar and two chutneys", price: 60, veg: true, meal: "Breakfast", emoji: "🥞" },
  { id: "chhole", name: "Chole Bhature", desc: "Two fluffy bhature with spicy chickpea curry", price: 70, veg: true, meal: "Breakfast", emoji: "🫓" },
  { id: "biryani", name: "Chicken Biryani", desc: "Dum-cooked basmati rice with raita", price: 140, veg: false, meal: "Lunch", emoji: "🍗" },
  { id: "paneer", name: "Paneer Butter Masala Thali", desc: "Paneer curry, dal, rice, 2 rotis, salad", price: 110, veg: true, meal: "Lunch", emoji: "🍛" },
  { id: "vegbiryani", name: "Veg Dum Biryani", desc: "Seasonal vegetables, saffron rice, boondi raita", price: 100, veg: true, meal: "Lunch", emoji: "🍚" },
  { id: "samosa", name: "Samosa Chaat", desc: "Smashed samosa, curd, tamarind and mint chutney", price: 40, veg: true, meal: "Snacks", emoji: "🥟" },
  { id: "coffee", name: "Cold Coffee", desc: "Thick, chilled, lightly sweet", price: 50, veg: true, meal: "Snacks", emoji: "🥤" },
  { id: "momos", name: "Chicken Momos", desc: "Steamed, 6 pieces, with spicy red chutney", price: 80, veg: false, meal: "Snacks", emoji: "🥠" },
  { id: "butterchicken", name: "Butter Chicken & Naan", desc: "Creamy tomato gravy with 2 butter naans", price: 160, veg: false, meal: "Dinner", emoji: "🍲" },
  { id: "kadhai", name: "Kadhai Paneer Combo", desc: "Kadhai paneer, jeera rice, 2 rotis", price: 120, veg: true, meal: "Dinner", emoji: "🥘" },
  { id: "jamun", name: "Gulab Jamun (2 pcs)", desc: "Warm, syrup-soaked", price: 30, veg: true, meal: "Dinner", emoji: "🍮" },
  { id: "kheer", name: "Rice Kheer", desc: "Slow-cooked with cardamom and nuts", price: 35, veg: true, meal: "Dinner", emoji: "🍨" },
];

export function getDates(count = 7) {
  const out: { value: string; label: string }[] = [];
  const base = new Date();
  for (let i = 1; i <= count; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    const value = d.toISOString().slice(0, 10);
    const label =
      (i === 1 ? "Tomorrow, " : "") +
      d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });
    out.push({ value, label });
  }
  return out;
}

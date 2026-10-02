import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const font = Figtree({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Mess Preorder · IIT Kanpur",
  description: "Preorder special items from your hall mess.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}

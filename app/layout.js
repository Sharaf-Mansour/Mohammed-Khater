import { inter } from "./fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

export const metadata = {
  title: "Mohammed Tarek",
  description: "Created by Mohammed Tarek",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className={inter.className}>{children}</body>
    </html>
  );
}

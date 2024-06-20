import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NAZARÉ Music",
  description: "Deep and crispy tropical bass 🎧",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-made-evolve">{children}</body>
    </html>
  );
}

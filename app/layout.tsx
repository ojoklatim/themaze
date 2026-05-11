import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Space_Mono } from "next/font/google";
import "../styles/globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "The Maze Bistro | Fine Dining in Kampala, Uganda",
  description: "Experience modern high-end minimalist dining at The Maze Bistro. Located in Mbuya and Lugogo Forest Mall, Kampala.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${spaceMono.variable} font-sans bg-bg text-text`}
      >
        {children}
      </body>
    </html>
  );
}

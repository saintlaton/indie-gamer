import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Roboto_Condensed } from "next/font/google"; // Importing Roboto Condensed from Google Fonts
import { NavBar } from "@/components/NavBar";
import { orbitron } from "./font";

export const metadata: Metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
  description: "Only the best indies game, reviewed for you",
};

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"], // Choose the weights you need
  variable: "--font-roboto-condensed", // CSS variable for the font
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.className} ${orbitron.variable} bg-orange-50 flex  flex-col px-8 py-2 min-h-screen`}
      >
        <header className="mb-5">
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-t py-3 text-center text-lg text-slate-500">
          Game data and images courtesy of{" "}
          <a
            href="https://rawg.io"
            target="_blank "
            className="text-orange-800 hover:underline"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}

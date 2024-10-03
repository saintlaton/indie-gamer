import Link from "next/link";
import React from "react";

export const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-2 justify-center items-center">
        <li className="bg-white p-2 max-w-52 border-4 border-[#2C3E50]">
          <Link
            className="font-orbitron font-bold text-orange-800 hover:underline text-xl"
            href="/"
          >
            Indie Gamer
          </Link>
        </li>
        <li className="ml-auto">
          <Link
            className="text-orange-800 hover:underline text-xl"
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="text-orange-800 hover:underline text-xl"
            href="/reviews"
          >
            Reviews
          </Link>
        </li>
      </ul>
    </nav>
  );
};

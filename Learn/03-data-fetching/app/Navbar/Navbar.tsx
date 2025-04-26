"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center text-center gap-28">
        <Link href="/" className="text-xl font-bold mb-2 md:mb-0">
          MyApp
        </Link>

        <button
          className="md:hidden text-white mb-2 md:mb-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        <ul
          className={`flex flex-col md:flex-row gap-28 space-y-2 md:space-y-0 md:space-x-6 ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          <li>
            <Link href="/about" className="hover:text-rose-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/posts" className="hover:text-rose-400">
              Posts
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-rose-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

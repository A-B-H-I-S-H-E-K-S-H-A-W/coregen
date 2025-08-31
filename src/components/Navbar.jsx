"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { ThemeToggler } from "./ui/ThemeToggeler";
import { SidebarIcon, X } from "lucide-react";

const navLinks = [
  { id: 1, title: "Docs", link: "/documentation" },
  { id: 2, title: "Components", link: "/" },
  { id: 3, title: "API Endpoints", link: "/" },
  { id: 4, title: "Theme", link: "/" },
];

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 bg-background border-b w-full h-16 px-4 sm:px-10">
        <header className="flex justify-between items-center h-16">
          <div className="flex items-center gap-10">
            <span className="font-bold text-lg">Coregen</span>
            <ul className="hidden md:flex flex-row">
              {navLinks.map(({ id, title, link }) => (
                <li key={id}>
                  <Link href={link}>
                    <Button size="default" variant="ghost">
                      {title}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4">
            <ThemeToggler />
            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? "Close Menu" : "Open Menu"}
              className="md:hidden p-2 rounded-lg hover:bg-accent"
            >
              {menuState ? (
                <X className="size-5" />
              ) : (
                <SidebarIcon className="size-5" />
              )}
            </button>
          </div>
        </header>
      </nav>

      {menuState && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-background/10 backdrop-blur-xs"
            onClick={() => setMenuState(false)}
          />

          <div className="relative z-50 bg-background w-64 h-full p-6 flex flex-col gap-6 animate-slideIn">
            <span className="font-bold text-xl">Coregen</span>
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ id, title, link }) => (
                <li key={id}>
                  <Link href={link} onClick={() => setMenuState(false)}>
                    <Button
                      size="lg"
                      variant="ghost"
                      className="w-full justify-start"
                    >
                      {title}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { easeInOut, motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Download", href: "/download" },
    { name: "Pricing", href: "/pricing" },
  ];
  const [menuState, setMenuState] = useState(false);
  return (
    <header className="max-w-screen">
      {" "}
      <nav
        data-state={menuState && "active"}
        className="group z-30 w-full bg-transparent"
      >
        {" "}
        <div className="m-auto md:px-20 px-5">
          {" "}
          <div className="flex flex-wrap items-center justify-between gap-3 py-6 lg:gap-0 lg:py-10 overflow-hidden">
            {" "}
            <div className="flex w-full justify-between">
              {" "}
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2 cursor-none"
              >
                {" "}
                <h2 className="text-foreground lg:text-4xl text-2xl font-bold">
                  {" "}
                  Coregen{" "}
                </h2>{" "}
              </Link>{" "}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative block cursor-none lg:p-2 p-1 rounded-xl bg-primary/60 hover:bg-primary/80 duration-300"
              >
                {" "}
                <Menu className="text-foreground group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto lg:size-10 size-8 duration-200" />{" "}
                <X className="text-foreground group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto lg:size-10 size-8 -rotate-180 scale-0 opacity-0 duration-200" />{" "}
              </button>{" "}
            </div>{" "}
            <AnimatePresence>
              {" "}
              {menuState && (
                <>
                  {" "}
                  <motion.div
                    style={{ willChange: "transform" }}
                    initial={{
                      height: "0",
                      width: "99vw",
                      left: "0",
                      overflow: "hidden",
                    }}
                    animate={{
                      height: "100dvh",
                      width: "99vw",
                      left: "0",
                      overflow: "hidden",
                    }}
                    exit={{
                      height: "0",
                      width: "99vw",
                      left: "0",
                      overflow: "hidden",
                    }}
                    transition={{
                      duration: 0.8,
                      ease: easeInOut,
                      type: "spring",
                      stiffness: 50,
                      damping: 16,
                      mass: 1.5,
                    }}
                    className="fixed z-50 top-0 bg-background/30 backdrop-blur-xl flex-wrap items-center justify-start rounded-2xl border md:px-20 px-5 shadow-xl shadow-zinc-300/60 overflow-hidden"
                  >
                    {" "}
                    <div className="flex flex-wrap items-center justify-between gap-3 py-6 lg:gap-0 lg:py-10 overflow-hidden">
                      {" "}
                      <div className="flex w-full justify-between">
                        {" "}
                        <Link
                          href="/"
                          aria-label="home"
                          className="flex items-center space-x-2"
                        >
                          {" "}
                          <h1 className="z-20 text-foreground lg:text-4xl text-2xl font-bold">
                            {" "}
                            Quindle{" "}
                          </h1>{" "}
                        </Link>{" "}
                        <button
                          onClick={() => setMenuState(!menuState)}
                          aria-label={menuState ? "Close Menu" : "Open Menu"}
                          className="relative z-20 block cursor-none lg:p-2 p-1 rounded-xl bg-primary/60 hover:bg-primary/80 duration-300"
                        >
                          {" "}
                          <Menu className="text-foreground group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto lg:size-10 size-8 duration-200" />{" "}
                          <X className="text-foreground group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto lg:size-10 size-8 -rotate-180 scale-0 opacity-0 duration-200" />{" "}
                        </button>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="lg:pr-4">
                      {" "}
                      <ul className="pt-8 pb-18 text-base lg:flex lg:flex-col lg:gap-10 space-y-10 lg:space-y-0 lg:text-sm">
                        {" "}
                        {menuItems.map((item, index) => (
                          <li key={index}>
                            {" "}
                            <Link
                              onClick={() => setMenuState(false)}
                              href={item.href}
                              className="text-foreground/80 hover:text-secondary font-bold block duration-150 lg:text-5xl text-3xl cursor-none"
                            >
                              {" "}
                              <span>{item.name}</span>{" "}
                            </Link>{" "}
                          </li>
                        ))}{" "}
                      </ul>{" "}
                    </div>{" "}
                    <div className="flex w-full flex-col space-y-3 sm:gap-3 sm:space-y-0 md:w-fit">
                      {" "}
                      <Button variant="outline" size="lg">
                        {" "}
                        <Link
                          href="/contact"
                          onClick={() => setMenuState(false)}
                        >
                          {" "}
                          <span className="md:text-xl text-base">
                            {" "}
                            Contact Us{" "}
                          </span>{" "}
                        </Link>{" "}
                      </Button>{" "}
                    </div>{" "}
                  </motion.div>{" "}
                </>
              )}{" "}
            </AnimatePresence>{" "}
          </div>{" "}
        </div>{" "}
      </nav>{" "}
    </header>
  );
};

const Hero = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default Hero;

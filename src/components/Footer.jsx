import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="sticky top-0 left-0 bg-background w-full h-20 border-t">
        <div className="flex justify-center items-center h-20">
          <p className="p">
            Made by{" "}
            <Link
              target="_blank"
              className="underline text-ring"
              href="https://abhishek-work.vercel.app/"
            >
              Abhishek Shaw.
            </Link>
            Find me on{" "}
            <Link
              target="_blank"
              className="underline text-ring"
              href="https://github.com/A-B-H-I-S-H-E-K-S-H-A-W/"
            >
              Github
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

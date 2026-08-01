"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const LINES = [
  "> npm install princess.exe",
  "",
  "✔ Loading Hug Engine...",
  "✔ Loading Princess Module...",
  "✔ Installing Love Packages...",
  "✔ Fixing Remaining Bugs...",
  "✔ Building Project...",
  "",
  "Compiled Successfully ✔",
  "",
  "Launching Princess.exe...",
  "",
  "Mission Complete ❤️",
];

export default function Terminal({ next }) {
  const [lines, setLines] = useState([]);
  const [current, setCurrent] = useState("");
  const [cursor, setCursor] = useState(true);

  const lineIndex = useRef(0);
  const charIndex = useRef(0);

  useEffect(() => {
    const blink = setInterval(() => {
      setCursor((v) => !v);
    }, 500);

    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (lineIndex.current >= LINES.length) {
        clearInterval(timer);

        setTimeout(() => {
          next();
        }, 1800);

        return;
      }

      const line = LINES[lineIndex.current];

      if (charIndex.current < line.length) {
        setCurrent((prev) => prev + line[charIndex.current]);
        charIndex.current++;
      } else {
        setLines((prev) => [...prev, current]);

        setCurrent("");

        charIndex.current = 0;

        lineIndex.current++;
      }
    }, 35);

    return () => clearInterval(timer);
  }, [current, next]);

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }, [lines, current]);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="
      min-h-screen
      bg-[#0d1117]
      flex
      items-center
      justify-center
      p-5
      "
    >
      <div
        className="
        w-full
        max-w-5xl
        rounded-2xl
        overflow-hidden
        border
        border-zinc-700
        shadow-2xl
        "
      >
        <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-zinc-700">

          <div className="w-3 h-3 rounded-full bg-red-500" />

          <div className="w-3 h-3 rounded-full bg-yellow-500" />

          <div className="w-3 h-3 rounded-full bg-green-500" />

          <span className="ml-4 text-zinc-400 text-sm">
            terminal
          </span>

        </div>

        <div
          className="
          bg-black
          min-h-[500px]
          p-6
          font-mono
          text-green-400
          text-sm
          md:text-base
          "
        >
          {lines.map((line, index) => (
            <motion.p
              key={index}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="mb-2 whitespace-pre-wrap"
            >
              {line}
            </motion.p>
          ))}

          <p className="whitespace-pre-wrap">
            {current}
            <span
              className={`${
                cursor ? "opacity-100" : "opacity-0"
              }`}
            >
              █
            </span>
          </p>

        </div>
      </div>
    </motion.div>
  );
}
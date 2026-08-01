"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Bug from "./Bug";

const BUGS = [
  "RepeatBug_v2",
  "LazyReply.js",
  "NullPointer",
  "InfiniteLoop",
  "SleepMode.dll",
  "BrokenPromise",
  "MemoryLeak",
  "CoffeeOverflow",
  "StackOverflow",
  "Princess.exe",
];

const random = () => ({
  x: Math.random() * 72 + 5,
  y: Math.random() * 58 + 12,
});

export default function BugArena({
  total,
  fixed,
  onBugSquashed,
  onCompleted,
}) {
  const [completed, setCompleted] = useState(false);

  const [bugs, setBugs] = useState(() =>
    BUGS.map((title, id) => ({
      id,
      title,
      duration: 12 + Math.random() * 8,
      points: [
        random(),
        random(),
        random(),
        random(),
        random(),
        random(),
        random(),
      ],
    }))
  );

  const progress = useMemo(
    () => (fixed / total) * 100,
    [fixed, total]
  );

function squash(id) {
  if ("vibrate" in navigator) {
    navigator.vibrate(35);
  }

  setBugs((old) => {
    const remaining = old.filter((bug) => bug.id !== id);

    onBugSquashed();

    return remaining;
  });
}
useEffect(() => {
  if (bugs.length !== 0) return;

  setCompleted(true);

  const timer = setTimeout(() => {
    onCompleted();
  }, 1800);

  return () => clearTimeout(timer);

}, [bugs, onCompleted]);

  

  return (
    <div className="absolute inset-0 mt-40 overflow-hidden">

      <AnimatePresence>

        {bugs.map((bug) => (

          <motion.div
            key={bug.id}
            className="absolute"
            animate={{
              left: bug.points.map((p) => `${p.x}%`),
              top: bug.points.map((p) => `${p.y}%`),
            }}
            transition={{
              duration: bug.duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "linear",
            }}
          >
            <Bug
              id={bug.id}
              title={bug.title}
              onSquash={squash}
            />
          </motion.div>

        ))}

      </AnimatePresence>

      <AnimatePresence>

        {completed && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50"
          >

            <motion.div
              initial={{
                scale: .8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
              }}
              className="text-center"
            >

              <div className="text-7xl">
                ✅
              </div>

              <h2 className="text-5xl font-bold mt-6">
                All Bugs Fixed!
              </h2>

              <p className="mt-4 text-zinc-400">
                Compiling Princess.exe...
              </p>

              <div className="w-80 h-4 bg-zinc-800 rounded-full overflow-hidden mt-8">

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 2 }}
                  className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400"
                />

              </div>
                            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-green-400 font-mono"
              >
                ✔ Debug Successful
              </motion.p>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.8,
                }}
                className="
                mt-8
                rounded-2xl
                border
                border-zinc-700
                bg-zinc-900
                p-6
                "
              >
                <div className="font-mono text-left text-green-400 text-sm space-y-2">

                  <p>{">"} Scanning Princess.exe...</p>
                  <p>{">"} Fixing remaining bugs...</p>
                  <p>{">"} Optimizing hugs...</p>
                  <p>{">"} Building release...</p>
                  <p>{">"} Deployment Successful ✔</p>

                </div>

              </motion.div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

      <motion.div
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
        absolute
        top-5
        right-5
        text-zinc-500
        text-sm
        "
      >
        Princess.exe Debug Mode
      </motion.div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

    </div>
  );
}
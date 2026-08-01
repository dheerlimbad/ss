"use client";

import { AnimatePresence, motion } from "framer-motion";

const ACHIEVEMENTS = [
  {
    count: 1,
    title: "🐞 First Bug Fixed",
    desc: "Nice start!",
  },
  {
    count: 5,
    title: "⚡ Combo Builder",
    desc: "Keep debugging!",
  },
  {
    count: 10,
    title: "🔥 Bug Hunter",
    desc: "Halfway there!",
  },
  {
    count: 15,
    title: "🏆 Debug Master",
    desc: "Almost done!",
  },
  {
    count: 18,
    title: "👑 Princess Approved",
    desc: "Every bug fixed!",
  },
];

export default function BugReport({
  show,
  combo,
  xp,
  count,
  onHide,
}) {
  if (!show) return null;

  const achievement =
    [...ACHIEVEMENTS]
      .reverse()
      .find((a) => count >= a.count) || ACHIEVEMENTS[0];

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
          y: -40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.7,
          y: -40,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 18,
        }}
        className="
        fixed
        top-5
        left-1/2
        -translate-x-1/2
        z-50
        "
      >
        <div
          className="
          bg-[#1a1d26]
          border
          border-pink-500/40
          rounded-2xl
          shadow-2xl
          backdrop-blur-xl
          px-6
          py-5
          min-w-[320px]
          "
        >
          <div className="flex items-center gap-4">

            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.4,
              }}
              className="text-5xl"
            >
              🏆
            </motion.div>

            <div>

              <h2 className="text-lg font-bold text-white">
                {achievement.title}
              </h2>

              <p className="text-sm text-zinc-400 mt-1">
                {achievement.desc}
              </p>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-4 mt-5">

            <div
              className="
              rounded-xl
              bg-zinc-900
              border
              border-zinc-700
              p-4
              text-center
              "
            >
              <p className="text-xs text-zinc-500">
                XP Earned
              </p>

              <motion.h3
                key={xp}
                initial={{
                  scale: 0.8,
                }}
                animate={{
                  scale: 1,
                }}
                className="text-2xl font-bold text-green-400 mt-1"
              >
                +10
              </motion.h3>
            </div>

            <div
              className="
              rounded-xl
              bg-zinc-900
              border
              border-zinc-700
              p-4
              text-center
              "
            >
              <p className="text-xs text-zinc-500">
                Combo
              </p>

              <motion.h3
                key={combo}
                initial={{
                  scale: 0.8,
                }}
                animate={{
                  scale: 1,
                }}
                className="text-2xl font-bold text-pink-400 mt-1"
              >
                x{combo}
              </motion.h3>
            </div>

          </div>

          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
            }}
            className="
            mt-5
            text-center
            text-sm
            text-cyan-300
            "
          >
            Princess.exe is getting healthier 💖
          </motion.div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
"use client";

import { motion } from "framer-motion";
import { useAudio } from "./AudioProvider";

export default function Intro({ next }) {
const {
  unlockAudio,
  fadeMusic,
  playPop,
} = useAudio();
async function start() {
  await unlockAudio();

  await playPop();

  await fadeMusic();

  setTimeout(() => {
    next();
  }, 1200);
}

  return (
    <div className="min-h-screen bg-[#0d1117] flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, scale: .95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full text-center"
      >

        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="text-7xl"
        >

        </motion.div>

        <h1 className="text-5xl font-bold text-white mt-8">
          Princess.exe
        </h1>

        <p className="text-zinc-400 mt-4">
          Building today's surprise...
        </p>

        <div className="mt-10 rounded-2xl bg-zinc-900 border border-zinc-700 p-5">

          <div className="font-mono text-green-400 text-left space-y-2 text-sm">

            <p>{">"} Loading Memories...</p>
            <p>{">"} Loading Hugs...</p>
            <p>{">"} Debugging Princess Mood.exe...</p>
            <p>{">"} Preparing Surprise...</p>
            <p>{">"} Ready ✔</p>

          </div>

        </div>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: .95,
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          onClick={start}
          className="
          mt-10
          w-full
          rounded-xl
          bg-green-500
          py-4
          text-lg
          font-bold
          text-white
          shadow-xl
          "
        >
          ▶ Lessgooo
        </motion.button>

      </motion.div>

    </div>
  );
}
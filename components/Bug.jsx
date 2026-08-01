"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAudio } from "./AudioProvider";

export default function Bug({
  id,
  title,
  onSquash,
}) {
  const [alive, setAlive] = useState(true);
  const { playPop } = useAudio();

  async function handleClick() {
    if (!alive) return;

    setAlive(false);

    try {
      await playPop();
    } catch {}

    if ("vibrate" in navigator) {
      navigator.vibrate(30);
    }

    setTimeout(() => {
      onSquash(id);
    }, 250);
  }

  return (
    <AnimatePresence>
      {alive && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0,
            rotate: 180,
          }}
          transition={{
            duration: 0.25,
          }}
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
            className="relative w-44 rounded-2xl border border-zinc-700 bg-[#1b1f28] shadow-xl overflow-hidden text-left"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-cyan-500/10" />

            <div className="relative p-4">

              <div className="flex items-center gap-3">

                <motion.div
                  animate={{
                    rotate: [-6, 6, -6],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.8,
                  }}
                  className="text-3xl"
                >
                  🐞
                </motion.div>

                <div>
                  <h3 className="font-bold text-white text-sm">
                    {title}
                  </h3>

                  <p className="text-xs text-zinc-400 mt-1">
                    Tap to squash
                  </p>
                </div>

              </div>

            </div>

          </motion.button>

          {!alive && (
            <motion.div
              initial={{
                opacity: 1,
                y: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 0,
                y: -45,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="absolute left-1/2 -translate-x-1/2 -top-3 font-bold text-green-400 whitespace-nowrap pointer-events-none"
            >
              +10 XP
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
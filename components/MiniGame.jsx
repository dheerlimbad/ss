"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ProgressBar from "./ProgressBar";
import BugReport from "./BugReport";
import BugArena from "./BugArena";

const TOTAL_BUGS = 10;

export default function MiniGame({ next }) {
  const [fixed, setFixed] = useState(0);
  const [xp, setXp] = useState(0);
  const [combo, setCombo] = useState(0);

  const [showAchievement, setShowAchievement] = useState(false);

  function handleBugSquashed() {
    setFixed((prev) => prev + 1);
    setXp((prev) => prev + 10);
    setCombo((prev) => prev + 1);

    setShowAchievement(true);
  }

  useEffect(() => {
    if (!showAchievement) return;

    const timer = setTimeout(() => {
      setShowAchievement(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [showAchievement]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen w-full bg-[#0d1117] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#161b22] to-[#0d1117]" />

      <div className="relative z-30 max-w-6xl mx-auto px-4 pt-6">

        <motion.h1
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-4xl font-bold text-center text-white"
        >
          🐞 Bug Hunt
        </motion.h1>

        <p className="text-center text-zinc-400 mt-3">
          Tap every bug to debug Princess.exe
        </p>

        <div className="mt-8">
          <ProgressBar
            value={fixed}
            total={TOTAL_BUGS}
            xp={xp}
            combo={combo}
          />
        </div>

      </div>

      <AnimatePresence>

        {showAchievement && (
          <BugReport
            show={showAchievement}
            combo={combo}
            xp={xp}
            count={fixed}
            onHide={() => setShowAchievement(false)}
          />
        )}

      </AnimatePresence>

    <BugArena
  total={TOTAL_BUGS}
  onBugSquashed={handleBugSquashed}
  onCompleted={next}
/>

    </motion.div>
  );
}
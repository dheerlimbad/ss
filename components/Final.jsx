"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import LoadingScreen from "./LoadingScreen";
import Intro from "./Intro";
import MiniGame from "./MiniGame";
import HugGame from "./HugGame";
import Terminal from "./Terminal";
import Ending from "./Ending";

const SCREENS = {
  LOADING: 0,
  INTRO: 1,
  BUGS: 2,
  HUG: 3,
  TERMINAL: 4,
  ENDING: 5,
};

export default function Final() {
  const [screen, setScreen] = useState(SCREENS.LOADING);

  // This forces every component to remount on replay
  const [gameKey, setGameKey] = useState(Date.now());

  function next() {
    setScreen((prev) => prev + 1);
  }

  function restart() {
    setGameKey(Date.now());
    setScreen(SCREENS.LOADING);
  }

  return (
    <div
      key={gameKey}
      className="w-full min-h-screen overflow-hidden bg-[#0d1117] text-white"
    >
      <AnimatePresence mode="wait">

        {screen === SCREENS.LOADING && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LoadingScreen next={next} />
          </motion.div>
        )}

        {screen === SCREENS.INTRO && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Intro next={next} />
          </motion.div>
        )}

        {screen === SCREENS.BUGS && (
          <motion.div
            key="bugs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <MiniGame next={next} />
          </motion.div>
        )}

        {screen === SCREENS.HUG && (
          <motion.div
            key="hug"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <HugGame next={next} />
          </motion.div>
        )}

        {screen === SCREENS.TERMINAL && (
          <motion.div
            key="terminal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Terminal next={next} />
          </motion.div>
        )}

        {screen === SCREENS.ENDING && (
          <motion.div
            key="ending"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Ending restart={restart} />
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
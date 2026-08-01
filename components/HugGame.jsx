"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useAudio } from "./AudioProvider";

const OPTIONS = [2, 5, 12, 37, 63, 89, 119, 120];

const TOAST = {
  2: "😂 TWO? Princess deserves way more.",
  5: "😝 Nope!",
  12: "😄 Still too less.",
  37: "😂 Try again Princess!",
  63: "👀 Getting closer...",
  89: "😊 Almost there...",
  119: "🤏 SO CLOSE!",
  120: "🎉 Correct ❤️",
};

const random = () => ({
  x: Math.random() * 72 + 5,
  y: Math.random() * 58 + 15,
});

export default function HugGame({ next }) {
  const { playPop, playSuccess } = useAudio();
  const { width, height } = useWindowSize();

  const [toast, setToast] = useState("");
  const [deploy, setDeploy] = useState(false);
  const [progress, setProgress] = useState(0);

  const buttons = useMemo(
    () =>
      OPTIONS.map((value) => ({
        value,
        duration: 12 + Math.random() * 8,
        path: [
          random(),
          random(),
          random(),
          random(),
          random(),
          random(),
        ],
      })),
    []
  );

  function choose(value) {
    if (value !== 120) {
      playPop();

      if ("vibrate" in navigator) {
        navigator.vibrate(25);
      }

      setToast(TOAST[value]);

      setTimeout(() => {
        setToast("");
      }, 1300);

      return;
    }

    playSuccess();

    if ("vibrate" in navigator) {
      navigator.vibrate([100, 50, 100]);
    }

    setToast(TOAST[120]);
    setDeploy(true);
  }

  useEffect(() => {
    if (!deploy) return;

    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            next();
          }, 1200);

          return 100;
        }

        return p + 4;
      });
    }, 90);

    return () => clearInterval(timer);
  }, [deploy, next]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-700 flex items-center justify-center overflow-hidden p-5">

      {deploy && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={300}
        />
      )}

      <div className="w-full max-w-md rounded-3xl bg-[#161b22] border border-zinc-700 shadow-2xl p-6">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center text-white"
        >
          🤗 Hug Calculator
        </motion.h1>

        <p className="text-center text-zinc-400 mt-3">
          Princess 👑
          <br />
          How many Huggys does Dheeru owe you today?
        </p>

        <AnimatePresence>

          {toast && (

            <motion.div
              initial={{ opacity: 0, y: -20, scale: .8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white text-black px-6 py-3 rounded-full font-bold shadow-xl"
            >
              {toast}
            </motion.div>

          )}

        </AnimatePresence>

        {!deploy && (

          <div
            className="relative mt-8 bg-zinc-900 rounded-2xl border border-zinc-700 overflow-hidden"
            style={{ minHeight: 430 }}
          >

            {buttons.map((button) => (

              <motion.button
                key={button.value}
                animate={{
                  left: button.path.map((p) => `${p.x}%`),
                  top: button.path.map((p) => `${p.y}%`),
                }}
                transition={{
                  duration: button.duration,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "linear",
                }}
                whileTap={{ scale: .9 }}
                onClick={() => choose(button.value)}
                className={`absolute px-5 py-3 rounded-xl font-bold text-white shadow-xl ${
                  button.value === 120
                    ? "bg-pink-500"
                    : "bg-green-600"
                }`}
              >
                🤗 {button.value}
              </motion.button>

            ))}

          </div>

        )}
                {deploy && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-8"
          >

            <motion.div
              animate={{
                rotate: [0, 8, -8, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
              }}
              className="text-7xl"
            >
              🤗❤️
            </motion.div>

            <h2 className="text-3xl font-bold text-center text-white mt-8">
              Princess chose
              <br />
              <span className="text-pink-400">120 Huggys ❤️</span>
            </h2>

            <p className="text-zinc-400 mt-4">
              Deploying hugs.exe...
            </p>

            <div className="w-full h-4 bg-zinc-800 rounded-full overflow-hidden mt-8">

              <motion.div
                animate={{
                  width: `${progress}%`,
                }}
                transition={{
                  duration: .15,
                }}
                className="
                h-full
                bg-gradient-to-r
                from-pink-500
                via-purple-500
                to-cyan-400
                "
              />

            </div>

            <div className="mt-3 text-green-400 font-bold">
              {progress}%
            </div>

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
                delay: .5,
              }}
              className="
              mt-8
              w-full
              rounded-2xl
              border
              border-zinc-700
              bg-zinc-900
              p-5
              "
            >

              <div className="font-mono text-green-400 text-sm space-y-2">

                <p>{">"} Initializing hugs.exe</p>

                <p>{">"} Connecting to Princess...</p>

                <p>{">"} Permission Granted ✔</p>

                <p>{">"} Reserving 120 Huggys...</p>

                <p>{">"} Deploy Successful 🚀</p>

              </div>

            </motion.div>

            <motion.button
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                delay: .8,
                type: "spring",
                stiffness: 180,
              }}
              className="
              mt-8
              w-full
              py-4
              rounded-xl
              bg-pink-500
              hover:bg-pink-400
              text-white
              font-bold
              text-lg
              shadow-xl
              "
            >
              Mission Complete ❤️
            </motion.button>

          </motion.div>

        )}

      </div>

    </div>
  );
}
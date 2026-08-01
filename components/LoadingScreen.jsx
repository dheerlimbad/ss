"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ next }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            next();
          }, 500);

          return 100;
        }

        return old + 2;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="min-h-screen bg-[#0d1117] flex items-center justify-center px-6">

      <div className="w-full max-w-md text-center">

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          }}
          className="text-7xl"
        >
          👑
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mt-8 text-5xl font-bold text-white"
        >
          Princess.exe
        </motion.h1>

        <p className="mt-4 text-zinc-400">
          Preparing today's surprise...
        </p>

        <div className="mt-10 h-4 rounded-full bg-zinc-800 overflow-hidden">

          <motion.div
            animate={{
              width: `${progress}%`,
            }}
            transition={{
              duration: 0.15,
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

        <div className="mt-4 text-green-400 font-bold">
          {progress}%
        </div>

        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="mt-8 text-zinc-500 text-sm"
        >
          Loading memories...
        </motion.p>

      </div>

    </div>
  );
}
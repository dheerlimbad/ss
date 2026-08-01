"use client";

import { motion } from "framer-motion";

export default function ProgressBar({
  value,
  total,
  xp,
  combo,
}) {
  const percentage = Math.min((value / total) * 100, 100);

  return (
    <div className="w-full max-w-6xl mx-auto mb-8">

      <div className="flex justify-between items-center mb-4">

        <div>

          <h2 className="text-white font-bold text-xl">
            🐞 Princess.exe Debugger
          </h2>

          <p className="text-zinc-400 text-sm">
            Fix every bug to continue
          </p>

        </div>

        <div className="flex gap-3">

          <motion.div

            key={xp}

            initial={{
              scale: 0.8,
            }}

            animate={{
              scale: 1,
            }}

            className="
            bg-zinc-900
            border
            border-zinc-700
            rounded-xl
            px-5
            py-3
            min-w-[90px]
            text-center"

          >

            <p className="text-xs text-zinc-500">

              XP

            </p>

            <p className="text-green-400 font-bold text-lg">

              {xp}

            </p>

          </motion.div>

          <motion.div

            key={combo}

            initial={{
              scale: 0.8,
            }}

            animate={{
              scale: 1,
            }}

            className="
            bg-zinc-900
            border
            border-zinc-700
            rounded-xl
            px-5
            py-3
            min-w-[90px]
            text-center"

          >

            <p className="text-xs text-zinc-500">

              Combo

            </p>

            <p className="text-pink-400 font-bold text-lg">

              x{combo}

            </p>

          </motion.div>

        </div>

      </div>

      <div className="relative">

        <div className="h-5 rounded-full bg-zinc-800 overflow-hidden border border-zinc-700">

          <motion.div

            initial={{
              width: 0,
            }}

            animate={{
              width: `${percentage}%`,
            }}

            transition={{
              duration: 0.35,
            }}

            className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-pink-500
            via-purple-500
            to-cyan-400"

          />

        </div>

        <div className="flex justify-between mt-2 text-xs text-zinc-500">

          <span>

            {value} / {total} Bugs Fixed

          </span>

          <span>

            {Math.round(percentage)}%

          </span>

        </div>

      </div>

    </div>
  );
}
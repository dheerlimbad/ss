"use client";

import { motion } from "framer-motion";

export default function Intro({ next }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-3xl mx-auto bg-[#1e1e1e] rounded-xl overflow-hidden border border-zinc-700 shadow-2xl"
    >
      {/* VS Code Title Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d30] border-b border-zinc-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        <span className="text-sm text-gray-300">
          princess.exe — Visual Studio Code
        </span>

        <div />
      </div>

      <div className="flex">

        {/* Sidebar */}
        <div className="w-56 bg-[#252526] border-r border-zinc-700 p-4">

          <p className="text-xs text-gray-400 uppercase mb-4">
            Explorer
          </p>

          <div className="space-y-3 text-sm">

            <div>📁 princess.exe</div>

            <div className="pl-4 text-green-400">
              🐛 Problems (10)
            </div>

            <div className="pl-8 text-gray-400">
              RepeatBug_v2
            </div>

            <div className="pl-8 text-gray-400">
              EgoOverflow.dll
            </div>

            <div className="pl-8 text-gray-400">
              LazyReply.js
            </div>

            <div className="pl-8 text-gray-400">
              ForgotToThink.ts
            </div>

          </div>

        </div>

        {/* Main */}
        <div className="flex-1 p-8">

          <div className="text-3xl font-bold mb-8">
            Princess.exe 👑
          </div>

          <div className="space-y-4 text-zinc-300">

            <p>
              <span className="text-blue-400">Status</span> : Princess is mad
            </p>

            <p>
              <span className="text-blue-400">Developer</span> : Dheeru
            </p>

            <p>
              <span className="text-blue-400">Mission</span> : Earn one smile 🙂
            </p>

            <p>
              <span className="text-blue-400">Difficulty</span> : Legendary
            </p>

          </div>

          <button
            onClick={next}
            className="mt-10 bg-green-500 hover:bg-green-600 transition px-8 py-3 rounded-lg text-black font-bold"
          >
            Start Debugging →
          </button>

        </div>

      </div>
    </motion.div>
  );
}
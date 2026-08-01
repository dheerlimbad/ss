"use client";

import { motion } from "framer-motion";
import { useAudio } from "./AudioProvider";

export default function Intro({ next }) {
  const { fadeMusic } = useAudio();

  function runProject() {
    fadeMusic();

    setTimeout(() => {
      next();
    }, 1800);
  }

  return (
    <div className="min-h-screen bg-[#0d1117] flex items-center justify-center p-5">

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
        w-full
        max-w-6xl
        rounded-2xl
        overflow-hidden
        border
        border-zinc-700
        shadow-2xl
        bg-[#1e1e1e]
        "
      >

        {/* Title Bar */}

        <div className="h-12 bg-[#2d2d30] border-b border-zinc-700 flex items-center px-4">

          <div className="flex gap-2">

            <div className="w-3 h-3 rounded-full bg-red-500" />

            <div className="w-3 h-3 rounded-full bg-yellow-500" />

            <div className="w-3 h-3 rounded-full bg-green-500" />

          </div>

          <div className="flex-1 text-center text-sm text-zinc-300">
            Princess.exe — Visual Studio Code
          </div>

        </div>

        <div className="flex h-[650px]">

          {/* Sidebar */}

          <div className="w-16 bg-[#252526] border-r border-zinc-700 flex flex-col items-center py-5 gap-6">

            <span className="text-2xl">📁</span>
            <span className="text-2xl">🔍</span>
            <span className="text-2xl">🌿</span>
            <span className="text-2xl">▶️</span>
            <span className="text-2xl">⚙️</span>

          </div>

          {/* Explorer */}

          <div className="w-72 bg-[#1e1e1e] border-r border-zinc-700 p-4">

            <h3 className="text-zinc-400 text-xs mb-4 tracking-widest">
              EXPLORER
            </h3>

            <div className="space-y-3 text-sm">

              <div className="text-blue-400">
                📁 Princess.exe
              </div>

              <div className="ml-5 text-zinc-300">
                📄 loading.jsx
              </div>

              <div className="ml-5 text-zinc-300">
                📄 intro.jsx
              </div>

              <div className="ml-5 text-zinc-300">
                📄 bugs.jsx
              </div>

              <div className="ml-5 text-zinc-300">
                📄 hugs.jsx
              </div>

              <div className="ml-5 text-zinc-300">
                📄 terminal.jsx
              </div>

              <div className="ml-5 text-green-400 font-semibold">
                📄 princess.exe
              </div>

            </div>

          </div>

          {/* Editor */}

          <div className="flex-1 flex flex-col">

            <div className="h-10 bg-[#2d2d30] border-b border-zinc-700 flex items-center px-4">

              <span className="text-sm text-zinc-300">
                princess.exe
              </span>

            </div>

            <div className="flex-1 bg-[#1e1e1e] p-8 overflow-auto">

              <pre className="text-sm leading-8 text-zinc-300 overflow-x-auto">
{`const princess = {
  name: "Princess 👑",
  hugs: 120,
  happiness: Infinity,
  bugs: 18,
  mission: "Make Princess Smile ❤️"
};

function startMission() {
  console.log("Launching Princess.exe...");
}

startMission();`}
              </pre>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={runProject}
                className="
                mt-12
                px-10
                py-4
                rounded-xl
                bg-green-600
                hover:bg-green-500
                text-white
                font-bold
                text-lg
                shadow-xl
                "
              >
                ▶ Run Project
              </motion.button>

            </div>

            {/* Status Bar */}

            <div className="h-8 bg-[#007acc] flex items-center justify-between px-4 text-xs text-white">

              <span>main</span>

              <span>JavaScript</span>

              <span>UTF-8</span>

              <span>Ln 1, Col 1</span>

            </div>

          </div>

        </div>

      </motion.div>

    </div>
  );
}
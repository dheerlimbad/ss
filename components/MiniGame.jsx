"use client";

import { useEffect, useState } from "react";
import Bug from "./Bug";
import ProgressBar from "./ProgressBar";

const BUGS = [
  "RepeatBug_v2",
  "LazyReply.js",
  "EgoOverflow.dll",
  "ForgotToThink.ts",
  "Overthinking.exe",
  "WrongTiming.sys",
  "Didn'tListen.cpp",
  "Excuse.js",
  "ReplyLater.ts",
  "OopsAgain.exe",
];

export default function MiniGame({ next }) {
  const [bugs, setBugs] = useState([]);
  const [fixed, setFixed] = useState([]);

  useEffect(() => {
    const temp = BUGS.map((name, index) => ({
      id: index,
      name,
      x: Math.random() * 75 + 5,
      y: Math.random() * 65 + 5,
    }));

    setBugs(temp);
  }, []);

  useEffect(() => {
    if (fixed.length === BUGS.length) {
      setTimeout(next, 1500);
    }
  }, [fixed]);

  function fixBug(id) {
    if (fixed.includes(id)) return;

    setFixed((old) => [...old, id]);

    setBugs((old) =>
      old.filter((bug) => bug.id !== id)
    );
  }

  return (
    <div className="card">

      <h1 className="text-3xl font-bold">
        Fix The Bugs 🐛
      </h1>

      <p className="text-zinc-400 mt-3">
        Princess's smile depends on this build.
      </p>

      <ProgressBar
        fixed={fixed.length}
        total={BUGS.length}
      />

      <div
        className="relative mt-6 bg-zinc-950 rounded-xl border border-zinc-700 overflow-hidden"
        style={{
          height: "500px",
        }}
      >

        {bugs.map((bug) => (
          <Bug
            key={bug.id}
            bug={bug}
            onFix={fixBug}
          />
        ))}

        {bugs.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-4xl">
            🎉 Build Successful
          </div>
        )}

      </div>

    </div>
  );
}
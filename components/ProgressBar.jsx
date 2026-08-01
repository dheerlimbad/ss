"use client";

export default function ProgressBar({ fixed, total }) {
  const percent = (fixed / total) * 100;

  return (
    <div className="mb-6">

      <div className="flex justify-between mb-2 text-sm">

        <span>Progress</span>

        <span>{fixed}/{total}</span>

      </div>

      <div className="h-4 bg-zinc-800 rounded-full overflow-hidden">

        <div
          className="h-full bg-green-500 transition-all duration-500"
          style={{
            width: percent + "%",
          }}
        />

      </div>

    </div>
  );
}
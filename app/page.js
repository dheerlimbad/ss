"use client";

import { AudioProvider } from "@/components/AudioProvider";
import Final from "@/components/Final";

export default function Home() {
  return (
    <AudioProvider>
      <main className="w-full min-h-screen overflow-hidden bg-[#0d1117] text-white">
        <Final />
      </main>
    </AudioProvider>
  );
}
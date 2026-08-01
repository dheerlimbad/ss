"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
} from "react";

const AudioContext = createContext(null);

export function AudioProvider({ children }) {
  const musicRef = useRef(null);
  const popRef = useRef(null);
  const successRef = useRef(null);

  const unlocked = useRef(false);

  useEffect(() => {
    // CHANGE THESE PATHS IF YOUR FILE NAMES ARE DIFFERENT
    musicRef.current = new Audio("/music/bg.mp3");
    musicRef.current.loop = true;
    musicRef.current.preload = "auto";
    musicRef.current.volume = 0;

    popRef.current = new Audio("/sounds/click.mp3");
    popRef.current.preload = "auto";
    popRef.current.volume = 0.7;

    successRef.current = new Audio("/sounds/success.mp3");
    successRef.current.preload = "auto";
    successRef.current.volume = 0.8;

    return () => {
      musicRef.current?.pause();
    };
  }, []);

  async function unlockAudio() {
    if (unlocked.current) return;

    unlocked.current = true;

    const audios = [
      musicRef.current,
      popRef.current,
      successRef.current,
    ];

    for (const audio of audios) {
      if (!audio) continue;

      try {
        audio.volume = 0;
        await audio.play();
        audio.pause();
        audio.currentTime = 0;
      } catch {}

      if (audio === musicRef.current) {
        audio.volume = 0;
      } else if (audio === popRef.current) {
        audio.volume = 0.7;
      } else {
        audio.volume = 0.8;
      }
    }
  }

  async function fadeMusic() {
    if (!musicRef.current) return;

    try {
      musicRef.current.currentTime = 78;
      musicRef.current.volume = 0;

      await musicRef.current.play();

      let volume = 0;

      const timer = setInterval(() => {
        volume += 0.03;

        if (volume >= 0.45) {
          volume = 0.45;
          clearInterval(timer);
        }

        musicRef.current.volume = volume;
      }, 120);
    } catch {}
  }

  async function playPop() {
    if (!popRef.current) return;

    try {
      popRef.current.pause();
      popRef.current.currentTime = 0;
      await popRef.current.play();
    } catch {}
  }

  async function playSuccess() {
    if (!successRef.current) return;

    try {
      successRef.current.pause();
      successRef.current.currentTime = 0;
      await successRef.current.play();
    } catch {}
  }

  return (
    <AudioContext.Provider
      value={{
        unlockAudio,
        fadeMusic,
        playPop,
        playSuccess,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}
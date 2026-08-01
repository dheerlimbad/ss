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

  useEffect(() => {
    musicRef.current = new Audio("/music.mp3");
    musicRef.current.loop = true;
    musicRef.current.preload = "auto";
    musicRef.current.volume = 0;

    popRef.current = new Audio("/click.mp3");
    popRef.current.preload = "auto";
    popRef.current.volume = 0.6;

    successRef.current = new Audio("/success.mp3");
    successRef.current.preload = "auto";
    successRef.current.volume = 0.8;

    return () => {
      musicRef.current?.pause();
      musicRef.current = null;
      popRef.current = null;
      successRef.current = null;
    };
  }, []);

  async function fadeMusic() {
    const audio = musicRef.current;
    if (!audio) return;

    try {
      audio.pause();
      audio.currentTime = 78; // 1:18
      audio.volume = 0;

      await audio.play();

      let volume = 0;

      const fade = setInterval(() => {
        volume += 0.03;

        if (!musicRef.current) {
          clearInterval(fade);
          return;
        }

        musicRef.current.volume = Math.min(volume, 0.45);

        if (volume >= 0.45) {
          clearInterval(fade);
        }
      }, 120);
    } catch (err) {
      console.error("Music playback failed:", err);
    }
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

  function stopMusic() {
    if (!musicRef.current) return;

    musicRef.current.pause();
    musicRef.current.currentTime = 0;
  }

  return (
    <AudioContext.Provider
      value={{
        fadeMusic,
        playPop,
        playSuccess,
        stopMusic,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}
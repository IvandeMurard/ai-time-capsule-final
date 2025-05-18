"use client";

import React, { createContext, useContext, useRef, useState, useEffect } from "react";

// Types
interface AudioManagerContextProps {
  play: (sound: string) => void;
  mute: boolean;
  setMute: (mute: boolean) => void;
}

const AudioManagerContext = createContext<AudioManagerContextProps | undefined>(undefined);

const SOUNDS: Record<string, string> = {
  ambience: "/ambience.mp3",
  bougie: "/bougie.mp3",
  seal: "/seal.wav",
  click: "/click.wav",
  cachet: "/cachet.wav",
};

export function AudioManagerProvider({ children }: { children: React.ReactNode }) {
  const [mute, setMute] = useState(false);
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});

  // Préchargement des sons
  useEffect(() => {
    Object.entries(SOUNDS).forEach(([key, src]) => {
      const audio = new window.Audio(src);
      audioRefs.current[key] = audio;
      if (key === "ambience" || key === "bougie") {
        audio.loop = true;
      }
    });
    return () => {
      Object.values(audioRefs.current).forEach(audio => audio?.pause());
    };
  }, []);

  // Mute/unmute
  useEffect(() => {
    Object.values(audioRefs.current).forEach(audio => {
      if (audio) audio.muted = mute;
    });
  }, [mute]);

  const play = (sound: string) => {
    const audio = audioRefs.current[sound];
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  return (
    <AudioManagerContext.Provider value={{ play, mute, setMute }}>
      {children}
    </AudioManagerContext.Provider>
  );
}

export function useAudioManager() {
  const ctx = useContext(AudioManagerContext);
  if (!ctx) throw new Error("useAudioManager must be used within AudioManagerProvider");
  return ctx;
} 

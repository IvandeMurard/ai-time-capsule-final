"use client";

import { useEffect, useRef } from "react";

export default function VoiceDictation({ onResult }: { onResult: (text: string) => void }) {
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) return;
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'fr-FR';
    recognition.interimResults = false;
    recognition.onresult = (e: any) => {
      const transcript = e.results[0][0].transcript;
      onResult(transcript);
    };
    recognitionRef.current = recognition;
  }, [onResult]);

  const start = () => {
    recognitionRef.current?.start();
  };

  return (
    <button type="button" onClick={start}>
      🎤 Démarrer la dictée
    </button>
  );
} 

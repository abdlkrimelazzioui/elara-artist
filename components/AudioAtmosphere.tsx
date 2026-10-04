"use client";

import React, { useEffect, useRef, useState } from "react";

interface AudioAtmosphereProps {
  trackTitle?: string;
  tuning?: string;
}

export default function AudioAtmosphere({
  trackTitle = "Resonant Chamber IV (432Hz Ambient Overtone)",
  tuning = "A = 432 Hz"
}: AudioAtmosphereProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.25);
  const [currentTone, setCurrentTone] = useState("Fundamental Drone (108Hz)");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const frequencies = [108, 162, 216, 324, 432]; // Harmonic series overtones

  const toggleSound = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  const startAudio = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(volume, ctx.currentTime + 1.2);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      const analyser = ctx.createAnalyser();
      analyser.fftSize = 64;
      masterGain.connect(analyser);
      analyserRef.current = analyser;

      // Create rich vocal formant-like chord cluster
      oscillatorsRef.current = [];

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        // Sine and triangle mixture for organic breath/voice feel
        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Subtle slow LFO vibrato
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.2 + idx * 0.1, ctx.currentTime);
        lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
        lfo.connect(osc.frequency);
        lfo.start();

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(600 + idx * 250, ctx.currentTime);
        filter.Q.setValueAtTime(3.0, ctx.currentTime);

        const relativeVol = 0.3 / (idx + 1);
        oscGain.gain.setValueAtTime(relativeVol, ctx.currentTime);

        osc.connect(filter);
        filter.connect(oscGain);
        oscGain.connect(masterGain);

        osc.start();
        oscillatorsRef.current.push(osc);
      });

      setIsPlaying(true);
      setCurrentTone("Harmonic Vocal Drone · 5 Overtone Clusters");
      drawWaveform();
    } catch (err) {
      console.error("Audio initialization error:", err);
    }
  };

  const stopAudio = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.6);
      setTimeout(() => {
        oscillatorsRef.current.forEach((osc) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {
            // Ignore if already disconnected
          }
        });
        oscillatorsRef.current = [];
        if (audioCtxRef.current) {
          audioCtxRef.current.close();
          audioCtxRef.current = null;
        }
        setIsPlaying(false);
      }, 650);
    } else {
      setIsPlaying(false);
    }

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  const drawWaveform = () => {
    const canvas = canvasRef.current;
    if (!canvas || !analyserRef.current) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const render = () => {
      if (!isPlaying || !analyserRef.current) return;
      animationFrameRef.current = requestAnimationFrame(render);
      analyserRef.current.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / 255) * canvas.height;

        // Minimal silver/gold lines
        ctx.fillStyle = i % 2 === 0 ? "rgba(244, 242, 237, 0.75)" : "rgba(201, 168, 106, 0.65)";
        ctx.fillRect(x, canvas.height - barHeight, barWidth - 1, barHeight);

        x += barWidth;
      }
    };

    render();
  };

  useEffect(() => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(volume, audioCtxRef.current.currentTime);
    }
  }, [volume]);

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4 rounded-none border border-white/15 bg-black/85 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:border-white/40">
      {/* Soundwave canvas */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <button
            onClick={toggleSound}
            data-cursor={isPlaying ? "MUTE" : "UNMUTE"}
            className="flex h-8 w-8 items-center justify-center rounded-none border border-white/20 bg-white/5 text-white transition-colors hover:border-white hover:bg-white hover:text-black"
            aria-label={isPlaying ? "Mute soundscape" : "Play ambient vocal soundscape"}
          >
            {isPlaying ? (
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </button>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-mono-meta text-[10px] text-white/50">ACOUSTIC SPACE</span>
              {isPlaying && (
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              )}
            </div>
            <p className="font-mono-meta text-[11px] text-white tracking-wider truncate max-w-[170px]">
              {isPlaying ? currentTone : "Soundscape: Muted"}
            </p>
          </div>
        </div>
      </div>

      {/* Visualizer canvas */}
      <canvas
        ref={canvasRef}
        width={60}
        height={24}
        className="hidden sm:block border-l border-white/10 pl-2 opacity-80"
      />

      {/* Tuning tag */}
      <div className="hidden md:flex flex-col items-end border-l border-white/10 pl-3">
        <span className="font-mono-meta text-[9px] text-white/40">SYSTEM TUNING</span>
        <span className="font-mono-meta text-[10px] text-amber-200/80">{tuning}</span>
      </div>
    </div>
  );
}

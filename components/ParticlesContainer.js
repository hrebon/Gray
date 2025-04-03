"use client";  // 🚀 Force client-side rendering

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("🟢 Particles Initialized");
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("🟢 Particles Loaded", container);
  }, []);

  return (
    <div className="absolute w-full h-full">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: true },
          // background: { color: { value:''   },
          fpsLimit: 220,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#e68e2e" },
            links: {
              color: "#f5d393",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 2,
            },
            collisions: { enable: true },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesContainer;

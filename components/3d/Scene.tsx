"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
} from "@react-three/drei";

import {
  EffectComposer,
  Bloom,
} from "@react-three/postprocessing";

import Earth from "./Earth";



export default function Scene() {
  return (
    <Canvas
      dpr={[0.8, 1]}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
      }}
      camera={{
        position: [0, 0, 5],
        fov: 45,
        near: 0.1,
        far: 100,
      }}
      frameloop="always"
    >

      {/* Lighting */}

      <ambientLight
        intensity={0.35}
      />

      <directionalLight
        position={[3, 3, 4]}
        intensity={0.8}
      />


      {/* Background Stars */}

      <Stars
        count={160}
        radius={40}
        depth={25}
        factor={1.5}
        saturation={0}
        fade
        speed={0.15}
      />


      {/* Earth */}

      <Earth />


      {/* Lightweight Bloom */}

      <EffectComposer
        multisampling={0}
      >
        <Bloom
          intensity={0.45}
          luminanceThreshold={0.85}
          luminanceSmoothing={0.25}
          mipmapBlur
        />
      </EffectComposer>


      {/* Controls */}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate
        autoRotateSpeed={0.25}
      />

    </Canvas>
  );
}
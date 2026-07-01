"use client";

import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Earth from "./Earth";

import {
  PerspectiveCamera,
  OrbitControls,
  Stars,
  Sparkles,
} from "@react-three/drei";


export default function Scene() {
  return (
    <Canvas
  dpr={[1, 2]}
  camera={{ position: [0, 0, 5], fov: 45 }}
  style={{ width: "100%", height: "100%" }}
  gl={{ antialias: true, alpha: true }}
>
      {/* Camera */}

      <PerspectiveCamera
        makeDefault
        position={[0, 0, 5]}
        fov={45}
      />

      <color
        attach="background"
        args={["#04070b"]}
      />

      {/* Lights */}

      <ambientLight intensity={0.25} />

      <directionalLight
        position={[4, 5, 5]}
        intensity={3}
      />

      <pointLight
        position={[0, 0, 5]}
        intensity={35}
        color="#22d3ee"
      />

      <pointLight
        position={[-5, -2, -4]}
        intensity={10}
        color="#0044ff"
      />

      <pointLight
        position={[5, 2, -5]}
        intensity={10}
        color="#44ffff"
      />

      {/* Stars */}

      <Stars
        radius={250}
        depth={120}
        count={9000}
        factor={6}
        saturation={0}
        fade
        speed={0.4}
      />

      {/* Space Dust */}

      <Sparkles
        count={350}
        size={3}
        scale={[15, 15, 15]}
        speed={0.35}
        color="#22d3ee"
      />

      {/* Earth */}

      <group rotation={[0.15, 0.4, 0]}>
        <Earth />
      </group>

      {/* Bloom */}

      <EffectComposer>

        <Bloom
          intensity={2.4}
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
        />

      </EffectComposer>

      {/* Controls */}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.35}
      />

    </Canvas>
  );
}
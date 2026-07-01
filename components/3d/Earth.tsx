"use client";

import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import Network from "./Network";

export default function Earth() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.0015;
  });

  return (
    <Float
      speed={1.2}
      rotationIntensity={0.25}
      floatIntensity={0.25}
    >
      <group ref={meshRef}>
                {/* Core Sphere */}

        <mesh>
          <sphereGeometry args={[1.45, 256, 256]} />

          <meshStandardMaterial
            color="#050b10"
            metalness={1}
            roughness={0.12}
            emissive="#00d9ff"
            emissiveIntensity={1.2}
          />
        </mesh>

        {/* Inner Glow Layer */}

        <mesh scale={1.03}>
          <sphereGeometry args={[1.45, 128, 128]} />

          <meshBasicMaterial
            color="#22d3ee"
            transparent
            opacity={0.08}
          />
        </mesh>

        {/* Atmosphere Layer */}

        <mesh scale={1.08}>
          <sphereGeometry args={[1.45, 128, 128]} />

          <meshBasicMaterial
            color="#00d9ff"
            transparent
            opacity={0.05}
            side={THREE.BackSide}
          />
        </mesh>

        {/* Holographic Ring 1 */}

        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.65, 0.01, 32, 400]} />

          <meshBasicMaterial
            color="#22d3ee"
            transparent
            opacity={0.7}
          />
        </mesh>

        {/* Holographic Ring 2 (Tilted) */}

        <mesh rotation={[0.8, 0.3, 0.6]}>
          <torusGeometry args={[1.85, 0.008, 32, 400]} />

          <meshBasicMaterial
            color="#00d9ff"
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* Energy Core Pulse */}

        <mesh scale={1.12}>
          <sphereGeometry args={[1.45, 64, 64]} />

          <meshBasicMaterial
            color="#00f5ff"
            transparent
            opacity={0.03}
          />
        </mesh>
                {/* Final Outer Glow Shell */}

        <mesh scale={1.2}>
          <sphereGeometry args={[1.45, 64, 64]} />

          <meshBasicMaterial
            color="#00d9ff"
            transparent
            opacity={0.02}
          />
        </mesh>

        {/* Subtle Energy Dust Layer */}

        <points>
          <sphereGeometry args={[2.2, 64, 64]} />

          <pointsMaterial
            color="#22d3ee"
            size={0.015}
            transparent
            opacity={0.35}
          />
        </points>

        {/* Network Layer */}

        <Network />

      </group>
    </Float>
  );
}

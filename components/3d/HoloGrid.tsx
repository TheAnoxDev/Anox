"use client";

import { Line } from "@react-three/drei";

const rings = [1.55, 1.72, 1.89];

export default function HoloGrid() {
  return (
    <>
      {rings.map((r, i) => (
        <group
          key={i}
          rotation={[
            i * 0.55,
            i * 0.85,
            i * 0.35,
          ]}
        >
          <mesh>

            <torusGeometry
              args={[
                r,
                0.008,
                32,
                300,
              ]}
            />

            <meshBasicMaterial
              color="#22d3ee"
              transparent
              opacity={0.45}
            />

          </mesh>

        </group>
      ))}

      {Array.from({ length: 12 }).map((_, i) => (
        <Line
          key={i}
          color="#22d3ee"
          transparent
          opacity={0.28}
          lineWidth={1}
          points={[
            [
              Math.cos((i / 12) * Math.PI * 2) * 1.55,
              -1.45,
              Math.sin((i / 12) * Math.PI * 2) * 1.55,
            ],
            [
              Math.cos((i / 12) * Math.PI * 2) * 1.55,
              1.45,
              Math.sin((i / 12) * Math.PI * 2) * 1.55,
            ],
          ]}
        />
      ))}
    </>
  );
}
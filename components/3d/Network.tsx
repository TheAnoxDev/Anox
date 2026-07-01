"use client";

import { Line } from "@react-three/drei";

const points: [number, number, number][] = [
  [0.00, 1.30, 0.10],
  [0.90, 0.90, 0.80],
  [1.30, 0.10, 0.60],
  [1.00, -0.90, 0.40],
  [0.20, -1.30, 0.20],
  [-0.90, -0.90, 0.70],
  [-1.30, 0.20, 0.40],
  [-0.90, 1.00, 0.60],
];

const links: [number, number][] = [
  [0,1],
  [1,2],
  [2,3],
  [3,4],
  [4,5],
  [5,6],
  [6,7],
  [7,0],

  [0,2],
  [1,3],
  [2,4],
  [3,5],
  [4,6],
  [5,7],
  [6,0],
];

export default function Network() {
  return (
    <group>

      {links.map(([a, b], i) => (
        <Line
          key={i}
          points={[points[a], points[b]]}
          color="#22d3ee"
          lineWidth={1.2}
          transparent
          opacity={0.55}
        />
      ))}

      {points.map((p, i) => (
        <mesh
          key={i}
          position={p}
        >
          <sphereGeometry args={[0.035, 20, 20]} />

          <meshBasicMaterial
            color="#67e8f9"
          />
        </mesh>
      ))}

    </group>
  );
}
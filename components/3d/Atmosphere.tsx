"use client";

export default function Atmosphere() {
  return (
    <>
      <mesh scale={1.08}>
        <sphereGeometry args={[1.42,128,128]} />

        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.08}
          side={2}
        />
      </mesh>

      <mesh scale={1.18}>
        <sphereGeometry args={[1.42,64,64]} />

        <meshBasicMaterial
          color="#00d9ff"
          transparent
          opacity={0.03}
          side={2}
        />
      </mesh>
    </>
  );
}
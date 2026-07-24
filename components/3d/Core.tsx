"use client";

import { MeshTransmissionMaterial } from "@react-three/drei";

export default function Core() {
  return (
    <group>

      {/* Main Glass Core */}
      <mesh>
        <sphereGeometry args={[1.42, 96, 96]} />

        <MeshTransmissionMaterial
          backside
          samples={6}
          resolution={512}
          thickness={1.2}
          roughness={0.06}
          transmission={1}
          ior={1.45}
          chromaticAberration={0.05}
          anisotropy={0.25}
          distortion={0.1}
          distortionScale={0.25}
          temporalDistortion={0.15}
          color="#00d9ff"
        />
      </mesh>


      {/* Inner Energy Layer */}
      <mesh scale={0.96}>
        <sphereGeometry args={[1.42, 64, 64]} />

        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.08}
        />
      </mesh>


      {/* Core Light */}
      <pointLight
        color="#00d9ff"
        intensity={2}
        distance={4}
      />

    </group>
  );
}
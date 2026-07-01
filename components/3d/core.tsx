"use client";

import { MeshTransmissionMaterial } from "@react-three/drei";

export default function Core() {
  return (
    <mesh>
      <sphereGeometry args={[1.42, 256, 256]} />

      <MeshTransmissionMaterial
        backside
        samples={12}
        resolution={1024}
        thickness={1.6}
        roughness={0.08}
        transmission={1}
        ior={1.45}
        chromaticAberration={0.08}
        anisotropy={0.3}
        distortion={0.15}
        distortionScale={0.4}
        temporalDistortion={0.25}
        color="#00d9ff"
      />
    </mesh>
  );
}
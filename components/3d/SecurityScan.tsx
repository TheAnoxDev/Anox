"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function SecurityScan() {

  const scanRef = useRef<THREE.Mesh | null>(null);


  useFrame(({ clock }) => {

    const mesh = scanRef.current;

    if (!mesh)
      return;


    const time = clock.elapsedTime;


    mesh.position.y =
      Math.sin(time * 1.5) * 1.3;


    const material =
      mesh.material as THREE.MeshBasicMaterial;


    material.opacity =
      0.35 + Math.sin(time * 4) * 0.1;

  });



  return (

    <mesh
      ref={scanRef}
      rotation={[
        Math.PI / 2,
        0,
        0
      ]}
    >

      <planeGeometry
        args={[
          2.9,
          0.025
        ]}
      />


      <meshBasicMaterial

        color="#22d3ee"

        transparent

        opacity={0.4}

        depthWrite={false}

        blending={
          THREE.AdditiveBlending
        }

      />

    </mesh>

  );
}
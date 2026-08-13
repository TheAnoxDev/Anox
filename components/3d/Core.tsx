"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";


export default function Core() {

  const coreRef = useRef<THREE.Mesh | null>(null);


  useFrame(({ clock }) => {

    const mesh = coreRef.current;

    if (!mesh)
      return;


    mesh.rotation.y =
      clock.elapsedTime * 0.12;


    const pulse =
      1 +
      Math.sin(clock.elapsedTime * 2) * 0.02;


    mesh.scale.setScalar(pulse);

  });



  return (

    <>

      {/* Main AI Core */}

      <mesh ref={coreRef}>

        <sphereGeometry
          args={[
            1.4,
            48,
            48
          ]}
        />


        <meshPhysicalMaterial

          color="#020617"

          metalness={0.15}

          roughness={0.08}

          transmission={0.15}

          thickness={0.5}

          clearcoat={1}

          clearcoatRoughness={0.1}

          emissive="#00eaff"

          emissiveIntensity={0.5}

        />

      </mesh>



      {/* Inner Energy Layer */}

      <mesh scale={0.96}>

        <sphereGeometry
          args={[
            1.4,
            32,
            32
          ]}
        />


        <meshBasicMaterial

          color="#22d3ee"

          transparent

          opacity={0.08}

          depthWrite={false}

        />

      </mesh>



      {/* Core Light */}

      <pointLight

        color="#22d3ee"

        intensity={1.8}

        distance={6}

      />

    </>

  );

}
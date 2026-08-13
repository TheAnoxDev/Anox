"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";


export default function SecurityPulse() {

  const ringRef = useRef<THREE.Mesh | null>(null);


  useFrame(({clock})=>{

    const ring = ringRef.current;

    if(!ring)
      return;


    const t =
      (clock.elapsedTime * 0.35) % 1;


    ring.scale.setScalar(
      1 + t * 1.8
    );


    const material =
      ring.material as THREE.MeshBasicMaterial;


    material.opacity =
      0.55 - t * 0.55;


  });



  return (

    <mesh
      ref={ringRef}
    >

      <torusGeometry

        args={[
          1.42,
          0.008,
          16,
          128
        ]}

      />


      <meshBasicMaterial

        color="#00eaff"

        transparent

        opacity={0.55}

        blending={
          THREE.AdditiveBlending
        }

        depthWrite={false}

      />


    </mesh>

  );

}
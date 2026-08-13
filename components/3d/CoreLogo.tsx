"use client";

import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";


export default function CoreLogo() {

  const ref = useRef<THREE.Mesh>(null);


  useFrame(({ clock }) => {

    if (!ref.current)
      return;


    const pulse =
      1 +
      Math.sin(clock.elapsedTime * 2) * 0.05;


    ref.current.scale.setScalar(pulse);

  });



  return (

    <Text

      ref={ref}

      position={[
        0,
        0,
        1.43
      ]}

      fontSize={0.35}

      letterSpacing={0.15}

      color="#67e8f9"

      anchorX="center"

      anchorY="middle"

    >

      ANOX


      <meshBasicMaterial

        color="#22d3ee"

        transparent

        opacity={0.95}

        toneMapped={false}

      />


    </Text>

  );

}
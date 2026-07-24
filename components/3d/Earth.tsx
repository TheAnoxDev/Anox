"use client";

import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import Core from "./Core";
import Atmosphere from "./Atmosphere";
import Network from "./Network";
import HoloGrid from "./HoloGrid";


export default function Earth() {


  const group =
    useRef<THREE.Group>(null);


  const ring1 =
    useRef<THREE.Mesh>(null);


  const ring2 =
    useRef<THREE.Mesh>(null);



  useFrame((_, delta)=>{


    if(group.current){

      group.current.rotation.y +=
        delta * 0.15;

    }


    if(ring1.current){

      ring1.current.rotation.z +=
        delta * 0.35;

    }


    if(ring2.current){

      ring2.current.rotation.x +=
        delta * 0.2;

    }


  });



  return (

    <Float

      speed={1}

      rotationIntensity={0.12}

      floatIntensity={0.2}

    >


      <group ref={group}>



        {/* Main AI Core */}

        <Core />



        {/* Energy Atmosphere */}

        <Atmosphere />



        {/* Holographic Grid */}

        <HoloGrid />



        {/* Orbital Ring 01 */}


        <mesh

          ref={ring1}

          rotation={[
            Math.PI / 2,
            0,
            0
          ]}

        >

          <torusGeometry

            args={[
              1.7,
              0.01,
              24,
              160
            ]}

          />


          <meshBasicMaterial

            color="#22d3ee"

            transparent

            opacity={0.65}

          />

        </mesh>




        {/* Orbital Ring 02 */}


        <mesh

          ref={ring2}

          rotation={[
            0.8,
            0.4,
            0.7
          ]}

        >


          <torusGeometry

            args={[
              1.9,
              0.008,
              24,
              160
            ]}

          />


          <meshBasicMaterial

            color="#00d9ff"

            transparent

            opacity={0.35}

          />


        </mesh>




        {/* Energy Dust */}

        <points>


          <sphereGeometry

            args={[
              2.25,
              48,
              48
            ]}

          />


          <pointsMaterial

            color="#22d3ee"

            size={0.012}

            transparent

            opacity={0.3}

          />


        </points>





        {/* Cyber Intelligence Network */}

        <Network />


      </group>


    </Float>

  );

}
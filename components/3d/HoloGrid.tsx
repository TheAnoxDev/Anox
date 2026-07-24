"use client";

import { Line } from "@react-three/drei";
import { useMemo } from "react";


const RINGS = [
  1.58,
  1.75,
  1.92,
];


export default function HoloGrid() {


  const lines = useMemo(()=>{

    return Array.from({length:16}).map((_,i)=>{

      const angle =
        (i / 16) * Math.PI * 2;


      return [

        [
          Math.cos(angle) * 1.58,
          -1.5,
          Math.sin(angle) * 1.58,
        ],

        [
          Math.cos(angle) * 1.58,
          1.5,
          Math.sin(angle) * 1.58,
        ]

      ];

    });

  },[]);



  return (

    <group>


      {/* Holographic Latitude Rings */}

      {RINGS.map((radius,index)=>(

        <mesh

          key={radius}

          rotation={[
            index * 0.45,
            index * 0.65,
            index * 0.25
          ]}

        >

          <torusGeometry

            args={[
              radius,
              0.006,
              24,
              160
            ]}

          />


          <meshBasicMaterial

            color="#22d3ee"

            transparent

            opacity={
              0.25 - index * 0.04
            }

          />


        </mesh>

      ))}




      {/* Vertical Energy Grid */}

      {lines.map((points,index)=>(


        <Line

          key={index}

          points={points}

          color="#22d3ee"

          transparent

          opacity={0.18}

          lineWidth={0.8}

        />


      ))}



      {/* Core Scan Ring */}

      <mesh

        rotation={[
          Math.PI/2,
          0,
          0
        ]}

      >

        <torusGeometry

          args={[
            1.46,
            0.004,
            16,
            128
          ]}

        />


        <meshBasicMaterial

          color="#67e8f9"

          transparent

          opacity={0.7}

        />


      </mesh>


    </group>

  );

}
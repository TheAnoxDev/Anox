"use client";

import { Line } from "@react-three/drei";


const rings = [
  1.55,
  1.72,
  1.89
];


export default function HoloGrid() {


  return (

    <>

      {rings.map((r, i) => (

        <group
          key={i}
          rotation={[
            i * 0.55,
            i * 0.85,
            i * 0.35
          ]}
        >

          <mesh>

            <torusGeometry
              args={[
                r,
                0.008,
                24,
                160
              ]}
            />

            <meshBasicMaterial

              color="#22d3ee"

              transparent

              opacity={0.45}

            />

          </mesh>

        </group>

      ))}



      {Array.from({
        length: 12
      }).map((_, index) => {


        const angle =
          (index / 12) * Math.PI * 2;


        const x =
          Math.cos(angle) * 1.55;


        const z =
          Math.sin(angle) * 1.55;



        const points: [
          number,
          number,
          number
        ][] = [

          [
            x,
            -1.45,
            z
          ],

          [
            x,
            1.45,
            z
          ]

        ];



        return (

          <Line

            key={index}

            points={points}

            color="#22d3ee"

            transparent

            opacity={0.28}

            lineWidth={1}

          />

        );

      })}



    </>

  );

}
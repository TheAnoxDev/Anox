"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Line } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useMemo, useRef } from "react";
import * as THREE from "three";


function GlobeModel() {

  const globeRef = useRef<THREE.Group>(null);


  useFrame((_, delta) => {

    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.08;
    }

  });



  const nodes = useMemo(() => {

    const points: THREE.Vector3[] = [];

    for (let i = 0; i < 90; i++) {

      const phi = Math.acos(
        -1 + (2 * i) / 90
      );

      const theta =
        Math.sqrt(90 * Math.PI) * phi;


      points.push(

        new THREE.Vector3(

          Math.cos(theta) * Math.sin(phi),
          Math.sin(theta) * Math.sin(phi),
          Math.cos(phi)

        )
        .normalize()

      );

    }


    return points;

  }, []);




  const connections = useMemo(() => {

    const lines: {
      start: THREE.Vector3;
      end: THREE.Vector3;
    }[] = [];


    for (let i = 0; i < nodes.length - 1; i++) {

      if (i % 3 === 0) {

        lines.push({

          start: nodes[i],
          end: nodes[i + 1],

        });

      }

    }


    return lines;


  }, [nodes]);




  return (

    <group ref={globeRef}>


      {/* Main Cyber Sphere */}

      <mesh>

        <sphereGeometry
          args={[1,64,64]}
        />

        <meshBasicMaterial

          color="#06b6d4"

          wireframe

          transparent

          opacity={0.18}

        />

      </mesh>




      {/* Inner AI Core */}

      <mesh>

        <sphereGeometry
          args={[0.96,32,32]}
        />


        <meshBasicMaterial

          color="#0369a1"

          transparent

          opacity={0.08}

        />

      </mesh>





      {/* Threat Intelligence Nodes */}

      {nodes.map((node,index)=>(

        <mesh

          key={index}

          position={[
            node.x,
            node.y,
            node.z
          ]}

        >

          <sphereGeometry
            args={[
              0.018,
              12,
              12
            ]}
          />


          <meshStandardMaterial

            color="#22d3ee"

            emissive="#06b6d4"

            emissiveIntensity={3}

          />


        </mesh>

      ))}






      {/* Cyber Network Connections */}

      {connections.map((line,index)=>(


        <Line

          key={index}

          points={[
            line.start,
            line.end
          ]}

          color="#22d3ee"

          transparent

          opacity={0.25}

          lineWidth={0.7}

        />


      ))}






      {/* Orbit Rings */}


      <mesh
        rotation={[
          Math.PI / 3,
          0,
          0
        ]}
      >

        <torusGeometry

          args={[
            1.35,
            0.006,
            16,
            128
          ]}

        />


        <meshBasicMaterial

          color="#06b6d4"

          transparent

          opacity={0.35}

        />

      </mesh>





      <mesh

        rotation={[
          -Math.PI / 4,
          0.6,
          0
        ]}

      >

        <torusGeometry

          args={[
            1.55,
            0.004,
            16,
            128
          ]}

        />


        <meshBasicMaterial

          color="#38bdf8"

          transparent

          opacity={0.25}

        />

      </mesh>



    </group>

  );

}







export default function HeroGlobe() {


  return (

    <div

      className="
      w-[320px]
      h-[320px]

      sm:w-[420px]
      sm:h-[420px]

      lg:w-[520px]
      lg:h-[520px]
      "

    >


      <Canvas


        camera={{

          position:[
            0,
            0,
            3
          ],

          fov:45

        }}


        dpr={[1,2]}


        gl={{

          alpha:true,

          antialias:true,

          powerPreference:
          "high-performance"

        }}


      >


        <ambientLight
          intensity={1.5}
        />



        <GlobeModel />



        <Stars

          radius={5}

          depth={3}

          count={500}

          factor={2}

          fade

          speed={0.3}

        />




        <EffectComposer>


          <Bloom

            intensity={1.2}

            luminanceThreshold={0.2}

            luminanceSmoothing={0.9}

          />


        </EffectComposer>



      </Canvas>


    </div>

  );

}
"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";


const radius = 1.43;


function Node({
  position,
  delay
}:{
  position:[number,number,number],
  delay:number
}){

  const ref = useRef<THREE.Mesh | null>(null);


  useFrame(({clock})=>{

    const mesh = ref.current;

    if(!mesh)
      return;


    const pulse =
      1 +
      Math.sin(
        clock.elapsedTime * 3 + delay
      ) * 0.35;


    mesh.scale.setScalar(pulse);


  });



  return (

    <mesh
      ref={ref}
      position={position}
    >

      <sphereGeometry
        args={[
          0.025,
          12,
          12
        ]}
      />


      <meshBasicMaterial

        color="#67e8f9"

      />


    </mesh>

  );

}



export default function SecurityNodes(){


  const nodes = useMemo(()=>{

    const points:
    [number,number,number][] = [];


    const data = [
      [0.3,0.7],
      [1.2,1.1],
      [2.5,0.8],
      [3.8,1.4],
      [4.5,2.2],
      [5.4,1.8],
      [0.8,2.8],
      [2.1,2.5],
      [3.4,2.9],
      [5.8,2.7],
    ];


    data.forEach(([theta,phi])=>{

      const x =
        radius *
        Math.sin(phi) *
        Math.cos(theta);


      const y =
        radius *
        Math.cos(phi);


      const z =
        radius *
        Math.sin(phi) *
        Math.sin(theta);


      points.push([
        x,
        y,
        z
      ]);

    });


    return points;


  },[]);



  return (

    <>

      {nodes.map((p,i)=>(

        <Node

          key={i}

          position={p}

          delay={i}

        />

      ))}


    </>

  );

}
"use client";

import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";


const connections = [

  [
    [0.35,0.95,0.95],
    [0.95,0.55,1.05]
  ],

  [
    [-0.5,0.8,1.05],
    [-0.95,0.25,1.15]
  ],

  [
    [0.8,-0.45,1.05],
    [0.25,-0.95,1.05]
  ],

  [
    [-0.8,-0.6,1.05],
    [-0.2,-1.05,0.95]
  ],

  [
    [0.9,0.2,1.1],
    [0.3,0.85,1.05]
  ]

] as [
[number,number,number],
[number,number,number]
][];



function DataPulse({
  start,
  end,
  delay
}:{
  start:[number,number,number],
  end:[number,number,number],
  delay:number
}){


  const ref =
  useRef<THREE.Mesh | null>(null);



  useFrame(({clock})=>{

    const mesh =
    ref.current;

    if(!mesh)
      return;


    const t =
    (clock.elapsedTime * 0.5 + delay)%1;


    mesh.position.lerpVectors(
      new THREE.Vector3(...start),
      new THREE.Vector3(...end),
      t
    );


  });



  return (

    <mesh ref={ref}>

      <sphereGeometry
        args={[
          0.025,
          8,
          8
        ]}
      />


      <meshBasicMaterial

        color="#67e8f9"

      />


    </mesh>

  );

}



export default function DataNetwork(){


return (

<>

{

connections.map((line,i)=>(

<Line

key={i}

points={[
 line[0],
 line[1]
]}

color="#22d3ee"

lineWidth={1}

transparent

opacity={0.35}

/>

))

}



{

connections.map((line,i)=>(

<DataPulse

key={"pulse-"+i}

start={line[0]}

end={line[1]}

delay={i*0.2}

/>

))

}


</>

);


}
"use client";

import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";


const points: [number, number, number][] = [

  [0.00, 1.30, 0.10],
  [0.90, 0.90, 0.80],
  [1.30, 0.10, 0.60],
  [1.00,-0.90,0.40],

  [0.20,-1.30,0.20],
  [-0.90,-0.90,0.70],
  [-1.30,0.20,0.40],
  [-0.90,1.00,0.60],

];



const links:[number,number][] = [

[0,1],
[1,2],
[2,3],
[3,4],
[4,5],
[5,6],
[6,7],
[7,0],

[0,2],
[1,3],
[2,4],
[3,5],
[4,6],
[5,7],
[6,0],

];



function Node({
 position
}:{
 position:[number,number,number]
}){


const ref =
useRef<THREE.Mesh>(null);



useFrame(({clock})=>{


if(!ref.current)
return;


const pulse =
1 +
Math.sin(clock.elapsedTime*3)
*
0.25;


ref.current.scale.setScalar(
pulse
);


});



return (

<mesh

ref={ref}

position={position}

>


<sphereGeometry

args={[
0.045,
16,
16
]}

/>


<meshBasicMaterial

color="#67e8f9"

/>


</mesh>

);

}





export default function Network(){


return (

<group>



{/* Connections */}


{links.map(([a,b],i)=>(


<Line


key={i}


points={[
points[a],
points[b]
]}


color="#22d3ee"


lineWidth={1}


transparent


opacity={
i % 3 === 0
?
0.65
:
0.35
}


/>


))}





{/* Nodes */}


{points.map((p,i)=>(

<Node

key={i}

position={p}

/>

))}





</group>


);

}
"use client";


import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";



export default function Network(){


const ref =
useRef<THREE.Mesh>(null);



useFrame(()=>{


if(ref.current){

ref.current.rotation.y += 0.0015;

}


});



return (


<mesh

ref={ref}

scale={1.01}

>


<sphereGeometry

args={[
1.405,
24,
24
]}

/>


<meshBasicMaterial

color="#22d3ee"

wireframe

transparent

opacity={0.15}

/>



</mesh>


);


}
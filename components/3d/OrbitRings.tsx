"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";


export default function OrbitRings(){


const ring1 = useRef<THREE.Mesh>(null);
const ring2 = useRef<THREE.Mesh>(null);
const ring3 = useRef<THREE.Mesh>(null);



useFrame(({clock})=>{


const t = clock.elapsedTime;



if(ring1.current){

ring1.current.rotation.x = 
Math.PI / 2.5;

ring1.current.rotation.z =
t * 0.15;

}



if(ring2.current){

ring2.current.rotation.y =
Math.PI / 3;

ring2.current.rotation.x =
t * 0.12;

}



if(ring3.current){

ring3.current.rotation.x =
Math.PI / 1.8;

ring3.current.rotation.z =
-t * 0.1;

}


});



return (

<group>



{/* Main Orbit */}

<mesh ref={ring1}>


<torusGeometry

args={[
1.85,
0.008,
16,
128
]}

/>


<meshBasicMaterial

color="#22d3ee"

transparent

opacity={0.35}

/>


</mesh>





{/* Secondary Orbit */}

<mesh ref={ring2}>


<torusGeometry

args={[
2.05,
0.006,
16,
128
]}

/>


<meshBasicMaterial

color="#00e5ff"

transparent

opacity={0.25}

/>


</mesh>






{/* Outer Orbit */}

<mesh ref={ring3}>


<torusGeometry

args={[
2.25,
0.004,
16,
128
]}

/>


<meshBasicMaterial

color="#67e8f9"

transparent

opacity={0.18}

/>


</mesh>



</group>

);


}
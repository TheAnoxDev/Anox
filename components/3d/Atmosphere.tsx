"use client";


import * as THREE from "three";


export default function Atmosphere(){


return (

<>


<mesh scale={1.05}>


<sphereGeometry

args={[
1.4,
32,
32
]}

/>


<meshBasicMaterial

color="#22d3ee"

transparent

opacity={0.08}

side={THREE.BackSide}

depthWrite={false}

/>


</mesh>



<mesh scale={1.12}>


<sphereGeometry

args={[
1.4,
24,
24
]}

/>


<meshBasicMaterial

color="#00e5ff"

transparent

opacity={0.03}

side={THREE.BackSide}

depthWrite={false}

/>


</mesh>



</>


);


}
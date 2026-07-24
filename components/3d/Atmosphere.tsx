"use client";


import * as THREE from "three";


export default function Atmosphere(){


return(

<>


<mesh scale={1.08}>


<sphereGeometry

args={[
1.42,
96,
96
]}

/>


<meshBasicMaterial

color="#22d3ee"

transparent

opacity={0.08}

side={THREE.BackSide}

/>


</mesh>



<mesh scale={1.18}>


<sphereGeometry

args={[
1.42,
64,
64
]}

/>


<meshBasicMaterial


color="#00d9ff"

transparent

opacity={0.035}


side={THREE.BackSide}


/>


</mesh>


</>

)

}
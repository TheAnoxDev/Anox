"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { useMemo } from "react";


function random(){

  return Math.sin(
    Math.random() * 9999
  );

}



export default function Particles(){


const positions = useMemo(()=>{


const data =
new Float32Array(120 * 3);



for(let i = 0; i < 120; i++){


const radius =
2.2 + Math.abs(random()) * 1.5;


const theta =
Math.abs(random()) * Math.PI * 2;


const phi =
Math.abs(random()) * Math.PI;



data[i * 3] =
radius *
Math.sin(phi) *
Math.cos(theta);



data[i * 3 + 1] =
radius *
Math.sin(phi) *
Math.sin(theta);



data[i * 3 + 2] =
radius *
Math.cos(phi);



}



return data;


},[]);



return (

<Points

positions={positions}

stride={3}

>


<PointMaterial

transparent

color="#22d3ee"

size={0.025}

sizeAttenuation

opacity={0.45}

depthWrite={false}

/>


</Points>

);


}
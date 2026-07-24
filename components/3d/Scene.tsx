"use client";

import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

import {
  OrbitControls,
  Sparkles,
} from "@react-three/drei";

import Stars from "./Stars";

import Earth from "./Earth";



export default function Scene() {


return (

<Canvas

dpr={[1,1.75]}

camera={{
position:[0,0,5],
fov:45
}}

gl={{
antialias:true,
alpha:true,
powerPreference:"high-performance"
}}

>





{/* Space Background */}


<color

attach="background"

args={[
"#04070b"
]}

/>





{/* Lighting */}


<ambientLight

intensity={0.15}

/>



<directionalLight

position={[
4,
5,
5
]}

intensity={1.8}

/>



<pointLight

position={[
0,
0,
4
]}

intensity={12}

distance={8}

color="#22d3ee"

/>



<pointLight

position={[
-4,
-2,
-5
]}

intensity={5}

color="#0066ff"

/>





{/* Stars */}


<Stars />




{/* Cyber Particles */}


<Sparkles

count={250}

size={2}

scale={[
12,
12,
12
]}

speed={0.25}

color="#22d3ee"

/>







{/* Main Globe */}


<group

rotation={[
0.15,
0.4,
0
]}

>

<Earth />

</group>







{/* Cinematic Effects */}


<EffectComposer>


<Bloom

intensity={1.35}

luminanceThreshold={0.25}

luminanceSmoothing={0.8}

/>



<Noise

opacity={0.025}

/>



<Vignette

eskil={false}

offset={0.25}

darkness={0.8}

/>



</EffectComposer>







{/* Controls */}


<OrbitControls

enableZoom={false}

enablePan={false}

enableRotate={true}

autoRotate

autoRotateSpeed={0.25}

minPolarAngle={1.1}

maxPolarAngle={2.1}

/>



</Canvas>


);

}
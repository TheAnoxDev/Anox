"use client";

import { Canvas, useFrame } from "@react-three/fiber";

import {
  Stars,
  Line,
} from "@react-three/drei";

import {
  EffectComposer,
  Bloom,
} from "@react-three/postprocessing";

import {
  useMemo,
  useRef,
} from "react";

import * as THREE from "three";





function GlobeModel() {


  const globeRef =
    useRef<THREE.Group>(null);



  useFrame((_, delta)=>{


    if(globeRef.current){

      globeRef.current.rotation.y += delta * 0.1;

    }


  });








  const nodes =
  useMemo(()=>{


    const points:
    THREE.Vector3[] = [];


    const count = 75;



    for(let i=0;i<count;i++){


      const phi =
      Math.acos(
        -1 +
        (2*i)/count
      );



      const theta =
      Math.sqrt(
        count * Math.PI
      )
      *
      phi;




      points.push(

        new THREE.Vector3(

          Math.cos(theta)
          *
          Math.sin(phi),


          Math.sin(theta)
          *
          Math.sin(phi),


          Math.cos(phi)

        )
        .normalize()

      );


    }


    return points;


  },[]);









  const connections =
  useMemo(()=>{


    const lines:{
      start:THREE.Vector3;
      end:THREE.Vector3;
    }[]=[];



    for(
      let i=0;
      i<nodes.length-5;
      i+=4
    ){


      lines.push({

        start:nodes[i],

        end:nodes[i+5]

      });


    }



    return lines;


  },[nodes]);









return (

<group ref={globeRef}>





{/* CYBER GRID */}


<mesh>


<sphereGeometry

args={[
1,
48,
48
]}

/>


<meshBasicMaterial

color="#06b6d4"

wireframe

transparent

opacity={0.16}

/>


</mesh>








{/* AI CORE */}


<mesh>


<sphereGeometry

args={[
0.95,
32,
32
]}

/>


<meshBasicMaterial

color="#0369a1"

transparent

opacity={0.08}

/>


</mesh>









{/* NETWORK NODES */}


{
nodes.map(
(node,index)=>(


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
0.022,
8,
8
]}

/>


<meshBasicMaterial

color="#67e8f9"

/>


</mesh>


)

)

}









{/* DATA CONNECTIONS */}


{
connections.map(
(line,index)=>(


<Line

key={index}

points={[
line.start,
line.end
]}

color="#22d3ee"

transparent

opacity={0.22}

lineWidth={0.6}

/>


)

)

}









{/* ORBIT SYSTEM */}



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
-Math.PI/4,
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

opacity={0.22}

/>


</mesh>







</group>


);

}









export default function HeroGlobe(){


return (

<div

className="
w-[300px]
h-[300px]

sm:w-[400px]
sm:h-[400px]

lg:w-[500px]
lg:h-[500px]
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



dpr={[1,1.5]}



gl={{

alpha:true,

antialias:false,

powerPreference:
"high-performance"

}}



>


<ambientLight
intensity={1}
/>





<GlobeModel/>







<Stars

radius={6}

depth={2}

count={250}

factor={1.5}

speed={0.25}

/>







<EffectComposer>


<Bloom

intensity={0.9}

luminanceThreshold={0.3}

luminanceSmoothing={0.85}

/>


</EffectComposer>





</Canvas>



</div>


);


}
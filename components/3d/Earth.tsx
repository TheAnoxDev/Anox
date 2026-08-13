"use client";

import SecurityScan from "./SecurityScan";
import OrbitRings from "./OrbitRings";
import Core from "./Core";
import Atmosphere from "./Atmosphere";
import Network from "./Network";
import Particles from "./Particles";
import CoreLogo from "./CoreLogo";
import SecurityPulse from "./SecurityPulse";
import SecurityNodes from "./SecurityNodes";
import DataNetwork from "./DataNetwork";



export default function Earth() {
  return (
    <group>

      {/* Core */}

      <Core />

      <CoreLogo />

      <Atmosphere />


      {/* Security */}

      <SecurityPulse />

      <SecurityScan />

      <SecurityNodes />


      {/* Network */}

      <Network />

      <DataNetwork />


      {/* Ambient Particles */}

      <Particles />


      {/* Orbital System */}

      <OrbitRings />


      {/* Core Light */}

      <pointLight
        color="#00d9ff"
        intensity={0.7}
        distance={4}
        decay={2}
      />

    </group>
  );
}
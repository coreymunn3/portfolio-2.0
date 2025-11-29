"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function Constellation(props: any) {
  const ref = useRef<any>(null);
  const groupRef = useRef<any>(null);

  const [sphere] = useState(() => {
    const count = 6000; // Must be divisible by 3 (x, y, z for each point)
    const data = new Float32Array(count);
    const radius = 1.5;

    for (let i = 0; i < count; i += 3) {
      const u = Math.random();
      const v = Math.random();

      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);

      // Safety check for NaN
      if (isNaN(theta) || isNaN(phi)) {
        data[i] = 0;
        data[i + 1] = 0;
        data[i + 2] = 0;
        continue;
      }

      const r = Math.cbrt(Math.random()) * radius;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      data[i] = isNaN(x) ? 0 : x;
      data[i + 1] = isNaN(y) ? 0 : y;
      data[i + 2] = isNaN(z) ? 0 : z;
    }
    return data;
  });

  useFrame((state, delta) => {
    // Auto-rotation on the points themselves
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }

    // Mouse interaction on the containing group
    if (groupRef.current) {
      // Lerp towards mouse position
      // state.pointer.x/y are -1 to 1
      // We want a subtle tilt, so we multiply by a small factor (e.g. 0.1)
      // And we use a simple lerp formula: current = current + (target - current) * factor

      const targetX = state.pointer.y * 0.1;
      const targetY = state.pointer.x * 0.1;

      groupRef.current.rotation.x +=
        (targetX - groupRef.current.rotation.x) * 0.1;
      groupRef.current.rotation.y +=
        (targetY - groupRef.current.rotation.y) * 0.1;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Constellation />
      </Canvas>
    </div>
  );
}

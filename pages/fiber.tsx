import React from "react";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className="relative w-screen h-dvh overflow-hidden bg-[#ececec]">
      <Canvas>
        <mesh
          position={[0, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1, 1]}
        >
          {/*
        The thing that gives the mesh its shape
        In this case the shape is a flat plane
      */}
          <planeBufferGeometry />
          {/*
        The material gives a mesh its texture or look.
        In this case, it is just a uniform green
      */}
          <meshBasicMaterial color="green" />
        </mesh>
      </Canvas>
    </div>
  );
}

"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Preload } from "@react-three/drei";
import { Suspense } from "react";
import Hero3D from "./Hero3D";

export default function Scene() {
    return (
        <div className="w-full h-full">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 1.5]}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} color="#bc13fe" />

                    <Hero3D />

                    <Environment preset="city" />
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
}

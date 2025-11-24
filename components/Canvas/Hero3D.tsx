"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Sparkles, Float } from "@react-three/drei";
import * as THREE from "three";

export default function Hero3D() {
    const meshRef = useRef<THREE.Mesh>(null);
    const { viewport } = useThree();

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Rotate the core
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;

            // Calculate scroll progress based on window scroll
            // Normalize scroll: 0 at top, 1 at bottom of viewport (roughly)
            const scrollY = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            const scrollProgress = Math.min(scrollY / window.innerHeight, 1); // Cap at 1 screen height for the move effect

            // Move based on scroll
            // Move to the right and fade out/move back as we scroll down
            meshRef.current.position.x = THREE.MathUtils.lerp(0, 3, scrollProgress * 2);
            meshRef.current.position.z = THREE.MathUtils.lerp(0, -5, scrollProgress * 2);

            // Subtle mouse interaction (parallax)
            const { x, y } = state.pointer;
            meshRef.current.position.x += x * 0.5;
            meshRef.current.position.y += y * 0.5;
        }
    });

    return (
        <group>
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <Sphere args={[1, 32, 32]} ref={meshRef}>
                    <MeshDistortMaterial
                        color="#000000"
                        emissive="#00f3ff"
                        emissiveIntensity={0.5}
                        roughness={0.1}
                        metalness={1}
                        distort={0.4}
                        speed={2}
                    />
                </Sphere>
            </Float>

            <Sparkles
                count={50}
                scale={10}
                size={2}
                speed={0.4}
                opacity={0.5}
                color="#bc13fe"
            />

            <Sparkles
                count={30}
                scale={8}
                size={4}
                speed={0.2}
                opacity={0.8}
                color="#00f3ff"
            />
        </group>
    );
}

"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({
  position,
  color,
  scale = 1,
  speed = 1,
  distort = 0.3,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
  distort?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function FloatingTorus({
  position,
  color,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[0.8, 0.3, 16, 32]} />
        <meshStandardMaterial
          color={color}
          wireframe
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#a78bfa" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#22d3ee" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#c084fc"
      />

      <FloatingShape position={[-3, 1, -2]} color="#a78bfa" scale={0.8} speed={0.8} />
      <FloatingShape position={[3.5, -0.5, -1]} color="#22d3ee" scale={0.6} speed={1.2} distort={0.5} />
      <FloatingTorus position={[0, 0.5, -3]} color="#c084fc" scale={0.7} />
      <FloatingShape position={[1.5, 2, -4]} color="#818cf8" scale={0.4} speed={1.5} />
      <FloatingTorus position={[-2, -1.5, -2]} color="#67e8f9" scale={0.5} />

      <Stars
        radius={50}
        depth={50}
        count={2000}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />
    </>
  );
}

export function SceneCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

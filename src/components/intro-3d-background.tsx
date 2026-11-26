'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import type { Mesh, Vector3 } from 'three';
import * as THREE from 'three';

interface FloatingParticlesProps {
  mousePosition: { x: number; y: number };
}

const FloatingParticles = ({ mousePosition }: FloatingParticlesProps) => {
  const particlesRef = useRef<Mesh[]>([]);
  const initialPositionsRef = useRef<Array<[number, number, number]>>([]);
  const targetPositionRef = useRef<Vector3>(new THREE.Vector3(0, 0, 0));
  const { size } = useThree();

  // Store initial positions
  useEffect(() => {
    if (
      particlesRef.current.length &&
      initialPositionsRef.current.length === 0
    ) {
      initialPositionsRef.current = particlesRef.current.map((particle) => {
        if (!particle) return [0, 0, 0];
        return [
          particle.position.x,
          particle.position.y,
          particle.position.z,
        ] as [number, number, number];
      });
    }
  }, []);

  // Convert mouse position to 3D world coordinates (simplified)
  useEffect(() => {
    const normalizedX = (mousePosition.x / size.width) * 2 - 1;
    const normalizedY = -(mousePosition.y / size.height) * 2 + 1;

    // Map to 3D space (adjust scale as needed)
    targetPositionRef.current.set(normalizedX * 4, normalizedY * 4, 0);
  }, [mousePosition, size]);

  useFrame(() => {
    if (
      !particlesRef.current.length ||
      initialPositionsRef.current.length === 0
    )
      return;

    const target = targetPositionRef.current;

    particlesRef.current.forEach((particle, i) => {
      if (!particle || !initialPositionsRef.current[i]) return;

      // Calculate distance from particle to cursor
      const dx = target.x - particle.position.x;
      const dy = target.y - particle.position.y;
      const dz = target.z - particle.position.z;
      const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

      // Create comet effect: particles closer to cursor move faster
      const maxDistance = 6;
      const attractionStrength = Math.max(0, 1 - distance / maxDistance);

      // Base speed increases with attraction strength
      const baseSpeed = 0.05;
      const speed = baseSpeed + attractionStrength * 0.15;

      // Create trailing effect: particles further from cursor trail more
      // Use distance-based delay instead of index-based for better comet effect
      const trailFactor = Math.min(1, distance / maxDistance);
      const moveX = dx * speed * (1 - trailFactor * 0.7);
      const moveY = dy * speed * (1 - trailFactor * 0.7);
      const moveZ = dz * speed * (1 - trailFactor * 0.7);

      // Move particles only based on cursor position
      particle.position.x += moveX;
      particle.position.y += moveY;
      particle.position.z += moveZ;

      // Rotation towards cursor
      particle.rotation.x += 0.01 + attractionStrength * 0.03;
      particle.rotation.y += 0.01 + attractionStrength * 0.03;
    });
  });

  return (
    <>
      {Array.from({ length: 25 }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) particlesRef.current[i] = el as unknown as Mesh;
          }}
          position={[
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 3,
          ]}
        >
          <octahedronGeometry args={[0.05, 0]} />
          <meshStandardMaterial
            color="red"
            emissive="red"
            emissiveIntensity={1.2}
            opacity={0.8}
            transparent
          />
        </mesh>
      ))}
    </>
  );
};

export const Intro3DBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        dpr={[1, 2]}
        className="size-full"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[2, 2, 2]} intensity={0.8} color="#ff0" />
        <pointLight position={[-2, -2, -2]} intensity={0.5} color="#ff0012" />
        <FloatingParticles mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};

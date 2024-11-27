"use client";
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

const Model = ({ isUserInteracting }) => {
  const { scene } = useGLTF('/model/tommy.glb');

  scene.scale.set(4, 4, 4); 

  return (
    <group position={[0, -2.45, 0]}> 
      <primitive object={scene} />
    </group>
  );
};

const TommyModel = () => {
  const [isUserInteracting, setIsUserInteracting] = React.useState(false);

  return (
    <Canvas
      camera={{ position: [0, 5, 10], fov: 60 }}  
      style={{ width: '50%', height: '100%' }}
    >
      <ambientLight intensity={2.5} />
      <Model isUserInteracting={isUserInteracting} />
      <OrbitControls
        autoRotate={true}  
        autoRotateSpeed={5}
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2} 
        minPolarAngle={Math.PI / 3} 
        onStart={() => setIsUserInteracting(true)}
        onEnd={() => setIsUserInteracting(false)}
      />
    </Canvas>
  );
};

export default TommyModel;

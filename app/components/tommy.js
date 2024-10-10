// components/tommy.js
"use client";
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

const Model = ({ isUserInteracting }) => {
  const { scene } = useGLTF('/model/tommy.glb');

  // Adjust the scale to make the model bigger
  scene.scale.set(4, 4, 4); // Adjust as needed

  // Wrap the model in a group to adjust its position
  return (
    <group position={[0, -2.45, 0]}> {/* Lower the model by 1 unit */}
      <primitive object={scene} />
    </group>
  );
};

const TommyModel = () => {
  const [isUserInteracting, setIsUserInteracting] = React.useState(false);

  return (
    <Canvas
      camera={{ position: [0, 5, 10], fov: 60 }}  // Camera higher on Y-axis, looking down
      style={{ width: '50%', height: '100%' }}
    >
      <ambientLight intensity={2.5} />
      <Model isUserInteracting={isUserInteracting} />
      <OrbitControls
        autoRotate={true}  
        autoRotateSpeed={5}
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2} // Allow a higher viewing angle
        minPolarAngle={Math.PI / 3} // Prevent from looking too far down
        onStart={() => setIsUserInteracting(true)}
        onEnd={() => setIsUserInteracting(false)}
      />
    </Canvas>
  );
};

export default TommyModel;

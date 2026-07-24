import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage } from '@react-three/drei';
import modelUrl from '../../../img/3D/608ce9d8-6c41-4a19-b6c6-0c4315f40478.glb';

function Model() {
  const { scene } = useGLTF(modelUrl);
  return <primitive object={scene} />;
}

export const ModelViewer: React.FC = () => {
  return (
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
          <Model />
        </Stage>
      </Suspense>
      <OrbitControls makeDefault />
    </Canvas>
  );
};

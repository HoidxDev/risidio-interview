import { Canvas } from '@react-three/fiber'
import { Lobby } from './lobby'
import { Environment, OrbitControls } from '@react-three/drei'
// import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Suspense } from 'react';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

export default function Scene() {
    return (
        <Canvas style={{ height: '100vh', width: '100vw' }}>
            <Suspense>
                <Environment preset='sunset' />
                <Lobby />
                <OrbitControls />
            </Suspense>
            <EffectComposer>
                <Bloom mipmapBlur luminanceThreshold={1} levels={20} intensity={1} />
            </EffectComposer>
        </Canvas>
    )
}

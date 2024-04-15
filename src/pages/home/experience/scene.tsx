import { Canvas } from '@react-three/fiber'
import { Lobby } from './lobby'
import { Suspense } from 'react';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Character } from './character';
import Helpers from './helpers';
import { Loader } from '@react-three/drei';

export default function Scene() {
    return (
        <>
            <Canvas style={{ height: '100vh', width: '100vw' }} camera={{ rotation: [0, 5, 0] }}>
                <Suspense>
                    <Lobby />
                </Suspense>
                <Character />
                <Helpers />
                <EffectComposer>
                    <Bloom mipmapBlur luminanceThreshold={1} levels={20} intensity={1} />
                </EffectComposer>
            </Canvas>
            <Loader />
        </>
    )
}

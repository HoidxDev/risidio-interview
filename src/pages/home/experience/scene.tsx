import { Canvas } from '@react-three/fiber'
import { Lobby } from './lobby'
import { OrbitControls } from '@react-three/drei'

export default function Scene() {
    return (
        <Canvas style={{ height: '100vh', width: '100vw' }}>
            <ambientLight />
            <Lobby />
            <OrbitControls />
        </Canvas>
    )
}
